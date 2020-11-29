/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import fresh from "@unction/fresh";

export default function takeFirst<V> (count: number) {
  return function takeFirstCount (orderedEnumerable: Array<V> | string) {
    return reduceWithValueKey((accumulated: Array<V> | string) => (value: V) => (index: number) => {
      if (greaterThan(index)(count - 1)) {
        return accumulated;
      }

      return append(value)(accumulated);
    })(fresh(orderedEnumerable))(orderedEnumerable);
  };
}
