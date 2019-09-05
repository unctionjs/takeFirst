/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import fresh from "@unction/fresh";
import {OrderedEnumerableType} from "./types";

export default function takeFirst<V> (count: number) {
  return function takeFirstCount (orderedEnumerable: OrderedEnumerableType<V>) {
    return reduceWithValueKey((accumulated: OrderedEnumerableType<V>) => (value: V) => (index: number) => {
      if (greaterThan(index)(count - 1)) {
        return accumulated;
      }

      return append(value)(accumulated);
    })(fresh(orderedEnumerable))(orderedEnumerable);
  };
}
