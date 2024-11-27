export interface Ingredient {
  title: string;
  quantity: number;
  unit: string;
}

export interface RecipeData {
  id: number;
  title: string;
  image: string;
  extendedIngredients?: {
    measures: {
      metric: { amount: number; unitShort: string };
    };
    name: string;
  }[];
}
interface RecipeCardProps {
  recipe: RecipeData;
}
interface FormWithButtonProps {
  setNewFetch: React.Dispatch<React.SetStateAction<string>>;
  newFetch: string;
}
export interface RecipeDetails extends RecipeData {
  readyInMinutes: number;
  summary: string;
  extendedIngredients: [
    {
      amount: number;
      id: number;
      original: string;
      name: string;
      image: string;
    },
  ];
  analyzedInstructions: [
    {
      steps: [
        {
          number: number;
          step: string;
        },
      ];
    },
  ];
}
