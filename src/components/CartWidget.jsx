import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
const CartWidget = () => {
  return (
    <>
      <Badge badgeContent={4} color="error">
        <ShoppingCartIcon />
      </Badge>
    </>
  );
};

export default CartWidget;
