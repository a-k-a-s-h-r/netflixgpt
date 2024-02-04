import OpenAI from "openai";
import { openAiApiKey } from "./Constants";

export const openai = new OpenAI({
    apiKey: openAiApiKey, 
    dangerouslyAllowBrowser: true
    // This is the default and can be omitted
  });
