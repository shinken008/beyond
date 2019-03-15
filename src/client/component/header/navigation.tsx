import * as React from 'react';
import { createHashHistory } from 'history';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as ssvg } from '../../static/icon/bell.svg';
const history = createHashHistory();

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [oldValue, setOldValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => {
        if (oldValue === newValue) { return };
        setValue(newValue);
        setOldValue(newValue);
        history.push(`/${newValue}`);
      }}
      showLabels
    >
      <BottomNavigationAction value="" label="首页" icon={<SvgIcon width="1em" height="1em" component={ssvg} />} />
      <BottomNavigationAction value="Recent" label="近期" icon={<SvgIcon width="1em" height="1em" component={ssvg} />} />
      <BottomNavigationAction value="Favorite" label="兴趣" icon={<SvgIcon width="1em" height="1em" component={ssvg} />} />
      <BottomNavigationAction value="Nearby" label="附近" icon={<SvgIcon width="1em" height="1em" component={ssvg} />} />
      <BottomNavigationAction value="Todo" label="Todo" icon={<SvgIcon width="1em" height="1em" component={ssvg} />} />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
