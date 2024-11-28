export interface Ingredient {
  title: string;
  quantity: number;
  unit: string;
}

export interface RecipeData {
  id: number;
  title: string;
  image: string;
  imageType: string;
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

export interface SimilarRecipeData extends RecipeData {
  sourceUrl?: string;
  imageType?: string;
}

interface FormWithButtonProps {
  setNewFetch: React.Dispatch<React.SetStateAction<string>>;
  newFetch: string;
}

export interface RecipeDetails extends RecipeData {
  readyInMinutes: number;
  summary: string;
  diets: string[];
  servings: number;
  extendedIngredients: {
    amount: number;
    id: number;
    original: string;
    name: string;
    image: string;
    unit: string;
  }[];
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
