const routes = ['/', '/map', '/performance', '/booth', '/user'];

export const moveIndex = (currentPath: string, previousPath: string | null) => {
  const previousIndex = previousPath === null ? -1 : routes.indexOf(previousPath);
  const currentIndex = routes.indexOf(currentPath);

  if ((currentIndex === -1 && previousIndex >= 0) || previousIndex === -1) return 0;

  return currentIndex > previousIndex ? 1 : -1;
};
