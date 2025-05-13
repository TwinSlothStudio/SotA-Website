import { useEffect } from 'react';

const Title = ({ text }: { text: string }) => {
  useEffect(() => {
    document.title = text;
  }, [text]);

  return null;
};

export default Title;
