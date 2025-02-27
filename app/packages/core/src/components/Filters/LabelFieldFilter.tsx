import React from "react";

import {
  isMatchingAtom,
  onlyMatchAtom,
  stringExcludeAtom,
  stringSelectedValuesAtom,
} from "@fiftyone/state";
import CategoricalFilter from "./categoricalFilter/CategoricalFilter";
import { labelTagsCount } from "../Sidebar/Entries/EntryCounts";

const LabelTagFieldFilter = ({
  path,
  modal,
  color,
  ...rest
}: {
  path: string;
  modal: boolean;
  name?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  title: string;
  color: string;
}) => {
  return (
    <CategoricalFilter<{ value: string | null; count: number }>
      selectedValuesAtom={stringSelectedValuesAtom({ modal, path })}
      excludeAtom={stringExcludeAtom({ modal, path })}
      onlyMatchAtom={onlyMatchAtom({ modal, path })}
      isMatchingAtom={isMatchingAtom({ modal, path })}
      countsAtom={labelTagsCount({ modal, extended: false })}
      path={path}
      modal={modal}
      color={color}
      {...rest}
    />
  );
};

export default React.memo(LabelTagFieldFilter);
