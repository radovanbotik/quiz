import React from "react";
import Bubble from "./Bubble";

const Chat = () => {
  const agent =
    "https://www.thebalancecareers.com/thmb/Xv4GdXije2T51iT2vkiYmnyhRzo=/2120x1414/filters:fill(auto,1)/customerserviceGettyImages-486396921-5a31df747bb2830037c4f034.jpg";
  const customer =
    "https://images.businessnewsdaily.com/app/uploads/2022/04/04074357/Stressed-frustrated-customer-call_fizkes.png";

  return (
    <div className="h-full w-full">
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={"Thank you for choosing AT&T, my name is Tina. May I have your name, please?"}
      />
      <Bubble
        position={"end"}
        displayName={"Lillian"}
        imageUrl={customer}
        reply={"Hello Tina, my name is Lillian Knight"}
      />
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={"Thank you Mrs. Knight, How may I help you today?"}
      />
      <Bubble
        position={"end"}
        displayName={"Lillian"}
        imageUrl={customer}
        reply={"My bill was $6.20 more than previous month, I would like to know why"}
      />
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={"I can help you with that, but before we start may I please have your passcode?"}
      />
      <Bubble position={"end"} displayName={"Lillian"} imageUrl={customer} reply={"It is 2378"} />
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={"Thank you, the password is correct. Now I will check your profile and see what went wrong"}
      />
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={"I am looking at your bill and I am afraid you were charged extra $6.20 due to late payment"}
      />
      <Bubble
        position={"end"}
        displayName={"Lillian"}
        imageUrl={customer}
        reply={"Oh, that is correct. I was very busy lately and forgot to pay on time."}
      />
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={
          "If your schedule is very busy you might be interested in setting up AutoPay.\nThanks to AutoPay you will always pay on time and avoid possible late fees.\nNot only that but you will be eligible for a discount if you set up paperless billing aswell."
        }
      />
      <Bubble
        position={"end"}
        displayName={"Lillian"}
        imageUrl={customer}
        reply={"That sounds great, but I don't have time for that right now."}
      />
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={
          "No worries, you can always set it up later.\nYou can use our myAT&T application on your smart device or simply visit our website att.com/myatt "
        }
      />
      <Bubble
        position={"end"}
        displayName={"Lillian"}
        imageUrl={customer}
        reply={"Oh I didn't know that. I will try that later. Thank you"}
      />
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={"You are welcome, is there anything else I can do for you today?"}
      />
      <Bubble position={"end"} displayName={"Lillian"} imageUrl={customer} reply={"No that's all. Thank you."} />
      <Bubble
        position={"start"}
        displayName={"Tina"}
        imageUrl={agent}
        reply={
          "Well in that case, I thank you for your ongoing bussiness with AT&T, my name was Tina and I wish your very nice day!"
        }
      />
    </div>
  );
};

export default Chat;
