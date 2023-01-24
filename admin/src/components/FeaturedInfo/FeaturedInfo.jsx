import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
import {
  ComponentContainer,
  SelectContainer,
  Label,
  Select,
  Option,
  StatsContainer,
  Item,
  Title,
  MoneyContainer,
  Money,
  MoneyRate,
  FeatureSub,
  Icon
} from "./FeaturedInfo.styled";

const FeaturedInfo = () => {
  const [dailyStats, setDailyStats] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState([]);
  const [orders, setOrders] = useState(null);
  const [revenue, setRevenue] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [ordersPerc, setOrdersPerc] = useState(0);
  const [revenuePerc, setRevenuePerc] = useState(0);
  const token = useSelector(state => state.user.currentUser.accessToken);


  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest(token).get("/orders/income");
        setCurrentDate(new Date());
        setDailyStats(res.data.dailyStats);
        setMonthlyStats(res.data.monthlyStats);
      } catch (err) {
        console.error(err)
      }
    };
    getIncome();
  }, []);

  useEffect(() => {
    showStatsData();
  }, [dailyStats, monthlyStats])

  useEffect(() => {
    const id = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => {
      clearInterval(id);
    }
  }, []);

  const summarizeData = (array) => {
    const ordersSum = array.reduce((accumulator, currentValue) =>
      accumulator + currentValue.orders
      , 0);
    const revenueSum = array.reduce((accumulator, currentValue) =>
      accumulator + currentValue.revenue
      , 0);
    return [ordersSum, revenueSum]
  };


  const getDayData = (dayOfMonth) => {
    const data = dailyStats?.find((dayStats) => dayStats._id === dayOfMonth.getDate());
    return [data?.orders, data?.revenue]
  };

  const getDaysData = (firstDay, lastDay) => {
    const firstDayIndex = dailyStats.findIndex((day) => day._id === firstDay.getDate());
    const lastDayIndex = dailyStats.findIndex((day) => day._id === lastDay.getDate());
    const differenceInTime = firstDay.getTime() - lastDay.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    let data = dailyStats.filter((dayStats) => dayStats._id <= currentDate.getDate());
    if (data.length < differenceInDays) {
      data = [...data, ...dailyStats.slice(-(differenceInDays - data.length))];
    }
    else {
      data = data.slice(lastDayIndex + 1, firstDayIndex + 1);
    }
    return summarizeData(data);
  };

  const getMonthData = (monthOfYear) => {
    const data = monthlyStats?.find((monthStats) => monthStats._id === monthOfYear.getMonth() + 1);
    return [data?.orders, data?.revenue]
  };

  const getMonthsData = (firstMonth, lastMonth) => {
    const firstMonthIndex = monthlyStats.findIndex((month) => month._id === firstMonth.getMonth() + 1);
    const lastMonthIndex = monthlyStats.findIndex((month) => month._id === lastMonth.getMonth() + 1);
    const differenceInTime = firstMonth.getTime() - lastMonth.getTime();
    const differenceInMonth = Math.ceil(differenceInTime / (1000 * 3600 * 24 * 30));

    let data = monthlyStats.filter((monthStats) => monthStats._id <= currentDate.getMonth());
    if (data.length < differenceInMonth) {
      data = [...data, ...monthlyStats.slice(-(differenceInMonth - data.length))];
    }
    else {
      data = data.slice(lastMonthIndex + 1, firstMonthIndex + 1);
    }
    return summarizeData(data)
  };


  const getFilteredData = (selectedFilter) => {
    let totalOrders = null;
    let totalRevenue = null;
    let firstDay = null;
    let lastDay = null;
    let firstMonth = null;
    let lastMonth = null;

    switch (selectedFilter) {
      case "Today":
        const today = currentDate;
        [totalOrders, totalRevenue] = getDayData(today);
        break;
      case "Yesterday":
        const yesterday = new Date(new Date().setDate(currentDate.getDate() - 1));
        [totalOrders, totalRevenue] = getDayData(yesterday);
        break;
      case "Last 7 days":
        firstDay = currentDate;
        lastDay = new Date(new Date().setDate(firstDay.getDate() - 7));
        [totalOrders, totalRevenue] = getDaysData(firstDay, lastDay);
        break;
      case "Last 30 days":
        firstDay = currentDate;
        lastDay = new Date(new Date().setDate(firstDay.getDate() - 30));
        [totalOrders, totalRevenue] = getDaysData(firstDay, lastDay);
        break;
      case "This month":
        const todaysMonth = currentDate;
        [totalOrders, totalRevenue] = getMonthData(todaysMonth);
        break;
      case "Last 12 month":
        firstMonth = currentDate;
        lastMonth = new Date(new Date().setMonth((firstMonth.getMonth() + 1) - 12));
        [totalOrders, totalRevenue] = getMonthsData(firstMonth, lastMonth);
        break;
    }
    return [totalOrders, totalRevenue]
  };

  const getCompareData = (timeRange) => {
    let compareOrders = null;
    let compareRevenue = null;
    let firstDay = null;
    let lastDay = null;

    switch (timeRange) {
      case "Today":
        const yesterday = new Date(new Date().setDate(currentDate.getDate() - 1));
        [compareOrders, compareRevenue] = getDayData(yesterday);
        break;
      case "Yesterday":
        const dayBeforeYesterday = new Date(new Date().setDate(currentDate.getDate() - 2));
        [compareOrders, compareRevenue] = getDayData(dayBeforeYesterday);
        break;
      case "Last 7 days":
        firstDay = new Date(new Date().setDate(currentDate.getDate() - 7));
        lastDay = new Date(new Date().setDate(firstDay.getDate() - 7));
        [compareOrders, compareRevenue] = getDaysData(firstDay, lastDay);
        break;
      case "Last 30 days":
        // TODO GET MORE DATA FROM API AND SHOW 30 DAYS COMPARE DATA FOR THE SAME PERIOD OF TIME BUT MONTH AGO
        break;
      case "This month":
        const monthBeforeThisMonth = new Date(new Date().setMonth((currentDate.getMonth())));
        [compareOrders, compareRevenue] = getMonthData(monthBeforeThisMonth);
        break;
      case "Last 12 month":
        // TODO GET MORE DATA FROM API AND SHOW 12 MONTH COMPARE DATA FOR THE SAME PERIOD OF TIME BUT 1 YEAR AGO
        break;
    }
    return [compareOrders, compareRevenue]
  };

  const getPercData = (data, compareData) => {
    const percData = ((data * 100) / compareData) - 100;
    if (isFinite(percData)) {
      return percData
    }
    else {
      return 0
    }
  };

  const showStatsData = (event) => {
    let selectedFilter = "Today";
    if (event) {
      selectedFilter = event.target.value;
    };
    const [totalOrders, totalRevenue] = getFilteredData(selectedFilter);
    setOrders(totalOrders);
    setRevenue(totalRevenue);

    const [compareTotalOrders, compareTotalRevenue] = getCompareData(selectedFilter);

    // if (compareTotalOrders !== null && compareTotalRevenue !== null) { }
    const ordersPercData = getPercData(totalOrders, compareTotalOrders);
    const revenuePercData = getPercData(totalRevenue, compareTotalRevenue);
    setOrdersPerc(ordersPercData);
    setRevenuePerc(revenuePercData);
  
  };

  return (
    <ComponentContainer>
      <SelectContainer>
        <Label htmlFor="stats-overview">Stats overview for </Label>
        <Select id="stats-overview" defaultValue="Today" onChange={showStatsData}>
          <Option value="Today">Today</Option>
          <Option value="Yesterday">Yesterday</Option>
          <Option value="Last 7 days">Last 7 days</Option>
          <Option value="Last 30 days">Last 30 days</Option>
          <Option value="This month">This month</Option>
          <Option value="Last 12 month">Last 12 month</Option>
        </Select>
      </SelectContainer>
      <StatsContainer>
        <Item>
          <Title>Orders</Title>
          <MoneyContainer>
              <Money>{orders}</Money>
            <MoneyRate>
                  {Math.floor(ordersPerc)}{" "}%
                  {ordersPerc === 0
                      ? (<Icon disabled />)
                      : ordersPerc >= 0
                        ? (<Icon positive>
                                <ArrowUpward/>         
                        </Icon>) 
                        : (<Icon>
                                <ArrowDownward/>
                        </Icon>
                      )  
                  }
              </MoneyRate>
          </MoneyContainer>
          <FeatureSub>Compared to the same time range in the past</FeatureSub>
        </Item>
        <Item>
          <Title>Revenue</Title>
          <MoneyContainer>
            <Money>${revenue}</Money>
            <MoneyRate>
              {Math.floor(revenuePerc)}{" "}%
              {revenuePerc === 0
                ? (<Icon disabled />)
                : revenuePerc >= 0
                  ? (<Icon positive>
                    <ArrowUpward />
                  </Icon>)
                  : (<Icon>
                    <ArrowDownward />
                  </Icon>
                  )
              } 
            </MoneyRate>
          </MoneyContainer>
          <FeatureSub>Compared to the same time range in the past</FeatureSub>
        </Item>
      </StatsContainer>
    </ComponentContainer>

  );
}

export default FeaturedInfo