
const Footer = ({items, itemCounter}) => {
  const packed = items.filter((item) => item.packed).length;
 const percentage = (packed / itemCounter) * 100;
 
  return (
    <div className="footerWrap">
      { percentage === 100
      ? "Done. Coffee break :)" 
      :  `- Total items: ${itemCounter} --
       Completed items: ${packed} --
        Purchase percentage: ${percentage}% -`}
    </div>
  );
};

export default Footer;