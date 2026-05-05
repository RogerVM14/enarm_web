import React from "react";
import { Link } from "react-router-dom";

/**
 * @param {{ label: string, to?: string | null }[]} items
 * El último ítem se muestra como página actual (sin enlace).
 */
const CourseBreadcrumb = ({ items }) => {
  if (!items?.length) return null;

  return (
    <nav aria-label="Ruta de navegación" className="mb-3">
      <ol className="flex flex-wrap items-center gap-x-2 poppins-regular-14 text-[#00000073] list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const showLink = Boolean(item.to) && !isLast;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-x-2">
              {index > 0 ? (
                <span className="text-[#00000040] select-none" aria-hidden>
                  /
                </span>
              ) : null}
              {showLink ? (
                <Link to={item.to} className="text-[#05B2FA] hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-[#000000D9] font-medium" : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CourseBreadcrumb;
