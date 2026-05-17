import { MondayClientSdk } from "monday-sdk-js";

export async function addLineOfTextToDoc(mondaysdk : MondayClientSdk, afterBlockId : string )
{
  const data = {
    type: "normal text", // or "large title", "quote", etc.
    content: {
      deltaFormat: [
        {
          insert: "New block content from SDK"
        }
      ]
    },
    afterBlockId
  };

 let res =  await mondaysdk.execute("addDocBlock", data);
 console.log("Results from add line api " + JSON.stringify(res))

}

