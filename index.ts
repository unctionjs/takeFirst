/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import fresh from "@unction/fresh";
export default function takeFirst (count) {
  return function takeFirstCount (orderedList) {
    return reduceWithValueKey((accumulated) => (value) => (index) => {
      if (greaterThan(index)(count - 1)) {
        return accumulated;
      }

      return append(value)(accumulated);
    })(fresh(orderedList))(orderedList);
  };
}
