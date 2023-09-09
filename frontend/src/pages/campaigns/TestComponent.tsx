import useQueryCampaigns from "./hooks/useQueryApollo";

const TestComponent = () => {
  // eslint-disable-next-line no-empty-pattern
  const {} = useQueryCampaigns();
  return <div>TestComponent</div>;
};

export default TestComponent;
