export interface RecipeData {
  id: number;
  title?: string;
  image?: string;
  readyInMinutes?: number;
  summary?: string;
  extendedIngredients?: [
    {
      id: number;
      original: string;
      name: string;
      image: string;
    },
  ];
  analyzedInstructions?: [
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
