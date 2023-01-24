import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js"
import { useSelector } from "react-redux";
import {
  Container,
  Title,
  Table,
  TableBody,
  TableRow,
  TableHeader,
  User,
  Image,
  Email,
  Date,
  Amount,
  Button
} from "./WidgetLg.styled";

const WidgetLg = () => {
    const [orders, setOrders] = useState([]);
    const token = useSelector(state => state.user.currentUser.accessToken);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest(token).get("orders");
        setOrders(res.data);
      } catch (err) {
        console.error(err)
      }
    };
    getOrders();
  }, []);

  return (
    <Container>
        <Title>Latest transactions</Title>
        <Table>
        <TableBody>    
            <TableRow>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
        </TableBody>             
        {orders
          .sort((a,b) => b.createdAt.localeCompare(a.createdAt))
          .map((order) => (
                    <TableBody key={order._id}>  
                        <TableRow>
                            <User>
                              <Email>{order.contact.email}</Email>
                              </User>
                              <Date>{format(order.createdAt)}</Date>
                              <Amount>${order.amount}</Amount>
                              <td>
                              <Button type={order.status} />
                            </td>
                        </TableRow>
                    </TableBody>    
        ))}
      </Table>
    </Container>
  );
}

export default WidgetLg