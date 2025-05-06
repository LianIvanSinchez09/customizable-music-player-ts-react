export const setLocalStorage = (value: string, functionExample: (val: string) => void) => {
    try {
      functionExample(value);
      localStorage.setItem("currentUserToken", value);
    } catch (error) {
      console.error(error);
    }
  };
  