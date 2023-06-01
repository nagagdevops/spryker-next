import { Box, Divider } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import { Paragraph, Span } from "components/Typography";
import { useAppContext } from "contexts/AppContext";

import { currency } from "lib";
const CheckoutSummary2 = () => {
  const { state } = useAppContext();
const cartList = state.cart;
  return (
    <Box>
      <Paragraph color="secondary.900" fontWeight={700} mb={2}>
        Your order
      </Paragraph>

      {cartList.map((item) => (
        <FlexBetween mb={1.5} key={item.name}>
          <Paragraph>
            <Span fontWeight="700" fontSize="14px">
              {item.qty}
            </Span>{" "}
            x {item.name}
          </Paragraph>
          <Paragraph>{currency(item.price)}</Paragraph>
        </FlexBetween>
      ))}

      <Divider
        sx={{
          borderColor: "grey.300",
          my: 3,
        }}
      />

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Subtotal:</Paragraph>
        <Paragraph fontWeight="700">{currency(140)}</Paragraph>
      </FlexBetween>

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Shipping:</Paragraph>
        <Paragraph fontWeight="700">-</Paragraph>
      </FlexBetween>

      <FlexBetween mb={0.5}>
        <Paragraph color="grey.600">Tax:</Paragraph>
        <Paragraph fontWeight="700">{currency(40)}</Paragraph>
      </FlexBetween>

      <FlexBetween mb={3}>
        <Paragraph color="grey.600">Discount:</Paragraph>
        <Paragraph fontWeight="700">-</Paragraph>
      </FlexBetween>

      <Divider
        sx={{
          borderColor: "grey.300",
          mb: 1,
        }}
      />

      <FlexBetween fontWeight="700" mb={1}>
        <Paragraph>Total:</Paragraph>
        <Paragraph fontWeight="700">{currency(2650)}</Paragraph>
      </FlexBetween>
    </Box>
  );
};
export default CheckoutSummary2;
