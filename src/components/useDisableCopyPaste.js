import { useEffect } from 'react';

const useDisableCopyPaste = () => {
  useEffect(() => {
    document.oncopy = event => event.preventDefault();
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('contextmenu', event => event.preventDefault());
    });
  }, []);

  return null;
};

export default useDisableCopyPaste;
