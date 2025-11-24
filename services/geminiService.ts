import { GoogleGenAI, Type } from "@google/genai";
import { AiFlavorResponse } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateDreamFlavor = async (inspiration: string): Promise<AiFlavorResponse | null> => {
  if (!apiKey) {
    console.error("API Key is missing");
    return null;
  }

  const schema = {
    type: Type.OBJECT,
    properties: {
      flavorName: {
        type: Type.STRING,
        description: "A fun, creative name for the ice cream flavor, fitting the Sweet Cow brand (wholesome, fun, punny).",
      },
      description: {
        type: Type.STRING,
        description: "A mouth-watering description of the flavor profile, textures, and mix-ins.",
      },
      ingredients: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of 3-5 key ingredients.",
      },
      colorHex: {
        type: Type.STRING,
        description: "A valid hex color code representing the base ice cream color.",
      }
    },
    required: ["flavorName", "description", "ingredients", "colorHex"],
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Invent a unique ice cream flavor based on this inspiration: "${inspiration}". 
                 The brand is 'Sweet Cow', known for small-batch, handcrafted, simply great ice cream. 
                 Be creative, fun, and delicious.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.8,
      }
    });

    const text = response.text;
    if (!text) return null;

    return JSON.parse(text) as AiFlavorResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};