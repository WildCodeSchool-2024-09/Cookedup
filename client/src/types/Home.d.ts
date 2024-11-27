export interface RecipeData {
  id: number;
  title: string;
  image: string;
}

export interface SimilarData extends RecipeData {
  sourceUrl: string;
  imageType: string;
}

interface FormWithButtonProps {
  setNewFetch: React.Dispatch<React.SetStateAction<string>>;
  newFetch: string;
}

export interface RecipeDetails extends RecipeData {
  readyInMinutes: number;
  summary: string;
  diets: [string];
  extendedIngredients: [
    {
      amount: number;
      id: number;
      original: string;
      name: string;
      image: string;
      unit: string;
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
