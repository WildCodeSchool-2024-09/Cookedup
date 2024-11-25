export interface RecipeData {
  id: number;
  title: string;
  image: string;
}
interface FormWithButtonProps {
  setFetchLink: React.Dispatch<React.SetStateAction<string>>;
  fetchLink: string;
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
