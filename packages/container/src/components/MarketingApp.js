import React, {useEffect, useRef} from "react";
import { mount } from 'marketing/MarketingApp';
import { useHistory } from "react-router-dom";

export default function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const onNavigation = ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
    const { onParentNavigate } = mount(ref.current, { onNavigation, initialPath: history.location.pathname });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
}