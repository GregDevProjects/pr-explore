import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

type ListItemProps = {
  text: string;
  selected: boolean;
  onClick: (text: string) => void;
};

const ListItem = ({ text, selected, onClick }: ListItemProps) => {
  const handleClick = () => {
    onClick(text);
  };

  return (
    <>
      <ListItemButton selected={selected} onClick={() => handleClick()}>
        <ListItemText primary={text} />
      </ListItemButton>
    </>
  );
};

export default ListItem;
