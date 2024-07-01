import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  console.log(items);

  const itemsCut = items.slice(0, 4);

  return (
    <div>
          {title ? <Cover img={coverImg} title={title}></Cover> : 'nothing'}
      <div className="grid grid-cols-2 gap-4">
        {itemsCut.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
