'use client';

import Hamburger from './Hamburger';
import Navigation from './DefaultNavigation';
import useWindowDimensions from '../../modules/UseWindowDimensions';

export default function AllNavigation() {
  const { width } = useWindowDimensions();
  let header = <Hamburger></Hamburger>;
  if (width >= 1000){
    header = <Navigation></Navigation>;
  }
  return header;
}