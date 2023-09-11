import Button from './Button';
import Input from './Input';
import Paper from './Paper';
import Menu from './Menu';
import InputLabel from './InputLabel';
import MenuItem from './MenuItem';
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Button(theme),
    Input(theme),
    Paper(theme),
    Menu(theme),
    InputLabel(theme),
    MenuItem(theme),
  );
}
