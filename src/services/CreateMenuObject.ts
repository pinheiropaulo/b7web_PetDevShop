type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export function CreateMenuObject(activeMenu: MenuOptions) {
  const returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu !== '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;
}
