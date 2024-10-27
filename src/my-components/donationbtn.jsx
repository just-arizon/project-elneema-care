// DonationBtn.js
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DonationBtn = ({ title = "Donation Received", description = "Thank you for your support!" }) => {
  const { toast } = useToast();

  return (
    <Button
      variant="solid"
      onClick={() => {
        toast({
          title,
          description,
        });
      }}
      className="bg-orange-400 hover:bg-orange-500 text-white rounded-full px-10 py-2"
    >
      Donate
    </Button>
  );
};

export default DonationBtn;
