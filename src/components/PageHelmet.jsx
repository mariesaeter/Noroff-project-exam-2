import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageHelmet = ({ title, content }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Helmet>
    </HelmetProvider>
  );
};
