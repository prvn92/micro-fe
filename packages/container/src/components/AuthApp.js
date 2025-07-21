import React, {useEffect, useRef} from "react";
import { mount } from 'auth/AuthApp';
import { useHistory } from "react-router-dom";

export default function MarketingApp( {onSignIn}) {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const initialPath = history.location.pathname;
    const onNavigation = ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
    const { onParentNavigate } = mount(ref.current, { onNavigation, initialPath, onSignIn });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}