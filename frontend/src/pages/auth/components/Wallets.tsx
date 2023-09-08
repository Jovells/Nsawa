import K from "@/constants";

const Wallets = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {K.WALLETS.map((wallet) => (
        <div className="flex gap-3 items-center">
          <img src={wallet.icon} alt={`${wallet.name}-icon`} className="w-12" />
          <h4>{wallet.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Wallets;
