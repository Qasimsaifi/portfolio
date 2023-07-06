import { useEffect, useState } from 'react'
function useTypewriter(texts, speed) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [erasing, setErasing] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (currentIndex < texts.length && !erasing) {
          if (currentText.length === texts[currentIndex].length) {
            setErasing(true);
          } else {
            setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
          }
        } else {
          setCurrentText(currentText.slice(0, -1));
          if (currentText === '') {
            setErasing(false);
            setCurrentIndex((currentIndex + 1) % texts.length);
          }
        }
      }, speed);
      return () => clearTimeout(timeoutId);
    }, [currentIndex, currentText, speed, texts, erasing]);

    return currentText;
  }




export default useTypewriter;