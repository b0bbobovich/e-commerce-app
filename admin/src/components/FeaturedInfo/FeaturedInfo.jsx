import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import {
  Container,
  Item,
  Title,
  MoneyContainer,
  Money,
  MoneyRate,
  FeatureSub,
  Icon
} from "./FeaturedInfo.styled";

  
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>${income[1]?.total}</Money>
          <MoneyRate>
            %{Math.floor(perc)}{" "}
                {perc >= 0
                    ? (<Icon positive>
                        <ArrowUpward/>         
                    </Icon>)  
                    : (<Icon>
                        <ArrowDownward/>
                    </Icon>)}
          </MoneyRate>
        </MoneyContainer>
        <FeatureSub>Compared to last month</FeatureSub>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
            <Money>$4,415</Money>                                            {/*//TODO take real numbers from db*/}
            <MoneyRate>                                                     {/*//TODO  78-84*/}
                <Icon>
                    -1.4 <ArrowDownward/>
                </Icon>  
          </MoneyRate>
        </MoneyContainer>
        <FeatureSub>Compared to last month</FeatureSub>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
            <Money>$2,225</Money>
            <MoneyRate>
                <Icon>
                    +2.4 <ArrowUpward />    
                </Icon>      
            </MoneyRate>
        </MoneyContainer>
        <FeatureSub>Compared to last month</FeatureSub>
      </Item>
    </Container>
  );
}

export default FeaturedInfo