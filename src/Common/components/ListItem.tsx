import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type ListItemProps = {
  text: string;
  selected?: boolean;
  onClick?: (text: string) => void;
  customClasses?: object;
};

const ListItem = ({
  text,
  selected,
  onClick,
  customClasses,
}: ListItemProps) => {
  const handleClick = () => {
    if (!onClick) {
      return;
    }
    onClick(text);
  };

  return (
    <>
      <ListItemButton
        sx={customClasses}
        selected={selected}
        onClick={() => handleClick()}
      >
        <ListItemText primary={text} />
      </ListItemButton>
    </>
  );
};

export default ListItem;
