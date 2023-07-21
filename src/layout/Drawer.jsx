import { useState } from 'react';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>
      <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}></Drawer>
    </div>
  );
};
export default Drawer;
