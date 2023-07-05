/**
 * Express router paths go here.
 */

const Paths = {
  Base: '/api',
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
};

// **** Export **** //

export default Paths;
