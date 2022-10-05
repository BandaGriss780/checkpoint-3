import React from 'react';
import { Navbar, Typography, Button } from "@material-tailwind/react";
const NavBar = () => {
    return (
        <Navbar className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span>Checkpoint three</span>
          </Typography>

          <Button
            variant="gradient"
            size="md"
            className="hidden lg:inline-block"
          >
            <span>Login</span>
          </Button>
        </div>
      </Navbar>
    );
};

export default NavBar;