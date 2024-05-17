export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Alive':
      return 'bg-[#66ff00]';
    case 'Dead':
      return 'bg-red-500';
    case 'unknown':
      return 'bg-gray-500';
    default:
      return 'bg-transparent';
  }
};
