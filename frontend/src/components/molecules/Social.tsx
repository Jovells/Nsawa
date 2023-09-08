import K from "@/constants";

const Social = () => {
  return (
    <div className="flex gap-4">
      {K.SOCIAL.map((item) => (
        <img src={item.icon} alt={item.name} />
      ))}
    </div>
  );
};

export default Social;
