export function createVariables(colors: Record<string, any>) {
    const variables: Record<string, string> = {};
  
    Object.entries(colors).forEach(([group, shades]) => {
      Object.entries(shades).forEach(([key, value]) => {
        variables[`--color-${group}-${key}`] = value as string;
      });
    });
  
    return variables;
  }

  export function rgb(color: string) {
    return `rgb(${color})`;
  }