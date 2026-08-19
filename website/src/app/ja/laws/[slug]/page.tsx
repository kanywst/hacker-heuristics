import { makeLawRoute } from '@/lib/lawRoute';

const route = makeLawRoute('ja');

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export const dynamicParams = false;

export default route.Page;
