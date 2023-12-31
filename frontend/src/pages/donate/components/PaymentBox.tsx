import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { useAuth } from "@/context/AuthContext";
import { ethers } from "ethers";
import { nsawaContract } from "@/contract";
import { useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

const PaymentBox = () => {
  const { ethereum } = useAuth();
  const amountRef = useRef<HTMLInputElement | null>(null);
  const purposeRef = useRef<HTMLTextAreaElement | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleDonation = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (ethereum) {
      setIsSubmitting(true);
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      // const txn = nsawaContract.connect(signer);

      const amount = amountRef.current?.value;
      if (!amount) {
        setError("Amount is required!");
        setIsSubmitting(false);
        return;
      }
      const purpose = purposeRef.current?.value;

      console.log(amount);

      try {
        setError("");
        await nsawaContract
          .connect(signer)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          .donate(purpose, { value: ethers.parseEther(amount) });
      } catch (error) {
        console.error;
        setError("Transaction failed. Try again");
        setIsSubmitting(false);
        return;
      }

      setSuccessMessage(`Thank you for donating!`);
      setError("");
    }
    // purpose
    //   ? //@ts-ignore
    //     await txn.donate(purpose, { value: amount })
    //   : //@ts-ignore
    //     await txn.donate({ value: amount });
  };
  return (
    <form onSubmit={handleDonation}>
      <Card className="w-full shadow-lg border-none py-5">
        <CardHeader>
          <CardTitle className="mb-3 text-3xl font-robotoSlab">
            Make Donation
          </CardTitle>
          <CardDescription>
            Enter required details to make a donation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2 my-2">
              <label htmlFor="amount">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                required
                id="amount"
                placeholder="Amount to donate"
                ref={amountRef}
              />
            </div>
            <div className="flex flex-col space-y-2 my-2">
              <label htmlFor="reason">
                Purpose <span className="italic opacity-50">Optional</span>
              </label>

              <textarea
                placeholder="Type your purpose for donating here."
                id="reason"
                ref={purposeRef}
                rows={5}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex  w-full justify-center">
          <Button disabled={isSubmitting && !successMessage} className="px-10">
            Send
          </Button>
        </CardFooter>
        <div className="flex flex-col text-sm mb-5">
          {isSubmitting && !successMessage && (
            <div className="flex w-full justify-center">
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#471AA0"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>
          )}
          {successMessage && (
            <p className="text-center">
              {successMessage}
              <Link to="/campaigns" className="text-[#471AA0] cursor-pointer">
                {" "}
                Click
              </Link>{" "}
              to view donations
            </p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}
        </div>
      </Card>
    </form>
  );
};

export default PaymentBox;
