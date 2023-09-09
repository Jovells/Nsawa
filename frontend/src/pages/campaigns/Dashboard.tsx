/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useQueryCampaigns from "./hooks/useQueryCampaigns";
import { ThreeDots } from "react-loader-spinner";
import Campaigns from "./components/Campaigns";

const Dashboard = () => {
  const { totalOrganisations, totalDonations, campaigns, loading } =
    useQueryCampaigns();

  return (
    <>
      {" "}
      {loading ? (
        <div className="flex flex-col w-full justify-center items-center min-h-screen text-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#471AA0"
            ariaLabel="three-dots-loading"
            visible={true}
          />
          <p>Loading data...</p>
        </div>
      ) : (
        <div className="hidden flex-col md:flex">
          <div className="flex-1 space-y-5 p-8 pt-28">
            <h1 className="md:text-center font-bold tracking-tight  text-[#471AA0] mb-10  ">
              #Nsawa Campaigns
            </h1>

            <div className="space-y-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="shadow-md border-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Campaigns
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-[#471AA0]"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {totalOrganisations}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md border-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Donations
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-[#471AA0]"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{totalDonations}</div>
                  </CardContent>
                </Card>
                <Card className="shadow-md border-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Donation Status
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-[#471AA0]"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">Active</div>
                  </CardContent>
                </Card>
              </div>
              <div className="min-h-screen">
                {/* @ts-ignore  */}
                <Campaigns campaigns={campaigns} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
