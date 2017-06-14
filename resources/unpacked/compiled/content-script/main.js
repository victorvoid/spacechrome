if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$typeOf$$($value$jscomp$69$$) {
  var $s$jscomp$2$$ = typeof $value$jscomp$69$$;
  if ("object" == $s$jscomp$2$$) {
    if ($value$jscomp$69$$) {
      if ($value$jscomp$69$$ instanceof Array) {
        return "array";
      }
      if ($value$jscomp$69$$ instanceof Object) {
        return $s$jscomp$2$$;
      }
      var $className$jscomp$1$$ = Object.prototype.toString.call($value$jscomp$69$$);
      if ("[object Window]" == $className$jscomp$1$$) {
        return "object";
      }
      if ("[object Array]" == $className$jscomp$1$$ || "number" == typeof $value$jscomp$69$$.length && "undefined" != typeof $value$jscomp$69$$.splice && "undefined" != typeof $value$jscomp$69$$.propertyIsEnumerable && !$value$jscomp$69$$.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == $className$jscomp$1$$ || "undefined" != typeof $value$jscomp$69$$.call && "undefined" != typeof $value$jscomp$69$$.propertyIsEnumerable && !$value$jscomp$69$$.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == $s$jscomp$2$$ && "undefined" == typeof $value$jscomp$69$$.call) {
      return "object";
    }
  }
  return $s$jscomp$2$$;
}
function $goog$isFunction$$($val$jscomp$9$$) {
  return "function" == $goog$typeOf$$($val$jscomp$9$$);
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1e9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$, $selfObj$jscomp$1$$, $var_args$jscomp$45$$) {
  return $fn$$.call.apply($fn$$.bind, arguments);
}
function $goog$bindJs_$$($fn$jscomp$1$$, $selfObj$jscomp$2$$, $var_args$jscomp$46$$) {
  if (!$fn$jscomp$1$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $var_args$jscomp$46$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($var_args$jscomp$46$$, $boundArgs$$);
      return $fn$jscomp$1$$.apply($selfObj$jscomp$2$$, $var_args$jscomp$46$$);
    };
  }
  return function() {
    return $fn$jscomp$1$$.apply($selfObj$jscomp$2$$, arguments);
  };
}
function $goog$bind$$($fn$jscomp$2$$, $selfObj$jscomp$3$$, $var_args$jscomp$47$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}
;function $goog$object$forEach$$($obj$jscomp$32$$, $f$jscomp$1$$) {
  for (var $key$jscomp$28$$ in $obj$jscomp$32$$) {
    $f$jscomp$1$$.call(void 0, $obj$jscomp$32$$[$key$jscomp$28$$], $key$jscomp$28$$, $obj$jscomp$32$$);
  }
}
;function $goog$math$Integer$$($bits$$, $sign$$) {
  this.$bits_$ = [];
  this.$sign_$ = $sign$$;
  for (var $top$jscomp$2$$ = !0, $i$jscomp$27$$ = $bits$$.length - 1; 0 <= $i$jscomp$27$$; $i$jscomp$27$$--) {
    var $val$jscomp$15$$ = $bits$$[$i$jscomp$27$$] | 0;
    $top$jscomp$2$$ && $val$jscomp$15$$ == $sign$$ || (this.$bits_$[$i$jscomp$27$$] = $val$jscomp$15$$, $top$jscomp$2$$ = !1);
  }
}
var $goog$math$Integer$IntCache_$$ = {};
function $goog$math$Integer$fromInt$$($value$jscomp$74$$) {
  if (-128 <= $value$jscomp$74$$ && 128 > $value$jscomp$74$$) {
    var $cachedObj_obj$jscomp$62$$ = $goog$math$Integer$IntCache_$$[$value$jscomp$74$$];
    if ($cachedObj_obj$jscomp$62$$) {
      return $cachedObj_obj$jscomp$62$$;
    }
  }
  $cachedObj_obj$jscomp$62$$ = new $goog$math$Integer$$([$value$jscomp$74$$ | 0], 0 > $value$jscomp$74$$ ? -1 : 0);
  -128 <= $value$jscomp$74$$ && 128 > $value$jscomp$74$$ && ($goog$math$Integer$IntCache_$$[$value$jscomp$74$$] = $cachedObj_obj$jscomp$62$$);
  return $cachedObj_obj$jscomp$62$$;
}
function $goog$math$Integer$fromNumber$$($value$jscomp$75$$) {
  if (isNaN($value$jscomp$75$$) || !isFinite($value$jscomp$75$$)) {
    return $goog$math$Integer$ZERO$$;
  }
  if (0 > $value$jscomp$75$$) {
    return $goog$math$Integer$fromNumber$$(-$value$jscomp$75$$).$negate$();
  }
  for (var $bits$jscomp$1$$ = [], $pow$$ = 1, $i$jscomp$28$$ = 0; $value$jscomp$75$$ >= $pow$$; $i$jscomp$28$$++) {
    $bits$jscomp$1$$[$i$jscomp$28$$] = $value$jscomp$75$$ / $pow$$ | 0, $pow$$ *= $goog$math$Integer$TWO_PWR_32_DBL_$$;
  }
  return new $goog$math$Integer$$($bits$jscomp$1$$, 0);
}
var $goog$math$Integer$TWO_PWR_32_DBL_$$ = 4294967296, $goog$math$Integer$ZERO$$ = $goog$math$Integer$fromInt$$(0), $goog$math$Integer$ONE$$ = $goog$math$Integer$fromInt$$(1), $goog$math$Integer$TWO_PWR_24_$$ = $goog$math$Integer$fromInt$$(16777216);
$JSCompiler_prototypeAlias$$ = $goog$math$Integer$$.prototype;
$JSCompiler_prototypeAlias$$.$toInt$ = function() {
  return 0 < this.$bits_$.length ? this.$bits_$[0] : this.$sign_$;
};
$JSCompiler_prototypeAlias$$.$toNumber$ = function() {
  if (this.$isNegative$()) {
    return -this.$negate$().$toNumber$();
  }
  for (var $val$jscomp$16$$ = 0, $pow$jscomp$1$$ = 1, $i$jscomp$30$$ = 0; $i$jscomp$30$$ < this.$bits_$.length; $i$jscomp$30$$++) {
    var $val$jscomp$inline_97$$ = $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$30$$), $val$jscomp$16$$ = $val$jscomp$16$$ + (0 <= $val$jscomp$inline_97$$ ? $val$jscomp$inline_97$$ : $goog$math$Integer$TWO_PWR_32_DBL_$$ + $val$jscomp$inline_97$$) * $pow$jscomp$1$$, $pow$jscomp$1$$ = $pow$jscomp$1$$ * $goog$math$Integer$TWO_PWR_32_DBL_$$;
  }
  return $val$jscomp$16$$;
};
$JSCompiler_prototypeAlias$$.toString = function($opt_radix$jscomp$2_radix$jscomp$2$$) {
  $opt_radix$jscomp$2_radix$jscomp$2$$ = $opt_radix$jscomp$2_radix$jscomp$2$$ || 10;
  if (2 > $opt_radix$jscomp$2_radix$jscomp$2$$ || 36 < $opt_radix$jscomp$2_radix$jscomp$2$$) {
    throw Error("radix out of range: " + $opt_radix$jscomp$2_radix$jscomp$2$$);
  }
  if (this.$isZero$()) {
    return "0";
  }
  if (this.$isNegative$()) {
    return "-" + this.$negate$().toString($opt_radix$jscomp$2_radix$jscomp$2$$);
  }
  for (var $radixToPower$jscomp$1$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$2_radix$jscomp$2$$, 6)), $rem$$ = this, $result$jscomp$4$$ = "";;) {
    var $remDiv$$ = $JSCompiler_StaticMethods_divide$$($rem$$, $radixToPower$jscomp$1$$), $digits$$ = ($rem$$.$subtract$($remDiv$$.multiply($radixToPower$jscomp$1$$)).$toInt$() >>> 0).toString($opt_radix$jscomp$2_radix$jscomp$2$$), $rem$$ = $remDiv$$;
    if ($rem$$.$isZero$()) {
      return $digits$$ + $result$jscomp$4$$;
    }
    for (; 6 > $digits$$.length;) {
      $digits$$ = "0" + $digits$$;
    }
    $result$jscomp$4$$ = "" + $digits$$ + $result$jscomp$4$$;
  }
};
function $JSCompiler_StaticMethods_getBits$$($JSCompiler_StaticMethods_getBits$self$$, $index$jscomp$45$$) {
  return 0 > $index$jscomp$45$$ ? 0 : $index$jscomp$45$$ < $JSCompiler_StaticMethods_getBits$self$$.$bits_$.length ? $JSCompiler_StaticMethods_getBits$self$$.$bits_$[$index$jscomp$45$$] : $JSCompiler_StaticMethods_getBits$self$$.$sign_$;
}
$JSCompiler_prototypeAlias$$.$isZero$ = function() {
  if (0 != this.$sign_$) {
    return !1;
  }
  for (var $i$jscomp$31$$ = 0; $i$jscomp$31$$ < this.$bits_$.length; $i$jscomp$31$$++) {
    if (0 != this.$bits_$[$i$jscomp$31$$]) {
      return !1;
    }
  }
  return !0;
};
$JSCompiler_prototypeAlias$$.$isNegative$ = function() {
  return -1 == this.$sign_$;
};
$JSCompiler_prototypeAlias$$.$greaterThan$ = function($other$jscomp$5$$) {
  return 0 < this.compare($other$jscomp$5$$);
};
$JSCompiler_prototypeAlias$$.$greaterThanOrEqual$ = function($other$jscomp$6$$) {
  return 0 <= this.compare($other$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$.$lessThan$ = function() {
  return 0 > this.compare($goog$math$Integer$TWO_PWR_24_$$);
};
$JSCompiler_prototypeAlias$$.$lessThanOrEqual$ = function($other$jscomp$8$$) {
  return 0 >= this.compare($other$jscomp$8$$);
};
$JSCompiler_prototypeAlias$$.compare = function($diff_other$jscomp$9$$) {
  $diff_other$jscomp$9$$ = this.$subtract$($diff_other$jscomp$9$$);
  return $diff_other$jscomp$9$$.$isNegative$() ? -1 : $diff_other$jscomp$9$$.$isZero$() ? 0 : 1;
};
$JSCompiler_prototypeAlias$$.$negate$ = function() {
  return this.$not$().add($goog$math$Integer$ONE$$);
};
$JSCompiler_prototypeAlias$$.add = function($other$jscomp$10$$) {
  for (var $len$jscomp$1$$ = Math.max(this.$bits_$.length, $other$jscomp$10$$.$bits_$.length), $arr$jscomp$8$$ = [], $carry$$ = 0, $i$jscomp$34$$ = 0; $i$jscomp$34$$ <= $len$jscomp$1$$; $i$jscomp$34$$++) {
    var $c0$$ = $carry$$ + ($JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$34$$) & 65535) + ($JSCompiler_StaticMethods_getBits$$($other$jscomp$10$$, $i$jscomp$34$$) & 65535), $c1$$ = ($c0$$ >>> 16) + ($JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$34$$) >>> 16) + ($JSCompiler_StaticMethods_getBits$$($other$jscomp$10$$, $i$jscomp$34$$) >>> 16), $carry$$ = $c1$$ >>> 16, $c0$$ = $c0$$ & 65535, $c1$$ = $c1$$ & 65535;
    $arr$jscomp$8$$[$i$jscomp$34$$] = $c1$$ << 16 | $c0$$;
  }
  return new $goog$math$Integer$$($arr$jscomp$8$$, $arr$jscomp$8$$[$arr$jscomp$8$$.length - 1] & -2147483648 ? -1 : 0);
};
$JSCompiler_prototypeAlias$$.$subtract$ = function($other$jscomp$11$$) {
  return this.add($other$jscomp$11$$.$negate$());
};
$JSCompiler_prototypeAlias$$.multiply = function($other$jscomp$12$$) {
  if (this.$isZero$() || $other$jscomp$12$$.$isZero$()) {
    return $goog$math$Integer$ZERO$$;
  }
  if (this.$isNegative$()) {
    return $other$jscomp$12$$.$isNegative$() ? this.$negate$().multiply($other$jscomp$12$$.$negate$()) : this.$negate$().multiply($other$jscomp$12$$).$negate$();
  }
  if ($other$jscomp$12$$.$isNegative$()) {
    return this.multiply($other$jscomp$12$$.$negate$()).$negate$();
  }
  if (this.$lessThan$() && $other$jscomp$12$$.$lessThan$()) {
    return $goog$math$Integer$fromNumber$$(this.$toNumber$() * $other$jscomp$12$$.$toNumber$());
  }
  for (var $len$jscomp$2$$ = this.$bits_$.length + $other$jscomp$12$$.$bits_$.length, $arr$jscomp$9$$ = [], $i$jscomp$35$$ = 0; $i$jscomp$35$$ < 2 * $len$jscomp$2$$; $i$jscomp$35$$++) {
    $arr$jscomp$9$$[$i$jscomp$35$$] = 0;
  }
  for ($i$jscomp$35$$ = 0; $i$jscomp$35$$ < this.$bits_$.length; $i$jscomp$35$$++) {
    for (var $j$jscomp$3$$ = 0; $j$jscomp$3$$ < $other$jscomp$12$$.$bits_$.length; $j$jscomp$3$$++) {
      var $a1$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$35$$) >>> 16, $a0$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$35$$) & 65535, $b1$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($other$jscomp$12$$, $j$jscomp$3$$) >>> 16, $b0$jscomp$1$$ = $JSCompiler_StaticMethods_getBits$$($other$jscomp$12$$, $j$jscomp$3$$) & 65535;
      $arr$jscomp$9$$[2 * $i$jscomp$35$$ + 2 * $j$jscomp$3$$] += $a0$jscomp$1$$ * $b0$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$9$$, 2 * $i$jscomp$35$$ + 2 * $j$jscomp$3$$);
      $arr$jscomp$9$$[2 * $i$jscomp$35$$ + 2 * $j$jscomp$3$$ + 1] += $a1$jscomp$1$$ * $b0$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$9$$, 2 * $i$jscomp$35$$ + 2 * $j$jscomp$3$$ + 1);
      $arr$jscomp$9$$[2 * $i$jscomp$35$$ + 2 * $j$jscomp$3$$ + 1] += $a0$jscomp$1$$ * $b1$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$9$$, 2 * $i$jscomp$35$$ + 2 * $j$jscomp$3$$ + 1);
      $arr$jscomp$9$$[2 * $i$jscomp$35$$ + 2 * $j$jscomp$3$$ + 2] += $a1$jscomp$1$$ * $b1$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$9$$, 2 * $i$jscomp$35$$ + 2 * $j$jscomp$3$$ + 2);
    }
  }
  for ($i$jscomp$35$$ = 0; $i$jscomp$35$$ < $len$jscomp$2$$; $i$jscomp$35$$++) {
    $arr$jscomp$9$$[$i$jscomp$35$$] = $arr$jscomp$9$$[2 * $i$jscomp$35$$ + 1] << 16 | $arr$jscomp$9$$[2 * $i$jscomp$35$$];
  }
  for ($i$jscomp$35$$ = $len$jscomp$2$$; $i$jscomp$35$$ < 2 * $len$jscomp$2$$; $i$jscomp$35$$++) {
    $arr$jscomp$9$$[$i$jscomp$35$$] = 0;
  }
  return new $goog$math$Integer$$($arr$jscomp$9$$, 0);
};
function $goog$math$Integer$carry16_$$($bits$jscomp$4$$, $index$jscomp$47$$) {
  for (; ($bits$jscomp$4$$[$index$jscomp$47$$] & 65535) != $bits$jscomp$4$$[$index$jscomp$47$$];) {
    $bits$jscomp$4$$[$index$jscomp$47$$ + 1] += $bits$jscomp$4$$[$index$jscomp$47$$] >>> 16, $bits$jscomp$4$$[$index$jscomp$47$$] &= 65535, $index$jscomp$47$$++;
  }
}
function $JSCompiler_StaticMethods_divide$$($JSCompiler_StaticMethods_divide$self$$, $other$jscomp$14$$) {
  if ($other$jscomp$14$$.$isZero$()) {
    throw Error("division by zero");
  }
  if ($JSCompiler_StaticMethods_divide$self$$.$isZero$()) {
    return $goog$math$Integer$ZERO$$;
  }
  if ($JSCompiler_StaticMethods_divide$self$$.$isNegative$()) {
    return $other$jscomp$14$$.$isNegative$() ? $JSCompiler_StaticMethods_divide$$($JSCompiler_StaticMethods_divide$self$$.$negate$(), $other$jscomp$14$$.$negate$()) : $JSCompiler_StaticMethods_divide$$($JSCompiler_StaticMethods_divide$self$$.$negate$(), $other$jscomp$14$$).$negate$();
  }
  if ($other$jscomp$14$$.$isNegative$()) {
    return $JSCompiler_StaticMethods_divide$$($JSCompiler_StaticMethods_divide$self$$, $other$jscomp$14$$.$negate$()).$negate$();
  }
  if (30 < $JSCompiler_StaticMethods_divide$self$$.$bits_$.length) {
    if ($JSCompiler_StaticMethods_divide$self$$.$isNegative$() || $other$jscomp$14$$.$isNegative$()) {
      throw Error("slowDivide_ only works with positive integers.");
    }
    for (var $res$jscomp$6_twoPower$jscomp$inline_101$$ = $goog$math$Integer$ONE$$, $multiple$jscomp$inline_102_rem$jscomp$1$$ = $other$jscomp$14$$; $multiple$jscomp$inline_102_rem$jscomp$1$$.$lessThanOrEqual$($JSCompiler_StaticMethods_divide$self$$);) {
      $res$jscomp$6_twoPower$jscomp$inline_101$$ = $res$jscomp$6_twoPower$jscomp$inline_101$$.shiftLeft(1), $multiple$jscomp$inline_102_rem$jscomp$1$$ = $multiple$jscomp$inline_102_rem$jscomp$1$$.shiftLeft(1);
    }
    for (var $approx_res$jscomp$inline_103$$ = $res$jscomp$6_twoPower$jscomp$inline_101$$.$shiftRight$(1), $delta$jscomp$1_log2_total$jscomp$inline_104$$ = $multiple$jscomp$inline_102_rem$jscomp$1$$.$shiftRight$(1), $approxRes_total2$jscomp$inline_105$$, $multiple$jscomp$inline_102_rem$jscomp$1$$ = $multiple$jscomp$inline_102_rem$jscomp$1$$.$shiftRight$(2), $res$jscomp$6_twoPower$jscomp$inline_101$$ = $res$jscomp$6_twoPower$jscomp$inline_101$$.$shiftRight$(2); !$multiple$jscomp$inline_102_rem$jscomp$1$$.$isZero$();) {
      $approxRes_total2$jscomp$inline_105$$ = $delta$jscomp$1_log2_total$jscomp$inline_104$$.add($multiple$jscomp$inline_102_rem$jscomp$1$$), $approxRes_total2$jscomp$inline_105$$.$lessThanOrEqual$($JSCompiler_StaticMethods_divide$self$$) && ($approx_res$jscomp$inline_103$$ = $approx_res$jscomp$inline_103$$.add($res$jscomp$6_twoPower$jscomp$inline_101$$), $delta$jscomp$1_log2_total$jscomp$inline_104$$ = $approxRes_total2$jscomp$inline_105$$), $multiple$jscomp$inline_102_rem$jscomp$1$$ = $multiple$jscomp$inline_102_rem$jscomp$1$$.$shiftRight$(1), 
      $res$jscomp$6_twoPower$jscomp$inline_101$$ = $res$jscomp$6_twoPower$jscomp$inline_101$$.$shiftRight$(1);
    }
    return $approx_res$jscomp$inline_103$$;
  }
  $res$jscomp$6_twoPower$jscomp$inline_101$$ = $goog$math$Integer$ZERO$$;
  for ($multiple$jscomp$inline_102_rem$jscomp$1$$ = $JSCompiler_StaticMethods_divide$self$$; $multiple$jscomp$inline_102_rem$jscomp$1$$.$greaterThanOrEqual$($other$jscomp$14$$);) {
    $approx_res$jscomp$inline_103$$ = Math.max(1, Math.floor($multiple$jscomp$inline_102_rem$jscomp$1$$.$toNumber$() / $other$jscomp$14$$.$toNumber$()));
    $delta$jscomp$1_log2_total$jscomp$inline_104$$ = Math.ceil(Math.log($approx_res$jscomp$inline_103$$) / Math.LN2);
    $delta$jscomp$1_log2_total$jscomp$inline_104$$ = 48 >= $delta$jscomp$1_log2_total$jscomp$inline_104$$ ? 1 : Math.pow(2, $delta$jscomp$1_log2_total$jscomp$inline_104$$ - 48);
    $approxRes_total2$jscomp$inline_105$$ = $goog$math$Integer$fromNumber$$($approx_res$jscomp$inline_103$$);
    for (var $approxRem$$ = $approxRes_total2$jscomp$inline_105$$.multiply($other$jscomp$14$$); $approxRem$$.$isNegative$() || $approxRem$$.$greaterThan$($multiple$jscomp$inline_102_rem$jscomp$1$$);) {
      $approx_res$jscomp$inline_103$$ -= $delta$jscomp$1_log2_total$jscomp$inline_104$$, $approxRes_total2$jscomp$inline_105$$ = $goog$math$Integer$fromNumber$$($approx_res$jscomp$inline_103$$), $approxRem$$ = $approxRes_total2$jscomp$inline_105$$.multiply($other$jscomp$14$$);
    }
    $approxRes_total2$jscomp$inline_105$$.$isZero$() && ($approxRes_total2$jscomp$inline_105$$ = $goog$math$Integer$ONE$$);
    $res$jscomp$6_twoPower$jscomp$inline_101$$ = $res$jscomp$6_twoPower$jscomp$inline_101$$.add($approxRes_total2$jscomp$inline_105$$);
    $multiple$jscomp$inline_102_rem$jscomp$1$$ = $multiple$jscomp$inline_102_rem$jscomp$1$$.$subtract$($approxRem$$);
  }
  return $res$jscomp$6_twoPower$jscomp$inline_101$$;
}
$JSCompiler_prototypeAlias$$.$not$ = function() {
  for (var $len$jscomp$3$$ = this.$bits_$.length, $arr$jscomp$10$$ = [], $i$jscomp$36$$ = 0; $i$jscomp$36$$ < $len$jscomp$3$$; $i$jscomp$36$$++) {
    $arr$jscomp$10$$[$i$jscomp$36$$] = ~this.$bits_$[$i$jscomp$36$$];
  }
  return new $goog$math$Integer$$($arr$jscomp$10$$, ~this.$sign_$);
};
$JSCompiler_prototypeAlias$$.shiftLeft = function($bit_delta_numBits$jscomp$1$$) {
  var $arr_delta$$ = $bit_delta_numBits$jscomp$1$$ >> 5;
  $bit_delta_numBits$jscomp$1$$ %= 32;
  for (var $len$jscomp$7$$ = this.$bits_$.length + $arr_delta$$ + (0 < $bit_delta_numBits$jscomp$1$$ ? 1 : 0), $arr$jscomp$14$$ = [], $i$jscomp$40$$ = 0; $i$jscomp$40$$ < $len$jscomp$7$$; $i$jscomp$40$$++) {
    $arr$jscomp$14$$[$i$jscomp$40$$] = 0 < $bit_delta_numBits$jscomp$1$$ ? $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$40$$ - $arr_delta$$) << $bit_delta_numBits$jscomp$1$$ | $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$40$$ - $arr_delta$$ - 1) >>> 32 - $bit_delta_numBits$jscomp$1$$ : $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$40$$ - $arr_delta$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$14$$, this.$sign_$);
};
$JSCompiler_prototypeAlias$$.$shiftRight$ = function($bit_delta$jscomp$1_numBits$jscomp$2$$) {
  var $arr_delta$jscomp$1$$ = $bit_delta$jscomp$1_numBits$jscomp$2$$ >> 5;
  $bit_delta$jscomp$1_numBits$jscomp$2$$ %= 32;
  for (var $len$jscomp$8$$ = this.$bits_$.length - $arr_delta$jscomp$1$$, $arr$jscomp$15$$ = [], $i$jscomp$41$$ = 0; $i$jscomp$41$$ < $len$jscomp$8$$; $i$jscomp$41$$++) {
    $arr$jscomp$15$$[$i$jscomp$41$$] = 0 < $bit_delta$jscomp$1_numBits$jscomp$2$$ ? $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$41$$ + $arr_delta$jscomp$1$$) >>> $bit_delta$jscomp$1_numBits$jscomp$2$$ | $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$41$$ + $arr_delta$jscomp$1$$ + 1) << 32 - $bit_delta$jscomp$1_numBits$jscomp$2$$ : $JSCompiler_StaticMethods_getBits$$(this, $i$jscomp$41$$ + $arr_delta$jscomp$1$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$15$$, this.$sign_$);
};
function $goog$string$StringBuffer$$($opt_a1$$, $var_args$jscomp$57$$) {
  null != $opt_a1$$ && this.append.apply(this, arguments);
}
$JSCompiler_prototypeAlias$$ = $goog$string$StringBuffer$$.prototype;
$JSCompiler_prototypeAlias$$.$buffer_$ = "";
$JSCompiler_prototypeAlias$$.set = function($s$jscomp$12$$) {
  this.$buffer_$ = "" + $s$jscomp$12$$;
};
$JSCompiler_prototypeAlias$$.append = function($a1$jscomp$2$$, $opt_a2$$, $var_args$jscomp$58$$) {
  this.$buffer_$ += String($a1$jscomp$2$$);
  if (null != $opt_a2$$) {
    for (var $i$jscomp$42$$ = 1; $i$jscomp$42$$ < arguments.length; $i$jscomp$42$$++) {
      this.$buffer_$ += arguments[$i$jscomp$42$$];
    }
  }
  return this;
};
$JSCompiler_prototypeAlias$$.clear = function() {
  this.$buffer_$ = "";
};
$JSCompiler_prototypeAlias$$.toString = function() {
  return this.$buffer_$;
};
var $cljs$core$t_cljs$0core12114$$;
if ("undefined" === typeof $cljs$core$PROTOCOL_SENTINEL$$) {
  var $cljs$core$PROTOCOL_SENTINEL$$ = {};
}
if ("undefined" === typeof $cljs$core$_STAR_print_fn_STAR_$$) {
  var $cljs$core$_STAR_print_fn_STAR_$$ = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  };
}
if ("undefined" === typeof $cljs$core$_STAR_print_err_fn_STAR_$$) {
  var $cljs$core$_STAR_print_err_fn_STAR_$$ = function() {
    throw Error("No *print-err-fn* fn set for evaluation environment");
  };
}
var $cljs$core$_STAR_print_level_STAR_$$ = null;
if ("undefined" === typeof $cljs$core$_STAR_loaded_libs_STAR_$$) {
  var $cljs$core$_STAR_loaded_libs_STAR_$$ = null;
}
function $cljs$core$pr_opts$$() {
  return new $cljs$core$PersistentArrayMap$$(null, 5, [$cljs$core$cst$0kw$0flush_DASH_on_DASH_newline$$, !0, $cljs$core$cst$0kw$0readably$$, !0, $cljs$core$cst$0kw$0meta$$, !1, $cljs$core$cst$0kw$0dup$$, !1, $cljs$core$cst$0kw$0print_DASH_length$$, null], null);
}
function $cljs$core$truth_$$($x$jscomp$78$$) {
  return null != $x$jscomp$78$$ && !1 !== $x$jscomp$78$$;
}
function $cljs$core$array_QMARK_$$($x$jscomp$81$$) {
  return $x$jscomp$81$$ instanceof Array;
}
function $cljs$core$not$$($x$jscomp$83$$) {
  return null == $x$jscomp$83$$ ? !0 : !1 === $x$jscomp$83$$ ? !0 : !1;
}
function $cljs$core$string_QMARK_$$($x$jscomp$86$$) {
  return "string" == typeof $x$jscomp$86$$;
}
function $cljs$core$native_satisfies_QMARK_$$($p$$, $x$jscomp$89$$) {
  return $p$$[$goog$typeOf$$(null == $x$jscomp$89$$ ? null : $x$jscomp$89$$)] ? !0 : $p$$._ ? !0 : !1;
}
function $cljs$core$missing_protocol$$($proto$jscomp$4$$, $obj$jscomp$75$$) {
  var $ty_ty__$1$$ = null == $obj$jscomp$75$$ ? null : $obj$jscomp$75$$.constructor, $ty_ty__$1$$ = $cljs$core$truth_$$($cljs$core$truth_$$($ty_ty__$1$$) ? $ty_ty__$1$$.$cljs$lang$type$ : $ty_ty__$1$$) ? $ty_ty__$1$$.$cljs$lang$ctorStr$ : $goog$typeOf$$($obj$jscomp$75$$);
  return Error(["No protocol method ", $proto$jscomp$4$$, " defined for type ", $ty_ty__$1$$, ": ", $obj$jscomp$75$$].join(""));
}
function $cljs$core$type__GT_str$$($ty$jscomp$1$$) {
  var $temp__5276__auto__$$ = $ty$jscomp$1$$.$cljs$lang$ctorStr$;
  return $cljs$core$truth_$$($temp__5276__auto__$$) ? $temp__5276__auto__$$ : "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ty$jscomp$1$$);
}
var $cljs$core$ITER_SYMBOL$$ = "undefined" !== typeof Symbol && "function" === $goog$typeOf$$(Symbol) ? Symbol.iterator : "@@iterator";
function $cljs$core$aclone$$($arr$jscomp$69$$) {
  for (var $len$jscomp$9$$ = $arr$jscomp$69$$.length, $new_arr$$ = Array($len$jscomp$9$$), $i_11033$$ = 0;;) {
    if ($i_11033$$ < $len$jscomp$9$$) {
      $new_arr$$[$i_11033$$] = $arr$jscomp$69$$[$i_11033$$], $i_11033$$ += 1;
    } else {
      break;
    }
  }
  return $new_arr$$;
}
function $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($aseq$jscomp$1$$) {
  function $G__11067$$($aseq$jscomp$1$$, $G__11067$$) {
    $aseq$jscomp$1$$.push($G__11067$$);
    return $aseq$jscomp$1$$;
  }
  var $G__11068$$ = [];
  return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($G__11067$$, $G__11068$$, $aseq$jscomp$1$$) : $cljs$core$reduce$$.call(null, $G__11067$$, $G__11068$$, $aseq$jscomp$1$$);
}
function $cljs$core$Fn$$() {
}
function $cljs$core$IFn$$() {
}
function $cljs$core$ICounted$$() {
}
var $cljs$core$_count$$ = function $cljs$core$_count$$($coll$$) {
  if (null != $coll$$ && null != $coll$$.$cljs$core$ICounted$_count$arity$1$) {
    return $coll$$.$cljs$core$ICounted$_count$arity$1$($coll$$);
  }
  var $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$ = $cljs$core$_count$$[$goog$typeOf$$(null == $coll$$ ? null : $coll$$)];
  if (null != $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$) {
    return $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$.$cljs$core$IFn$_invoke$arity$1$($coll$$) : $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$.call(null, $coll$$);
  }
  $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$ = $cljs$core$_count$$._;
  if (null != $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$) {
    return $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$.$cljs$core$IFn$_invoke$arity$1$($coll$$) : $m__8679__auto__$jscomp$23_m__8679__auto____$1$jscomp$23$$.call(null, $coll$$);
  }
  throw $cljs$core$missing_protocol$$("ICounted.-count", $coll$$);
};
function $cljs$core$ICollection$$() {
}
var $cljs$core$_conj$$ = function $cljs$core$_conj$$($coll$jscomp$2$$, $o$jscomp$7$$) {
  if (null != $coll$jscomp$2$$ && null != $coll$jscomp$2$$.$cljs$core$ICollection$_conj$arity$2$) {
    return $coll$jscomp$2$$.$cljs$core$ICollection$_conj$arity$2$($coll$jscomp$2$$, $o$jscomp$7$$);
  }
  var $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$ = $cljs$core$_conj$$[$goog$typeOf$$(null == $coll$jscomp$2$$ ? null : $coll$jscomp$2$$)];
  if (null != $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$) {
    return $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$2$$, $o$jscomp$7$$) : $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$.call(null, $coll$jscomp$2$$, $o$jscomp$7$$);
  }
  $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$ = $cljs$core$_conj$$._;
  if (null != $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$) {
    return $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$2$$, $o$jscomp$7$$) : $m__8679__auto__$jscomp$25_m__8679__auto____$1$jscomp$25$$.call(null, $coll$jscomp$2$$, $o$jscomp$7$$);
  }
  throw $cljs$core$missing_protocol$$("ICollection.-conj", $coll$jscomp$2$$);
};
function $cljs$core$IIndexed$$() {
}
var $cljs$core$_nth$$ = function $cljs$core$_nth$$($var_args$jscomp$84$$) {
  for (var $args11087$$ = [], $len__9181__auto___11090$$ = arguments.length, $i__9182__auto___11091$$ = 0;;) {
    if ($i__9182__auto___11091$$ < $len__9181__auto___11090$$) {
      $args11087$$.push(arguments[$i__9182__auto___11091$$]), $i__9182__auto___11091$$ += 1;
    } else {
      break;
    }
  }
  switch($args11087$$.length) {
    case 2:
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11087$$.length)].join(""));
  }
};
$cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$3$$, $n$jscomp$15$$) {
  if (null != $coll$jscomp$3$$ && null != $coll$jscomp$3$$.$cljs$core$IIndexed$_nth$arity$2$) {
    return $coll$jscomp$3$$.$cljs$core$IIndexed$_nth$arity$2$($coll$jscomp$3$$, $n$jscomp$15$$);
  }
  var $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$ = $cljs$core$_nth$$[$goog$typeOf$$(null == $coll$jscomp$3$$ ? null : $coll$jscomp$3$$)];
  if (null != $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$) {
    return $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$3$$, $n$jscomp$15$$) : $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$.call(null, $coll$jscomp$3$$, $n$jscomp$15$$);
  }
  $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$ = $cljs$core$_nth$$._;
  if (null != $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$) {
    return $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$3$$, $n$jscomp$15$$) : $m__8679__auto__$jscomp$26_m__8679__auto____$1$jscomp$26$$.call(null, $coll$jscomp$3$$, $n$jscomp$15$$);
  }
  throw $cljs$core$missing_protocol$$("IIndexed.-nth", $coll$jscomp$3$$);
};
$cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$ = function($coll$jscomp$4$$, $n$jscomp$16$$, $not_found$$) {
  if (null != $coll$jscomp$4$$ && null != $coll$jscomp$4$$.$cljs$core$IIndexed$_nth$arity$3$) {
    return $coll$jscomp$4$$.$cljs$core$IIndexed$_nth$arity$3$($coll$jscomp$4$$, $n$jscomp$16$$, $not_found$$);
  }
  var $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$ = $cljs$core$_nth$$[$goog$typeOf$$(null == $coll$jscomp$4$$ ? null : $coll$jscomp$4$$)];
  if (null != $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$) {
    return $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$4$$, $n$jscomp$16$$, $not_found$$) : $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$.call(null, $coll$jscomp$4$$, $n$jscomp$16$$, $not_found$$);
  }
  $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$ = $cljs$core$_nth$$._;
  if (null != $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$) {
    return $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$4$$, $n$jscomp$16$$, $not_found$$) : $m__8679__auto__$jscomp$27_m__8679__auto____$1$jscomp$27$$.call(null, $coll$jscomp$4$$, $n$jscomp$16$$, $not_found$$);
  }
  throw $cljs$core$missing_protocol$$("IIndexed.-nth", $coll$jscomp$4$$);
};
$cljs$core$_nth$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$_first$$ = function $cljs$core$_first$$($coll$jscomp$5$$) {
  if (null != $coll$jscomp$5$$ && null != $coll$jscomp$5$$.$cljs$core$ISeq$_first$arity$1$) {
    return $coll$jscomp$5$$.$cljs$core$ISeq$_first$arity$1$($coll$jscomp$5$$);
  }
  var $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$ = $cljs$core$_first$$[$goog$typeOf$$(null == $coll$jscomp$5$$ ? null : $coll$jscomp$5$$)];
  if (null != $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$) {
    return $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$5$$) : $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$.call(null, $coll$jscomp$5$$);
  }
  $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$ = $cljs$core$_first$$._;
  if (null != $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$) {
    return $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$5$$) : $m__8679__auto__$jscomp$28_m__8679__auto____$1$jscomp$28$$.call(null, $coll$jscomp$5$$);
  }
  throw $cljs$core$missing_protocol$$("ISeq.-first", $coll$jscomp$5$$);
}, $cljs$core$_rest$$ = function $cljs$core$_rest$$($coll$jscomp$6$$) {
  if (null != $coll$jscomp$6$$ && null != $coll$jscomp$6$$.$cljs$core$ISeq$_rest$arity$1$) {
    return $coll$jscomp$6$$.$cljs$core$ISeq$_rest$arity$1$($coll$jscomp$6$$);
  }
  var $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$ = $cljs$core$_rest$$[$goog$typeOf$$(null == $coll$jscomp$6$$ ? null : $coll$jscomp$6$$)];
  if (null != $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$) {
    return $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$6$$) : $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$.call(null, $coll$jscomp$6$$);
  }
  $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$ = $cljs$core$_rest$$._;
  if (null != $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$) {
    return $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$6$$) : $m__8679__auto__$jscomp$29_m__8679__auto____$1$jscomp$29$$.call(null, $coll$jscomp$6$$);
  }
  throw $cljs$core$missing_protocol$$("ISeq.-rest", $coll$jscomp$6$$);
};
function $cljs$core$INext$$() {
}
function $cljs$core$ILookup$$() {
}
var $cljs$core$_lookup$$ = function $cljs$core$_lookup$$($var_args$jscomp$85$$) {
  for (var $args11094$$ = [], $len__9181__auto___11097$$ = arguments.length, $i__9182__auto___11098$$ = 0;;) {
    if ($i__9182__auto___11098$$ < $len__9181__auto___11097$$) {
      $args11094$$.push(arguments[$i__9182__auto___11098$$]), $i__9182__auto___11098$$ += 1;
    } else {
      break;
    }
  }
  switch($args11094$$.length) {
    case 2:
      return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11094$$.length)].join(""));
  }
};
$cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$2$ = function($o$jscomp$8$$, $k$jscomp$12$$) {
  if (null != $o$jscomp$8$$ && null != $o$jscomp$8$$.$cljs$core$ILookup$_lookup$arity$2$) {
    return $o$jscomp$8$$.$cljs$core$ILookup$_lookup$arity$2$($o$jscomp$8$$, $k$jscomp$12$$);
  }
  var $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$ = $cljs$core$_lookup$$[$goog$typeOf$$(null == $o$jscomp$8$$ ? null : $o$jscomp$8$$)];
  if (null != $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$) {
    return $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$8$$, $k$jscomp$12$$) : $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$.call(null, $o$jscomp$8$$, $k$jscomp$12$$);
  }
  $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$ = $cljs$core$_lookup$$._;
  if (null != $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$) {
    return $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$8$$, $k$jscomp$12$$) : $m__8679__auto__$jscomp$31_m__8679__auto____$1$jscomp$31$$.call(null, $o$jscomp$8$$, $k$jscomp$12$$);
  }
  throw $cljs$core$missing_protocol$$("ILookup.-lookup", $o$jscomp$8$$);
};
$cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$ = function($o$jscomp$9$$, $k$jscomp$13$$, $not_found$jscomp$1$$) {
  if (null != $o$jscomp$9$$ && null != $o$jscomp$9$$.$cljs$core$ILookup$_lookup$arity$3$) {
    return $o$jscomp$9$$.$cljs$core$ILookup$_lookup$arity$3$($o$jscomp$9$$, $k$jscomp$13$$, $not_found$jscomp$1$$);
  }
  var $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$ = $cljs$core$_lookup$$[$goog$typeOf$$(null == $o$jscomp$9$$ ? null : $o$jscomp$9$$)];
  if (null != $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$) {
    return $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$9$$, $k$jscomp$13$$, $not_found$jscomp$1$$) : $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$.call(null, $o$jscomp$9$$, $k$jscomp$13$$, $not_found$jscomp$1$$);
  }
  $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$ = $cljs$core$_lookup$$._;
  if (null != $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$) {
    return $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$9$$, $k$jscomp$13$$, $not_found$jscomp$1$$) : $m__8679__auto__$jscomp$32_m__8679__auto____$1$jscomp$32$$.call(null, $o$jscomp$9$$, $k$jscomp$13$$, $not_found$jscomp$1$$);
  }
  throw $cljs$core$missing_protocol$$("ILookup.-lookup", $o$jscomp$9$$);
};
$cljs$core$_lookup$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$_contains_key_QMARK_$$ = function $cljs$core$_contains_key_QMARK_$$($coll$jscomp$8$$, $k$jscomp$14$$) {
  if (null != $coll$jscomp$8$$ && null != $coll$jscomp$8$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$) {
    return $coll$jscomp$8$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$($coll$jscomp$8$$, $k$jscomp$14$$);
  }
  var $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$ = $cljs$core$_contains_key_QMARK_$$[$goog$typeOf$$(null == $coll$jscomp$8$$ ? null : $coll$jscomp$8$$)];
  if (null != $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$) {
    return $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$8$$, $k$jscomp$14$$) : $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$.call(null, $coll$jscomp$8$$, $k$jscomp$14$$);
  }
  $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$ = $cljs$core$_contains_key_QMARK_$$._;
  if (null != $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$) {
    return $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$8$$, $k$jscomp$14$$) : $m__8679__auto__$jscomp$33_m__8679__auto____$1$jscomp$33$$.call(null, $coll$jscomp$8$$, $k$jscomp$14$$);
  }
  throw $cljs$core$missing_protocol$$("IAssociative.-contains-key?", $coll$jscomp$8$$);
}, $cljs$core$_assoc$$ = function $cljs$core$_assoc$$($coll$jscomp$9$$, $k$jscomp$15$$, $v$jscomp$1$$) {
  if (null != $coll$jscomp$9$$ && null != $coll$jscomp$9$$.$cljs$core$IAssociative$_assoc$arity$3$) {
    return $coll$jscomp$9$$.$cljs$core$IAssociative$_assoc$arity$3$($coll$jscomp$9$$, $k$jscomp$15$$, $v$jscomp$1$$);
  }
  var $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$ = $cljs$core$_assoc$$[$goog$typeOf$$(null == $coll$jscomp$9$$ ? null : $coll$jscomp$9$$)];
  if (null != $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$) {
    return $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$9$$, $k$jscomp$15$$, $v$jscomp$1$$) : $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$.call(null, $coll$jscomp$9$$, $k$jscomp$15$$, $v$jscomp$1$$);
  }
  $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$ = $cljs$core$_assoc$$._;
  if (null != $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$) {
    return $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$9$$, $k$jscomp$15$$, $v$jscomp$1$$) : $m__8679__auto__$jscomp$34_m__8679__auto____$1$jscomp$34$$.call(null, $coll$jscomp$9$$, $k$jscomp$15$$, $v$jscomp$1$$);
  }
  throw $cljs$core$missing_protocol$$("IAssociative.-assoc", $coll$jscomp$9$$);
};
function $cljs$core$IMap$$() {
}
function $cljs$core$IMapEntry$$() {
}
var $cljs$core$_key$$ = function $cljs$core$_key$$($coll$jscomp$12$$) {
  if (null != $coll$jscomp$12$$ && null != $coll$jscomp$12$$.$cljs$core$IMapEntry$_key$arity$1$) {
    return $coll$jscomp$12$$.$cljs$core$IMapEntry$_key$arity$1$($coll$jscomp$12$$);
  }
  var $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$ = $cljs$core$_key$$[$goog$typeOf$$(null == $coll$jscomp$12$$ ? null : $coll$jscomp$12$$)];
  if (null != $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$) {
    return $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$12$$) : $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$.call(null, $coll$jscomp$12$$);
  }
  $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$ = $cljs$core$_key$$._;
  if (null != $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$) {
    return $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$12$$) : $m__8679__auto__$jscomp$37_m__8679__auto____$1$jscomp$37$$.call(null, $coll$jscomp$12$$);
  }
  throw $cljs$core$missing_protocol$$("IMapEntry.-key", $coll$jscomp$12$$);
}, $cljs$core$_val$$ = function $cljs$core$_val$$($coll$jscomp$13$$) {
  if (null != $coll$jscomp$13$$ && null != $coll$jscomp$13$$.$cljs$core$IMapEntry$_val$arity$1$) {
    return $coll$jscomp$13$$.$cljs$core$IMapEntry$_val$arity$1$($coll$jscomp$13$$);
  }
  var $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$ = $cljs$core$_val$$[$goog$typeOf$$(null == $coll$jscomp$13$$ ? null : $coll$jscomp$13$$)];
  if (null != $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$) {
    return $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$13$$) : $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$.call(null, $coll$jscomp$13$$);
  }
  $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$ = $cljs$core$_val$$._;
  if (null != $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$) {
    return $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$13$$) : $m__8679__auto__$jscomp$38_m__8679__auto____$1$jscomp$38$$.call(null, $coll$jscomp$13$$);
  }
  throw $cljs$core$missing_protocol$$("IMapEntry.-val", $coll$jscomp$13$$);
};
function $cljs$core$ISet$$() {
}
function $cljs$core$IVector$$() {
}
var $cljs$core$_assoc_n$$ = function $cljs$core$_assoc_n$$($coll$jscomp$17$$, $n$jscomp$17$$, $val$jscomp$30$$) {
  if (null != $coll$jscomp$17$$ && null != $coll$jscomp$17$$.$cljs$core$IVector$_assoc_n$arity$3$) {
    return $coll$jscomp$17$$.$cljs$core$IVector$_assoc_n$arity$3$($coll$jscomp$17$$, $n$jscomp$17$$, $val$jscomp$30$$);
  }
  var $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$ = $cljs$core$_assoc_n$$[$goog$typeOf$$(null == $coll$jscomp$17$$ ? null : $coll$jscomp$17$$)];
  if (null != $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$) {
    return $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$17$$, $n$jscomp$17$$, $val$jscomp$30$$) : $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$.call(null, $coll$jscomp$17$$, $n$jscomp$17$$, $val$jscomp$30$$);
  }
  $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$ = $cljs$core$_assoc_n$$._;
  if (null != $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$) {
    return $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$17$$, $n$jscomp$17$$, $val$jscomp$30$$) : $m__8679__auto__$jscomp$42_m__8679__auto____$1$jscomp$42$$.call(null, $coll$jscomp$17$$, $n$jscomp$17$$, $val$jscomp$30$$);
  }
  throw $cljs$core$missing_protocol$$("IVector.-assoc-n", $coll$jscomp$17$$);
}, $cljs$core$_deref$$ = function $cljs$core$_deref$$($o$jscomp$10$$) {
  if (null != $o$jscomp$10$$ && null != $o$jscomp$10$$.$cljs$core$IDeref$_deref$arity$1$) {
    return $o$jscomp$10$$.$cljs$core$IDeref$_deref$arity$1$($o$jscomp$10$$);
  }
  var $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$ = $cljs$core$_deref$$[$goog$typeOf$$(null == $o$jscomp$10$$ ? null : $o$jscomp$10$$)];
  if (null != $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$) {
    return $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$10$$) : $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$.call(null, $o$jscomp$10$$);
  }
  $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$ = $cljs$core$_deref$$._;
  if (null != $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$) {
    return $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$10$$) : $m__8679__auto__$jscomp$43_m__8679__auto____$1$jscomp$43$$.call(null, $o$jscomp$10$$);
  }
  throw $cljs$core$missing_protocol$$("IDeref.-deref", $o$jscomp$10$$);
};
function $cljs$core$IMeta$$() {
}
var $cljs$core$_meta$$ = function $cljs$core$_meta$$($o$jscomp$12$$) {
  if (null != $o$jscomp$12$$ && null != $o$jscomp$12$$.$cljs$core$IMeta$_meta$arity$1$) {
    return $o$jscomp$12$$.$cljs$core$IMeta$_meta$arity$1$($o$jscomp$12$$);
  }
  var $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$ = $cljs$core$_meta$$[$goog$typeOf$$(null == $o$jscomp$12$$ ? null : $o$jscomp$12$$)];
  if (null != $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$) {
    return $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$12$$) : $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$.call(null, $o$jscomp$12$$);
  }
  $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$ = $cljs$core$_meta$$._;
  if (null != $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$) {
    return $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$12$$) : $m__8679__auto__$jscomp$45_m__8679__auto____$1$jscomp$45$$.call(null, $o$jscomp$12$$);
  }
  throw $cljs$core$missing_protocol$$("IMeta.-meta", $o$jscomp$12$$);
}, $cljs$core$_with_meta$$ = function $cljs$core$_with_meta$$($o$jscomp$13$$, $meta$$) {
  if (null != $o$jscomp$13$$ && null != $o$jscomp$13$$.$cljs$core$IWithMeta$_with_meta$arity$2$) {
    return $o$jscomp$13$$.$cljs$core$IWithMeta$_with_meta$arity$2$($o$jscomp$13$$, $meta$$);
  }
  var $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$ = $cljs$core$_with_meta$$[$goog$typeOf$$(null == $o$jscomp$13$$ ? null : $o$jscomp$13$$)];
  if (null != $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$) {
    return $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$13$$, $meta$$) : $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$.call(null, $o$jscomp$13$$, $meta$$);
  }
  $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$ = $cljs$core$_with_meta$$._;
  if (null != $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$) {
    return $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$13$$, $meta$$) : $m__8679__auto__$jscomp$46_m__8679__auto____$1$jscomp$46$$.call(null, $o$jscomp$13$$, $meta$$);
  }
  throw $cljs$core$missing_protocol$$("IWithMeta.-with-meta", $o$jscomp$13$$);
};
function $cljs$core$IReduce$$() {
}
var $cljs$core$_reduce$$ = function $cljs$core$_reduce$$($var_args$jscomp$86$$) {
  for (var $args11101$$ = [], $len__9181__auto___11104$$ = arguments.length, $i__9182__auto___11105$$ = 0;;) {
    if ($i__9182__auto___11105$$ < $len__9181__auto___11104$$) {
      $args11101$$.push(arguments[$i__9182__auto___11105$$]), $i__9182__auto___11105$$ += 1;
    } else {
      break;
    }
  }
  switch($args11101$$.length) {
    case 2:
      return $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11101$$.length)].join(""));
  }
};
$cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$18$$, $f$jscomp$50$$) {
  if (null != $coll$jscomp$18$$ && null != $coll$jscomp$18$$.$cljs$core$IReduce$_reduce$arity$2$) {
    return $coll$jscomp$18$$.$cljs$core$IReduce$_reduce$arity$2$($coll$jscomp$18$$, $f$jscomp$50$$);
  }
  var $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$ = $cljs$core$_reduce$$[$goog$typeOf$$(null == $coll$jscomp$18$$ ? null : $coll$jscomp$18$$)];
  if (null != $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$) {
    return $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$18$$, $f$jscomp$50$$) : $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$.call(null, $coll$jscomp$18$$, $f$jscomp$50$$);
  }
  $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$ = $cljs$core$_reduce$$._;
  if (null != $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$) {
    return $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$18$$, $f$jscomp$50$$) : $m__8679__auto__$jscomp$47_m__8679__auto____$1$jscomp$47$$.call(null, $coll$jscomp$18$$, $f$jscomp$50$$);
  }
  throw $cljs$core$missing_protocol$$("IReduce.-reduce", $coll$jscomp$18$$);
};
$cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$3$ = function($coll$jscomp$19$$, $f$jscomp$51$$, $start$jscomp$11$$) {
  if (null != $coll$jscomp$19$$ && null != $coll$jscomp$19$$.$cljs$core$IReduce$_reduce$arity$3$) {
    return $coll$jscomp$19$$.$cljs$core$IReduce$_reduce$arity$3$($coll$jscomp$19$$, $f$jscomp$51$$, $start$jscomp$11$$);
  }
  var $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$ = $cljs$core$_reduce$$[$goog$typeOf$$(null == $coll$jscomp$19$$ ? null : $coll$jscomp$19$$)];
  if (null != $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$) {
    return $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$19$$, $f$jscomp$51$$, $start$jscomp$11$$) : $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$.call(null, $coll$jscomp$19$$, $f$jscomp$51$$, $start$jscomp$11$$);
  }
  $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$ = $cljs$core$_reduce$$._;
  if (null != $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$) {
    return $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$19$$, $f$jscomp$51$$, $start$jscomp$11$$) : $m__8679__auto__$jscomp$48_m__8679__auto____$1$jscomp$48$$.call(null, $coll$jscomp$19$$, $f$jscomp$51$$, $start$jscomp$11$$);
  }
  throw $cljs$core$missing_protocol$$("IReduce.-reduce", $coll$jscomp$19$$);
};
$cljs$core$_reduce$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$_equiv$$ = function $cljs$core$_equiv$$($o$jscomp$14$$, $other$jscomp$34$$) {
  if (null != $o$jscomp$14$$ && null != $o$jscomp$14$$.$cljs$core$IEquiv$_equiv$arity$2$) {
    return $o$jscomp$14$$.$cljs$core$IEquiv$_equiv$arity$2$($o$jscomp$14$$, $other$jscomp$34$$);
  }
  var $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$ = $cljs$core$_equiv$$[$goog$typeOf$$(null == $o$jscomp$14$$ ? null : $o$jscomp$14$$)];
  if (null != $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$) {
    return $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$14$$, $other$jscomp$34$$) : $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$.call(null, $o$jscomp$14$$, $other$jscomp$34$$);
  }
  $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$ = $cljs$core$_equiv$$._;
  if (null != $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$) {
    return $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$14$$, $other$jscomp$34$$) : $m__8679__auto__$jscomp$50_m__8679__auto____$1$jscomp$50$$.call(null, $o$jscomp$14$$, $other$jscomp$34$$);
  }
  throw $cljs$core$missing_protocol$$("IEquiv.-equiv", $o$jscomp$14$$);
}, $cljs$core$_hash$$ = function $cljs$core$_hash$$($o$jscomp$15$$) {
  if (null != $o$jscomp$15$$ && null != $o$jscomp$15$$.$cljs$core$IHash$_hash$arity$1$) {
    return $o$jscomp$15$$.$cljs$core$IHash$_hash$arity$1$($o$jscomp$15$$);
  }
  var $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$ = $cljs$core$_hash$$[$goog$typeOf$$(null == $o$jscomp$15$$ ? null : $o$jscomp$15$$)];
  if (null != $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$) {
    return $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$15$$) : $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$.call(null, $o$jscomp$15$$);
  }
  $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$ = $cljs$core$_hash$$._;
  if (null != $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$) {
    return $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$15$$) : $m__8679__auto__$jscomp$51_m__8679__auto____$1$jscomp$51$$.call(null, $o$jscomp$15$$);
  }
  throw $cljs$core$missing_protocol$$("IHash.-hash", $o$jscomp$15$$);
};
function $cljs$core$ISeqable$$() {
}
var $cljs$core$_seq$$ = function $cljs$core$_seq$$($o$jscomp$16$$) {
  if (null != $o$jscomp$16$$ && null != $o$jscomp$16$$.$cljs$core$ISeqable$_seq$arity$1$) {
    return $o$jscomp$16$$.$cljs$core$ISeqable$_seq$arity$1$($o$jscomp$16$$);
  }
  var $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$ = $cljs$core$_seq$$[$goog$typeOf$$(null == $o$jscomp$16$$ ? null : $o$jscomp$16$$)];
  if (null != $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$) {
    return $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$16$$) : $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$.call(null, $o$jscomp$16$$);
  }
  $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$ = $cljs$core$_seq$$._;
  if (null != $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$) {
    return $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$16$$) : $m__8679__auto__$jscomp$52_m__8679__auto____$1$jscomp$52$$.call(null, $o$jscomp$16$$);
  }
  throw $cljs$core$missing_protocol$$("ISeqable.-seq", $o$jscomp$16$$);
};
function $cljs$core$ISequential$$() {
}
function $cljs$core$IList$$() {
}
var $cljs$core$_write$$ = function $cljs$core$_write$$($writer$$, $s$jscomp$18$$) {
  if (null != $writer$$ && null != $writer$$.$cljs$core$IWriter$_write$arity$2$) {
    return $writer$$.$cljs$core$IWriter$_write$arity$2$(0, $s$jscomp$18$$);
  }
  var $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$ = $cljs$core$_write$$[$goog$typeOf$$(null == $writer$$ ? null : $writer$$)];
  if (null != $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$) {
    return $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$.$cljs$core$IFn$_invoke$arity$2$($writer$$, $s$jscomp$18$$) : $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$.call(null, $writer$$, $s$jscomp$18$$);
  }
  $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$ = $cljs$core$_write$$._;
  if (null != $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$) {
    return $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$.$cljs$core$IFn$_invoke$arity$2$($writer$$, $s$jscomp$18$$) : $m__8679__auto__$jscomp$58_m__8679__auto____$1$jscomp$58$$.call(null, $writer$$, $s$jscomp$18$$);
  }
  throw $cljs$core$missing_protocol$$("IWriter.-write", $writer$$);
}, $cljs$core$_notify_watches$$ = function $cljs$core$_notify_watches$$($this$$jscomp$22$$, $oldval$$, $newval$$) {
  if (null != $this$$jscomp$22$$ && null != $this$$jscomp$22$$.$cljs$core$IWatchable$_notify_watches$arity$3$) {
    return $this$$jscomp$22$$.$cljs$core$IWatchable$_notify_watches$arity$3$(0, $oldval$$, $newval$$);
  }
  var $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$ = $cljs$core$_notify_watches$$[$goog$typeOf$$(null == $this$$jscomp$22$$ ? null : $this$$jscomp$22$$)];
  if (null != $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$) {
    return $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$.$cljs$core$IFn$_invoke$arity$3$($this$$jscomp$22$$, $oldval$$, $newval$$) : $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$.call(null, $this$$jscomp$22$$, $oldval$$, $newval$$);
  }
  $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$ = $cljs$core$_notify_watches$$._;
  if (null != $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$) {
    return $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$.$cljs$core$IFn$_invoke$arity$3$($this$$jscomp$22$$, $oldval$$, $newval$$) : $m__8679__auto__$jscomp$62_m__8679__auto____$1$jscomp$62$$.call(null, $this$$jscomp$22$$, $oldval$$, $newval$$);
  }
  throw $cljs$core$missing_protocol$$("IWatchable.-notify-watches", $this$$jscomp$22$$);
}, $cljs$core$_as_transient$$ = function $cljs$core$_as_transient$$($coll$jscomp$26$$) {
  if (null != $coll$jscomp$26$$ && null != $coll$jscomp$26$$.$cljs$core$IEditableCollection$_as_transient$arity$1$) {
    return $coll$jscomp$26$$.$cljs$core$IEditableCollection$_as_transient$arity$1$($coll$jscomp$26$$);
  }
  var $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$ = $cljs$core$_as_transient$$[$goog$typeOf$$(null == $coll$jscomp$26$$ ? null : $coll$jscomp$26$$)];
  if (null != $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$) {
    return $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$26$$) : $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$.call(null, $coll$jscomp$26$$);
  }
  $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$ = $cljs$core$_as_transient$$._;
  if (null != $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$) {
    return $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$26$$) : $m__8679__auto__$jscomp$65_m__8679__auto____$1$jscomp$65$$.call(null, $coll$jscomp$26$$);
  }
  throw $cljs$core$missing_protocol$$("IEditableCollection.-as-transient", $coll$jscomp$26$$);
}, $cljs$core$_conj_BANG_$$ = function $cljs$core$_conj_BANG_$$($tcoll$$, $val$jscomp$31$$) {
  if (null != $tcoll$$ && null != $tcoll$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$) {
    return $tcoll$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$($tcoll$$, $val$jscomp$31$$);
  }
  var $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$ = $cljs$core$_conj_BANG_$$[$goog$typeOf$$(null == $tcoll$$ ? null : $tcoll$$)];
  if (null != $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$) {
    return $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$.$cljs$core$IFn$_invoke$arity$2$($tcoll$$, $val$jscomp$31$$) : $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$.call(null, $tcoll$$, $val$jscomp$31$$);
  }
  $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$ = $cljs$core$_conj_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$) {
    return $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$.$cljs$core$IFn$_invoke$arity$2$($tcoll$$, $val$jscomp$31$$) : $m__8679__auto__$jscomp$66_m__8679__auto____$1$jscomp$66$$.call(null, $tcoll$$, $val$jscomp$31$$);
  }
  throw $cljs$core$missing_protocol$$("ITransientCollection.-conj!", $tcoll$$);
}, $cljs$core$_persistent_BANG_$$ = function $cljs$core$_persistent_BANG_$$($tcoll$jscomp$1$$) {
  if (null != $tcoll$jscomp$1$$ && null != $tcoll$jscomp$1$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$) {
    return $tcoll$jscomp$1$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$($tcoll$jscomp$1$$);
  }
  var $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$ = $cljs$core$_persistent_BANG_$$[$goog$typeOf$$(null == $tcoll$jscomp$1$$ ? null : $tcoll$jscomp$1$$)];
  if (null != $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$) {
    return $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$.$cljs$core$IFn$_invoke$arity$1$($tcoll$jscomp$1$$) : $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$.call(null, $tcoll$jscomp$1$$);
  }
  $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$ = $cljs$core$_persistent_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$) {
    return $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$.$cljs$core$IFn$_invoke$arity$1$($tcoll$jscomp$1$$) : $m__8679__auto__$jscomp$67_m__8679__auto____$1$jscomp$67$$.call(null, $tcoll$jscomp$1$$);
  }
  throw $cljs$core$missing_protocol$$("ITransientCollection.-persistent!", $tcoll$jscomp$1$$);
}, $cljs$core$_assoc_BANG_$$ = function $cljs$core$_assoc_BANG_$$($tcoll$jscomp$2$$, $key$jscomp$60$$, $val$jscomp$32$$) {
  if (null != $tcoll$jscomp$2$$ && null != $tcoll$jscomp$2$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$) {
    return $tcoll$jscomp$2$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$($tcoll$jscomp$2$$, $key$jscomp$60$$, $val$jscomp$32$$);
  }
  var $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$ = $cljs$core$_assoc_BANG_$$[$goog$typeOf$$(null == $tcoll$jscomp$2$$ ? null : $tcoll$jscomp$2$$)];
  if (null != $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$) {
    return $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$.$cljs$core$IFn$_invoke$arity$3$($tcoll$jscomp$2$$, $key$jscomp$60$$, $val$jscomp$32$$) : $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$.call(null, $tcoll$jscomp$2$$, $key$jscomp$60$$, $val$jscomp$32$$);
  }
  $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$ = $cljs$core$_assoc_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$) {
    return $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$.$cljs$core$IFn$_invoke$arity$3$($tcoll$jscomp$2$$, $key$jscomp$60$$, $val$jscomp$32$$) : $m__8679__auto__$jscomp$68_m__8679__auto____$1$jscomp$68$$.call(null, $tcoll$jscomp$2$$, $key$jscomp$60$$, $val$jscomp$32$$);
  }
  throw $cljs$core$missing_protocol$$("ITransientAssociative.-assoc!", $tcoll$jscomp$2$$);
}, $cljs$core$_drop_first$$ = function $cljs$core$_drop_first$$($coll$jscomp$27$$) {
  if (null != $coll$jscomp$27$$ && null != $coll$jscomp$27$$.$cljs$core$IChunk$_drop_first$arity$1$) {
    return $coll$jscomp$27$$.$cljs$core$IChunk$_drop_first$arity$1$();
  }
  var $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$ = $cljs$core$_drop_first$$[$goog$typeOf$$(null == $coll$jscomp$27$$ ? null : $coll$jscomp$27$$)];
  if (null != $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$) {
    return $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$27$$) : $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$.call(null, $coll$jscomp$27$$);
  }
  $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$ = $cljs$core$_drop_first$$._;
  if (null != $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$) {
    return $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$27$$) : $m__8679__auto__$jscomp$74_m__8679__auto____$1$jscomp$74$$.call(null, $coll$jscomp$27$$);
  }
  throw $cljs$core$missing_protocol$$("IChunk.-drop-first", $coll$jscomp$27$$);
}, $cljs$core$_chunked_first$$ = function $cljs$core$_chunked_first$$($coll$jscomp$28$$) {
  if (null != $coll$jscomp$28$$ && null != $coll$jscomp$28$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$) {
    return $coll$jscomp$28$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$($coll$jscomp$28$$);
  }
  var $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$ = $cljs$core$_chunked_first$$[$goog$typeOf$$(null == $coll$jscomp$28$$ ? null : $coll$jscomp$28$$)];
  if (null != $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$) {
    return $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$28$$) : $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$.call(null, $coll$jscomp$28$$);
  }
  $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$ = $cljs$core$_chunked_first$$._;
  if (null != $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$) {
    return $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$28$$) : $m__8679__auto__$jscomp$75_m__8679__auto____$1$jscomp$75$$.call(null, $coll$jscomp$28$$);
  }
  throw $cljs$core$missing_protocol$$("IChunkedSeq.-chunked-first", $coll$jscomp$28$$);
}, $cljs$core$_chunked_rest$$ = function $cljs$core$_chunked_rest$$($coll$jscomp$29$$) {
  if (null != $coll$jscomp$29$$ && null != $coll$jscomp$29$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$) {
    return $coll$jscomp$29$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$($coll$jscomp$29$$);
  }
  var $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$ = $cljs$core$_chunked_rest$$[$goog$typeOf$$(null == $coll$jscomp$29$$ ? null : $coll$jscomp$29$$)];
  if (null != $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$) {
    return $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$29$$) : $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$.call(null, $coll$jscomp$29$$);
  }
  $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$ = $cljs$core$_chunked_rest$$._;
  if (null != $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$) {
    return $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$29$$) : $m__8679__auto__$jscomp$76_m__8679__auto____$1$jscomp$76$$.call(null, $coll$jscomp$29$$);
  }
  throw $cljs$core$missing_protocol$$("IChunkedSeq.-chunked-rest", $coll$jscomp$29$$);
}, $cljs$core$_name$$ = function $cljs$core$_name$$($x$jscomp$95$$) {
  if (null != $x$jscomp$95$$ && null != $x$jscomp$95$$.$cljs$core$INamed$_name$arity$1$) {
    return $x$jscomp$95$$.$cljs$core$INamed$_name$arity$1$($x$jscomp$95$$);
  }
  var $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$ = $cljs$core$_name$$[$goog$typeOf$$(null == $x$jscomp$95$$ ? null : $x$jscomp$95$$)];
  if (null != $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$) {
    return $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$95$$) : $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$.call(null, $x$jscomp$95$$);
  }
  $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$ = $cljs$core$_name$$._;
  if (null != $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$) {
    return $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$95$$) : $m__8679__auto__$jscomp$78_m__8679__auto____$1$jscomp$78$$.call(null, $x$jscomp$95$$);
  }
  throw $cljs$core$missing_protocol$$("INamed.-name", $x$jscomp$95$$);
}, $cljs$core$_namespace$$ = function $cljs$core$_namespace$$($x$jscomp$96$$) {
  if (null != $x$jscomp$96$$ && null != $x$jscomp$96$$.$cljs$core$INamed$_namespace$arity$1$) {
    return $x$jscomp$96$$.$cljs$core$INamed$_namespace$arity$1$($x$jscomp$96$$);
  }
  var $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$ = $cljs$core$_namespace$$[$goog$typeOf$$(null == $x$jscomp$96$$ ? null : $x$jscomp$96$$)];
  if (null != $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$) {
    return $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$96$$) : $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$.call(null, $x$jscomp$96$$);
  }
  $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$ = $cljs$core$_namespace$$._;
  if (null != $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$) {
    return $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$96$$) : $m__8679__auto__$jscomp$79_m__8679__auto____$1$jscomp$79$$.call(null, $x$jscomp$96$$);
  }
  throw $cljs$core$missing_protocol$$("INamed.-namespace", $x$jscomp$96$$);
}, $cljs$core$_reset_BANG_$$ = function $cljs$core$_reset_BANG_$$($o$jscomp$18$$, $new_value$$) {
  if (null != $o$jscomp$18$$ && null != $o$jscomp$18$$.$cljs$core$IReset$_reset_BANG_$arity$2$) {
    return $o$jscomp$18$$.$cljs$core$IReset$_reset_BANG_$arity$2$($o$jscomp$18$$, $new_value$$);
  }
  var $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$ = $cljs$core$_reset_BANG_$$[$goog$typeOf$$(null == $o$jscomp$18$$ ? null : $o$jscomp$18$$)];
  if (null != $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$) {
    return $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$18$$, $new_value$$) : $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$.call(null, $o$jscomp$18$$, $new_value$$);
  }
  $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$ = $cljs$core$_reset_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$) {
    return $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$18$$, $new_value$$) : $m__8679__auto__$jscomp$80_m__8679__auto____$1$jscomp$80$$.call(null, $o$jscomp$18$$, $new_value$$);
  }
  throw $cljs$core$missing_protocol$$("IReset.-reset!", $o$jscomp$18$$);
}, $cljs$core$_swap_BANG_$$ = function $cljs$core$_swap_BANG_$$($var_args$jscomp$87$$) {
  for (var $args11108$$ = [], $len__9181__auto___11111$$ = arguments.length, $i__9182__auto___11112$$ = 0;;) {
    if ($i__9182__auto___11112$$ < $len__9181__auto___11111$$) {
      $args11108$$.push(arguments[$i__9182__auto___11112$$]), $i__9182__auto___11112$$ += 1;
    } else {
      break;
    }
  }
  switch($args11108$$.length) {
    case 2:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$5$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11108$$.length)].join(""));
  }
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($o$jscomp$19$$, $f$jscomp$54$$) {
  if (null != $o$jscomp$19$$ && null != $o$jscomp$19$$.$cljs$core$ISwap$_swap_BANG_$arity$2$) {
    return $o$jscomp$19$$.$cljs$core$ISwap$_swap_BANG_$arity$2$($o$jscomp$19$$, $f$jscomp$54$$);
  }
  var $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$jscomp$19$$ ? null : $o$jscomp$19$$)];
  if (null != $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$) {
    return $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$19$$, $f$jscomp$54$$) : $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$.call(null, $o$jscomp$19$$, $f$jscomp$54$$);
  }
  $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$ = $cljs$core$_swap_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$) {
    return $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$19$$, $f$jscomp$54$$) : $m__8679__auto__$jscomp$81_m__8679__auto____$1$jscomp$81$$.call(null, $o$jscomp$19$$, $f$jscomp$54$$);
  }
  throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$jscomp$19$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$ = function($o$jscomp$20$$, $f$jscomp$55$$, $a$jscomp$33$$) {
  if (null != $o$jscomp$20$$ && null != $o$jscomp$20$$.$cljs$core$ISwap$_swap_BANG_$arity$3$) {
    return $o$jscomp$20$$.$cljs$core$ISwap$_swap_BANG_$arity$3$($o$jscomp$20$$, $f$jscomp$55$$, $a$jscomp$33$$);
  }
  var $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$jscomp$20$$ ? null : $o$jscomp$20$$)];
  if (null != $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$) {
    return $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$20$$, $f$jscomp$55$$, $a$jscomp$33$$) : $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$.call(null, $o$jscomp$20$$, $f$jscomp$55$$, $a$jscomp$33$$);
  }
  $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$ = $cljs$core$_swap_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$) {
    return $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$20$$, $f$jscomp$55$$, $a$jscomp$33$$) : $m__8679__auto__$jscomp$82_m__8679__auto____$1$jscomp$82$$.call(null, $o$jscomp$20$$, $f$jscomp$55$$, $a$jscomp$33$$);
  }
  throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$jscomp$20$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$ = function($o$jscomp$21$$, $f$jscomp$56$$, $a$jscomp$34$$, $b$jscomp$29$$) {
  if (null != $o$jscomp$21$$ && null != $o$jscomp$21$$.$cljs$core$ISwap$_swap_BANG_$arity$4$) {
    return $o$jscomp$21$$.$cljs$core$ISwap$_swap_BANG_$arity$4$($o$jscomp$21$$, $f$jscomp$56$$, $a$jscomp$34$$, $b$jscomp$29$$);
  }
  var $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$jscomp$21$$ ? null : $o$jscomp$21$$)];
  if (null != $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$) {
    return $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$.$cljs$core$IFn$_invoke$arity$4$ ? $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$.$cljs$core$IFn$_invoke$arity$4$($o$jscomp$21$$, $f$jscomp$56$$, $a$jscomp$34$$, $b$jscomp$29$$) : $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$.call(null, $o$jscomp$21$$, $f$jscomp$56$$, $a$jscomp$34$$, $b$jscomp$29$$);
  }
  $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$ = $cljs$core$_swap_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$) {
    return $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$.$cljs$core$IFn$_invoke$arity$4$ ? $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$.$cljs$core$IFn$_invoke$arity$4$($o$jscomp$21$$, $f$jscomp$56$$, $a$jscomp$34$$, $b$jscomp$29$$) : $m__8679__auto__$jscomp$83_m__8679__auto____$1$jscomp$83$$.call(null, $o$jscomp$21$$, $f$jscomp$56$$, $a$jscomp$34$$, $b$jscomp$29$$);
  }
  throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$jscomp$21$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$5$ = function($o$jscomp$22$$, $f$jscomp$57$$, $a$jscomp$35$$, $b$jscomp$30$$, $xs$$) {
  if (null != $o$jscomp$22$$ && null != $o$jscomp$22$$.$cljs$core$ISwap$_swap_BANG_$arity$5$) {
    return $o$jscomp$22$$.$cljs$core$ISwap$_swap_BANG_$arity$5$($o$jscomp$22$$, $f$jscomp$57$$, $a$jscomp$35$$, $b$jscomp$30$$, $xs$$);
  }
  var $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$jscomp$22$$ ? null : $o$jscomp$22$$)];
  if (null != $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$) {
    return $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$.$cljs$core$IFn$_invoke$arity$5$ ? $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$.$cljs$core$IFn$_invoke$arity$5$($o$jscomp$22$$, $f$jscomp$57$$, $a$jscomp$35$$, $b$jscomp$30$$, $xs$$) : $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$.call(null, $o$jscomp$22$$, $f$jscomp$57$$, $a$jscomp$35$$, $b$jscomp$30$$, $xs$$);
  }
  $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$ = $cljs$core$_swap_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$) {
    return $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$.$cljs$core$IFn$_invoke$arity$5$ ? $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$.$cljs$core$IFn$_invoke$arity$5$($o$jscomp$22$$, $f$jscomp$57$$, $a$jscomp$35$$, $b$jscomp$30$$, $xs$$) : $m__8679__auto__$jscomp$84_m__8679__auto____$1$jscomp$84$$.call(null, $o$jscomp$22$$, $f$jscomp$57$$, $a$jscomp$35$$, $b$jscomp$30$$, $xs$$);
  }
  throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$jscomp$22$$);
};
$cljs$core$_swap_BANG_$$.$cljs$lang$maxFixedArity$ = 5;
var $cljs$core$_vreset_BANG_$$ = function $cljs$core$_vreset_BANG_$$($o$jscomp$23$$, $new_value$jscomp$1$$) {
  if (null != $o$jscomp$23$$ && null != $o$jscomp$23$$.$cljs$core$IVolatile$_vreset_BANG_$arity$2$) {
    return $o$jscomp$23$$.$cljs$core$IVolatile$_vreset_BANG_$arity$2$(0, $new_value$jscomp$1$$);
  }
  var $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$ = $cljs$core$_vreset_BANG_$$[$goog$typeOf$$(null == $o$jscomp$23$$ ? null : $o$jscomp$23$$)];
  if (null != $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$) {
    return $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$23$$, $new_value$jscomp$1$$) : $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$.call(null, $o$jscomp$23$$, $new_value$jscomp$1$$);
  }
  $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$ = $cljs$core$_vreset_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$) {
    return $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$23$$, $new_value$jscomp$1$$) : $m__8679__auto__$jscomp$85_m__8679__auto____$1$jscomp$85$$.call(null, $o$jscomp$23$$, $new_value$jscomp$1$$);
  }
  throw $cljs$core$missing_protocol$$("IVolatile.-vreset!", $o$jscomp$23$$);
}, $cljs$core$_iterator$$ = function $cljs$core$_iterator$$($coll$jscomp$31$$) {
  if (null != $coll$jscomp$31$$ && null != $coll$jscomp$31$$.$cljs$core$IIterable$_iterator$arity$1$) {
    return $coll$jscomp$31$$.$cljs$core$IIterable$_iterator$arity$1$($coll$jscomp$31$$);
  }
  var $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$ = $cljs$core$_iterator$$[$goog$typeOf$$(null == $coll$jscomp$31$$ ? null : $coll$jscomp$31$$)];
  if (null != $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$) {
    return $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$31$$) : $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$.call(null, $coll$jscomp$31$$);
  }
  $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$ = $cljs$core$_iterator$$._;
  if (null != $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$) {
    return $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$31$$) : $m__8679__auto__$jscomp$86_m__8679__auto____$1$jscomp$86$$.call(null, $coll$jscomp$31$$);
  }
  throw $cljs$core$missing_protocol$$("IIterable.-iterator", $coll$jscomp$31$$);
};
function $cljs$core$StringBufferWriter$$($sb$jscomp$2$$) {
  this.$sb$ = $sb$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 1073741824;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$StringBufferWriter$$.prototype.$cljs$core$IWriter$_write$arity$2$ = function($_$jscomp$2$$, $s$jscomp$19$$) {
  return this.$sb$.append($s$jscomp$19$$);
};
function $cljs$core$pr_str_STAR_$$($obj$jscomp$77$$) {
  var $sb$jscomp$4$$ = new $goog$string$StringBuffer$$;
  $obj$jscomp$77$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$(null, new $cljs$core$StringBufferWriter$$($sb$jscomp$4$$), $cljs$core$pr_opts$$());
  return "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sb$jscomp$4$$);
}
var $cljs$core$imul$$ = "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function($a$jscomp$36$$, $b$jscomp$31$$) {
  return Math.imul($a$jscomp$36$$, $b$jscomp$31$$);
} : function($a$jscomp$37$$, $b$jscomp$32$$) {
  var $al$$ = $a$jscomp$37$$ & 65535, $bl$$ = $b$jscomp$32$$ & 65535;
  return $al$$ * $bl$$ + (($a$jscomp$37$$ >>> 16 & 65535) * $bl$$ + $al$$ * ($b$jscomp$32$$ >>> 16 & 65535) << 16 >>> 0) | 0;
};
function $cljs$core$m3_mix_K1$$($k1_x$jscomp$inline_107$$) {
  $k1_x$jscomp$inline_107$$ = $cljs$core$imul$$($k1_x$jscomp$inline_107$$ | 0, -862048943);
  return $cljs$core$imul$$($k1_x$jscomp$inline_107$$ << 15 | $k1_x$jscomp$inline_107$$ >>> -15, 461845907);
}
function $cljs$core$m3_mix_H1$$($h1$$, $k1$jscomp$1$$) {
  var $x$jscomp$inline_110$$ = ($h1$$ | 0) ^ ($k1$jscomp$1$$ | 0);
  return $cljs$core$imul$$($x$jscomp$inline_110$$ << 13 | $x$jscomp$inline_110$$ >>> -13, 5) + -430675100 | 0;
}
function $cljs$core$m3_fmix$$($h1$jscomp$1$$, $len$jscomp$10$$) {
  var $h1__$2_h1__$4_h1__$6$$ = ($h1$jscomp$1$$ | 0) ^ $len$jscomp$10$$, $h1__$2_h1__$4_h1__$6$$ = $cljs$core$imul$$($h1__$2_h1__$4_h1__$6$$ ^ $h1__$2_h1__$4_h1__$6$$ >>> 16, -2048144789), $h1__$2_h1__$4_h1__$6$$ = $cljs$core$imul$$($h1__$2_h1__$4_h1__$6$$ ^ $h1__$2_h1__$4_h1__$6$$ >>> 13, -1028477387);
  return $h1__$2_h1__$4_h1__$6$$ ^ $h1__$2_h1__$4_h1__$6$$ >>> 16;
}
function $cljs$core$m3_hash_unencoded_chars$$($in$$jscomp$1$$) {
  a: {
    var $h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$ = 1;
    for (var $G__11116$jscomp$inline_116_h1$jscomp$inline_114$$ = 0;;) {
      if ($h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$ < $in$$jscomp$1$$.length) {
        var $G__11115$jscomp$inline_115$$ = $h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$ + 2, $G__11116$jscomp$inline_116_h1$jscomp$inline_114$$ = $cljs$core$m3_mix_H1$$($G__11116$jscomp$inline_116_h1$jscomp$inline_114$$, $cljs$core$m3_mix_K1$$($in$$jscomp$1$$.charCodeAt($h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$ - 1) | $in$$jscomp$1$$.charCodeAt($h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$) << 16));
        $h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$ = $G__11115$jscomp$inline_115$$;
      } else {
        $h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$ = $G__11116$jscomp$inline_116_h1$jscomp$inline_114$$;
        break a;
      }
    }
  }
  $h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$ = 1 === ($in$$jscomp$1$$.length & 1) ? $h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$ ^ $cljs$core$m3_mix_K1$$($in$$jscomp$1$$.charCodeAt($in$$jscomp$1$$.length - 1)) : $h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$;
  return $cljs$core$m3_fmix$$($h1$jscomp$3_h1__$1$jscomp$1_i$jscomp$inline_113$$, $cljs$core$imul$$(2, $in$$jscomp$1$$.length));
}
var $cljs$core$string_hash_cache$$ = {}, $cljs$core$string_hash_cache_count$$ = 0;
function $cljs$core$hash_string$$($JSCompiler_temp$jscomp$8_k$jscomp$20$$) {
  255 < $cljs$core$string_hash_cache_count$$ && ($cljs$core$string_hash_cache$$ = {}, $cljs$core$string_hash_cache_count$$ = 0);
  if (null == $JSCompiler_temp$jscomp$8_k$jscomp$20$$) {
    return 0;
  }
  var $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$ = $cljs$core$string_hash_cache$$[$JSCompiler_temp$jscomp$8_k$jscomp$20$$];
  if ("number" !== typeof $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$) {
    a: {
      if (null != $JSCompiler_temp$jscomp$8_k$jscomp$20$$) {
        if ($h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$ = $JSCompiler_temp$jscomp$8_k$jscomp$20$$.length, 0 < $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$) {
          for (var $i$jscomp$inline_527$$ = 0, $G__11120$jscomp$inline_530_hash$jscomp$inline_528$$ = 0;;) {
            if ($i$jscomp$inline_527$$ < $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$) {
              var $G__11119$jscomp$inline_529$$ = $i$jscomp$inline_527$$ + 1, $G__11120$jscomp$inline_530_hash$jscomp$inline_528$$ = $cljs$core$imul$$(31, $G__11120$jscomp$inline_530_hash$jscomp$inline_528$$) + $JSCompiler_temp$jscomp$8_k$jscomp$20$$.charCodeAt($i$jscomp$inline_527$$), $i$jscomp$inline_527$$ = $G__11119$jscomp$inline_529$$;
            } else {
              $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$ = $G__11120$jscomp$inline_530_hash$jscomp$inline_528$$;
              break a;
            }
          }
        } else {
          $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$ = 0;
        }
      } else {
        $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$ = 0;
      }
    }
    $cljs$core$string_hash_cache$$[$JSCompiler_temp$jscomp$8_k$jscomp$20$$] = $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$;
    $cljs$core$string_hash_cache_count$$ += 1;
  }
  return $JSCompiler_temp$jscomp$8_k$jscomp$20$$ = $h$jscomp$21_h$jscomp$inline_119_len$jscomp$inline_526$$;
}
function $cljs$core$hash$$($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$) {
  if (null != $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ && ($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$.$cljs$lang$protocol_mask$partition0$$ & 4194304 || $cljs$core$PROTOCOL_SENTINEL$$ === $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$.$cljs$core$IHash$$)) {
    return $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$.$cljs$core$IHash$_hash$arity$1$(null) ^ 0;
  }
  if ("number" === typeof $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$) {
    if ($cljs$core$truth_$$(isFinite($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$))) {
      return Math.floor($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$) % 2147483647;
    }
    switch($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$) {
      case Infinity:
        return 2146435072;
      case -Infinity:
        return -1048576;
      default:
        return 2146959360;
    }
  } else {
    return !0 === $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ ? $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ = 1231 : !1 === $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ ? $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ = 
    1237 : "string" === typeof $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ ? ($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ = $cljs$core$hash_string$$($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$), 
    0 !== $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ && ($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ = $cljs$core$m3_mix_K1$$($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$), 
    $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ = $cljs$core$m3_mix_H1$$(0, $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$), $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ = $cljs$core$m3_fmix$$($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$, 
    4))) : $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ = $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ instanceof Date ? $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$.valueOf() ^ 
    0 : null == $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$ ? 0 : $cljs$core$_hash$$($JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$) ^ 0, $JSCompiler_temp$jscomp$5_JSCompiler_temp$jscomp$6_JSCompiler_temp$jscomp$7_h1$jscomp$inline_123_in$$jscomp$inline_121_k1$jscomp$inline_122_o$jscomp$24$$;
  }
}
function $cljs$core$hash_combine$$($seed$$, $hash$jscomp$1$$) {
  return $seed$$ ^ $hash$jscomp$1$$ + 2654435769 + ($seed$$ << 6) + ($seed$$ >> 2);
}
function $cljs$core$Symbol$$($ns$jscomp$1$$, $name$jscomp$77$$, $str$jscomp$61$$, $_hash$$, $_meta$$) {
  this.$ns$ = $ns$jscomp$1$$;
  this.name = $name$jscomp$77$$;
  this.$str$ = $str$jscomp$61$$;
  this.$_hash$ = $_hash$$;
  this.$_meta$ = $_meta$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2154168321;
  this.$cljs$lang$protocol_mask$partition1$$ = 4096;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Symbol$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return this.$str$;
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$35$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$35$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($_$jscomp$5$$, $other$jscomp$36$$) {
  return $other$jscomp$36$$ instanceof $cljs$core$Symbol$$ ? this.$str$ === $other$jscomp$36$$.$str$ : !1;
};
$JSCompiler_prototypeAlias$$.call = function() {
  function $G__11143__3$$($G__11143__3$$, $G__11143__2$$, $G__11143$$) {
    return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($G__11143__2$$, this, $G__11143$$) : $cljs$core$get$$.call(null, $G__11143__2$$, this, $G__11143$$);
  }
  function $G__11143__2$$($G__11143__3$$, $G__11143__2$$) {
    return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($G__11143__2$$, this) : $cljs$core$get$$.call(null, $G__11143__2$$, this);
  }
  var $G__11143$$ = null, $G__11143$$ = function($G__11143$$, $coll$jscomp$34$$, $not_found$jscomp$3$$) {
    switch(arguments.length) {
      case 2:
        return $G__11143__2$$.call(this, 0, $coll$jscomp$34$$);
      case 3:
        return $G__11143__3$$.call(this, 0, $coll$jscomp$34$$, $not_found$jscomp$3$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11143$$.$cljs$core$IFn$_invoke$arity$2$ = $G__11143__2$$;
  $G__11143$$.$cljs$core$IFn$_invoke$arity$3$ = $G__11143__3$$;
  return $G__11143$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$8$$, $args11142$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args11142$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$jscomp$35$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$35$$, this) : $cljs$core$get$$.call(null, $coll$jscomp$35$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$36$$, $not_found$jscomp$4$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$36$$, this, $not_found$jscomp$4$$) : $cljs$core$get$$.call(null, $coll$jscomp$36$$, this, $not_found$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_$jscomp$7$$, $new_meta$$) {
  return new $cljs$core$Symbol$$(this.$ns$, this.name, this.$str$, this.$_hash$, $new_meta$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto___h__8402__auto____$1$$ = this.$_hash$;
  return null != $h__8402__auto___h__8402__auto____$1$$ ? $h__8402__auto___h__8402__auto____$1$$ : this.$_hash$ = $h__8402__auto___h__8402__auto____$1$$ = $cljs$core$hash_combine$$($cljs$core$m3_hash_unencoded_chars$$(this.name), $cljs$core$hash_string$$(this.$ns$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$INamed$_name$arity$1$ = function() {
  return this.name;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INamed$_namespace$arity$1$ = function() {
  return this.$ns$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($o$jscomp$25$$, $writer$jscomp$4$$) {
  return $cljs$core$_write$$($writer$jscomp$4$$, this.$str$);
};
var $cljs$core$symbol$$ = function $cljs$core$symbol$$($var_args$jscomp$88$$) {
  for (var $args11144$$ = [], $len__9181__auto___11147$$ = arguments.length, $i__9182__auto___11148$$ = 0;;) {
    if ($i__9182__auto___11148$$ < $len__9181__auto___11147$$) {
      $args11144$$.push(arguments[$i__9182__auto___11148$$]), $i__9182__auto___11148$$ += 1;
    } else {
      break;
    }
  }
  switch($args11144$$.length) {
    case 1:
      return $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11144$$.length)].join(""));
  }
};
$cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$1$ = function($name$jscomp$79$$) {
  if ($name$jscomp$79$$ instanceof $cljs$core$Symbol$$) {
    return $name$jscomp$79$$;
  }
  var $idx$jscomp$1$$ = $name$jscomp$79$$.indexOf("/");
  return 1 > $idx$jscomp$1$$ ? $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$(null, $name$jscomp$79$$) : $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$($name$jscomp$79$$.substring(0, $idx$jscomp$1$$), $name$jscomp$79$$.substring($idx$jscomp$1$$ + 1, $name$jscomp$79$$.length));
};
$cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$ = function($ns$jscomp$3$$, $name$jscomp$80$$) {
  var $sym_str$$ = null != $ns$jscomp$3$$ ? [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$3$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("/"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$80$$)].join("") : $name$jscomp$80$$;
  return new $cljs$core$Symbol$$($ns$jscomp$3$$, $name$jscomp$80$$, $sym_str$$, null, null);
};
$cljs$core$symbol$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$seq$$($coll$jscomp$37$$) {
  if (null == $coll$jscomp$37$$) {
    return null;
  }
  if (null != $coll$jscomp$37$$ && ($coll$jscomp$37$$.$cljs$lang$protocol_mask$partition0$$ & 8388608 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$37$$.$cljs$core$ISeqable$$)) {
    return $coll$jscomp$37$$.$cljs$core$ISeqable$_seq$arity$1$(null);
  }
  if ($cljs$core$array_QMARK_$$($coll$jscomp$37$$) || "string" === typeof $coll$jscomp$37$$) {
    return 0 === $coll$jscomp$37$$.length ? null : new $cljs$core$IndexedSeq$$($coll$jscomp$37$$, 0, null);
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeqable$$, $coll$jscomp$37$$)) {
    return $cljs$core$_seq$$($coll$jscomp$37$$);
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$37$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" is not ISeqable")].join(""));
}
function $cljs$core$first$$($coll$jscomp$38_s$jscomp$28$$) {
  if (null == $coll$jscomp$38_s$jscomp$28$$) {
    return null;
  }
  if (null != $coll$jscomp$38_s$jscomp$28$$ && ($coll$jscomp$38_s$jscomp$28$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$38_s$jscomp$28$$.$cljs$core$ISeq$$)) {
    return $coll$jscomp$38_s$jscomp$28$$.$cljs$core$ISeq$_first$arity$1$(null);
  }
  $coll$jscomp$38_s$jscomp$28$$ = $cljs$core$seq$$($coll$jscomp$38_s$jscomp$28$$);
  return null == $coll$jscomp$38_s$jscomp$28$$ ? null : $cljs$core$_first$$($coll$jscomp$38_s$jscomp$28$$);
}
function $cljs$core$rest$$($coll$jscomp$39_s$jscomp$29$$) {
  return null != $coll$jscomp$39_s$jscomp$29$$ ? null != $coll$jscomp$39_s$jscomp$29$$ && ($coll$jscomp$39_s$jscomp$29$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$39_s$jscomp$29$$.$cljs$core$ISeq$$) ? $coll$jscomp$39_s$jscomp$29$$.$cljs$core$ISeq$_rest$arity$1$(null) : ($coll$jscomp$39_s$jscomp$29$$ = $cljs$core$seq$$($coll$jscomp$39_s$jscomp$29$$)) ? $cljs$core$_rest$$($coll$jscomp$39_s$jscomp$29$$) : $cljs$core$List$EMPTY$$ : $cljs$core$List$EMPTY$$;
}
function $cljs$core$next$$($coll$jscomp$40$$) {
  return null == $coll$jscomp$40$$ ? null : null != $coll$jscomp$40$$ && ($coll$jscomp$40$$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$40$$.$cljs$core$INext$$) ? $coll$jscomp$40$$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$seq$$($cljs$core$rest$$($coll$jscomp$40$$));
}
var $cljs$core$_EQ_$$ = function $cljs$core$_EQ_$$($var_args$jscomp$89$$) {
  for (var $args11211$$ = [], $len__9181__auto___11217$$ = arguments.length, $i__9182__auto___11218$$ = 0;;) {
    if ($i__9182__auto___11218$$ < $len__9181__auto___11217$$) {
      $args11211$$.push(arguments[$i__9182__auto___11218$$]), $i__9182__auto___11218$$ += 1;
    } else {
      break;
    }
  }
  switch($args11211$$.length) {
    case 1:
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args11211$$.slice(2), 0, null));
  }
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$1$ = function() {
  return !0;
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$102$$, $y$jscomp$61$$) {
  return null == $x$jscomp$102$$ ? null == $y$jscomp$61$$ : $x$jscomp$102$$ === $y$jscomp$61$$ || $cljs$core$_equiv$$($x$jscomp$102$$, $y$jscomp$61$$);
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__11221_x$jscomp$103$$, $G__11222_y$jscomp$62$$, $G__11223_more$$) {
  for (;;) {
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__11221_x$jscomp$103$$, $G__11222_y$jscomp$62$$)) {
      if ($cljs$core$next$$($G__11223_more$$)) {
        $G__11221_x$jscomp$103$$ = $G__11222_y$jscomp$62$$, $G__11222_y$jscomp$62$$ = $cljs$core$first$$($G__11223_more$$), $G__11223_more$$ = $cljs$core$next$$($G__11223_more$$);
      } else {
        return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__11222_y$jscomp$62$$, $cljs$core$first$$($G__11223_more$$));
      }
    } else {
      return !1;
    }
  }
};
$cljs$core$_EQ_$$.$cljs$lang$applyTo$ = function($G__11214_seq11212$$) {
  var $G__11213$$ = $cljs$core$first$$($G__11214_seq11212$$), $seq11212__$1_seq11212__$2$$ = $cljs$core$next$$($G__11214_seq11212$$);
  $G__11214_seq11212$$ = $cljs$core$first$$($seq11212__$1_seq11212__$2$$);
  $seq11212__$1_seq11212__$2$$ = $cljs$core$next$$($seq11212__$1_seq11212__$2$$);
  return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$variadic$($G__11213$$, $G__11214_seq11212$$, $seq11212__$1_seq11212__$2$$);
};
$cljs$core$_EQ_$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$ES6Iterator$$($s$jscomp$30$$) {
  this.$s$ = $s$jscomp$30$$;
}
$cljs$core$ES6Iterator$$.prototype.next = function() {
  if (null != this.$s$) {
    var $x$jscomp$104$$ = $cljs$core$first$$(this.$s$);
    this.$s$ = $cljs$core$next$$(this.$s$);
    return {value:$x$jscomp$104$$, done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$es6_iterator$$($coll$jscomp$41$$) {
  return new $cljs$core$ES6Iterator$$($cljs$core$seq$$($coll$jscomp$41$$));
}
function $cljs$core$mix_collection_hash$$($hash_basis$$, $count$jscomp$12$$) {
  var $h1__$1$jscomp$2_k1$jscomp$3$$ = $cljs$core$m3_mix_K1$$($hash_basis$$), $h1__$1$jscomp$2_k1$jscomp$3$$ = $cljs$core$m3_mix_H1$$(0, $h1__$1$jscomp$2_k1$jscomp$3$$);
  return $cljs$core$m3_fmix$$($h1__$1$jscomp$2_k1$jscomp$3$$, $count$jscomp$12$$);
}
function $cljs$core$hash_ordered_coll$$($G__11226_coll$jscomp$42_coll__$1$$) {
  var $G__11224_n$jscomp$37$$ = 0, $G__11225_hash_code$$ = 1;
  for ($G__11226_coll$jscomp$42_coll__$1$$ = $cljs$core$seq$$($G__11226_coll$jscomp$42_coll__$1$$);;) {
    if (null != $G__11226_coll$jscomp$42_coll__$1$$) {
      $G__11224_n$jscomp$37$$ += 1, $G__11225_hash_code$$ = $cljs$core$imul$$(31, $G__11225_hash_code$$) + $cljs$core$hash$$($cljs$core$first$$($G__11226_coll$jscomp$42_coll__$1$$)) | 0, $G__11226_coll$jscomp$42_coll__$1$$ = $cljs$core$next$$($G__11226_coll$jscomp$42_coll__$1$$);
    } else {
      return $cljs$core$mix_collection_hash$$($G__11225_hash_code$$, $G__11224_n$jscomp$37$$);
    }
  }
}
var $cljs$core$empty_ordered_hash$$ = $cljs$core$mix_collection_hash$$(1, 0);
function $cljs$core$hash_unordered_coll$$($G__11229_coll$jscomp$43_coll__$1$jscomp$1$$) {
  var $G__11227_n$jscomp$38$$ = 0, $G__11228_hash_code$jscomp$1$$ = 0;
  for ($G__11229_coll$jscomp$43_coll__$1$jscomp$1$$ = $cljs$core$seq$$($G__11229_coll$jscomp$43_coll__$1$jscomp$1$$);;) {
    if (null != $G__11229_coll$jscomp$43_coll__$1$jscomp$1$$) {
      $G__11227_n$jscomp$38$$ += 1, $G__11228_hash_code$jscomp$1$$ = $G__11228_hash_code$jscomp$1$$ + $cljs$core$hash$$($cljs$core$first$$($G__11229_coll$jscomp$43_coll__$1$jscomp$1$$)) | 0, $G__11229_coll$jscomp$43_coll__$1$jscomp$1$$ = $cljs$core$next$$($G__11229_coll$jscomp$43_coll__$1$jscomp$1$$);
    } else {
      return $cljs$core$mix_collection_hash$$($G__11228_hash_code$jscomp$1$$, $G__11227_n$jscomp$38$$);
    }
  }
}
var $cljs$core$empty_unordered_hash$$ = $cljs$core$mix_collection_hash$$(0, 0);
$cljs$core$ICounted$$["null"] = !0;
$cljs$core$_count$$["null"] = function() {
  return 0;
};
Date.prototype.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$jscomp$41$$, $other$jscomp$38$$) {
  return $other$jscomp$38$$ instanceof Date && this.valueOf() === $other$jscomp$38$$.valueOf();
};
$cljs$core$_equiv$$.number = function($x$jscomp$106$$, $o$jscomp$42$$) {
  return $x$jscomp$106$$ === $o$jscomp$42$$;
};
$cljs$core$Fn$$["function"] = !0;
$cljs$core$IMeta$$["function"] = !0;
$cljs$core$_meta$$["function"] = function() {
  return null;
};
$cljs$core$_hash$$._ = function($o$jscomp$43$$) {
  return $o$jscomp$43$$[$goog$UID_PROPERTY_$$] || ($o$jscomp$43$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
};
function $cljs$core$Reduced$$($val$jscomp$36$$) {
  this.$val$ = $val$jscomp$36$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32768;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$Reduced$$.prototype.$cljs$core$IDeref$_deref$arity$1$ = function() {
  return this.$val$;
};
function $cljs$core$reduced_QMARK_$$($r$jscomp$15$$) {
  return $r$jscomp$15$$ instanceof $cljs$core$Reduced$$;
}
function $cljs$core$deref$$($o$jscomp$45$$) {
  return $cljs$core$_deref$$($o$jscomp$45$$);
}
function $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($cicoll$$, $f$jscomp$91$$) {
  var $cnt$$ = $cljs$core$_count$$($cicoll$$);
  if (0 === $cnt$$) {
    return $f$jscomp$91$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$91$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$91$$.call(null);
  }
  for (var $G__11237$jscomp$inline_125_nval_val$jscomp$38$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($cicoll$$, 0), $G__11248_n$jscomp$39$$ = 1;;) {
    if ($G__11248_n$jscomp$39$$ < $cnt$$) {
      var $G__11238$jscomp$inline_126$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($cicoll$$, $G__11248_n$jscomp$39$$), $G__11237$jscomp$inline_125_nval_val$jscomp$38$$ = $f$jscomp$91$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$91$$.$cljs$core$IFn$_invoke$arity$2$($G__11237$jscomp$inline_125_nval_val$jscomp$38$$, $G__11238$jscomp$inline_126$$) : $f$jscomp$91$$.call(null, $G__11237$jscomp$inline_125_nval_val$jscomp$38$$, $G__11238$jscomp$inline_126$$);
      if ($cljs$core$reduced_QMARK_$$($G__11237$jscomp$inline_125_nval_val$jscomp$38$$)) {
        return $cljs$core$_deref$$($G__11237$jscomp$inline_125_nval_val$jscomp$38$$);
      }
      $G__11248_n$jscomp$39$$ += 1;
    } else {
      return $G__11237$jscomp$inline_125_nval_val$jscomp$38$$;
    }
  }
}
function $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cicoll$jscomp$1$$, $f$jscomp$92$$, $G__11250_n$jscomp$40_val$jscomp$39$$) {
  var $cnt$jscomp$1$$ = $cljs$core$_count$$($cicoll$jscomp$1$$), $G__11239$jscomp$inline_128_nval$jscomp$1_val__$1$$ = $G__11250_n$jscomp$40_val$jscomp$39$$;
  for ($G__11250_n$jscomp$40_val$jscomp$39$$ = 0;;) {
    if ($G__11250_n$jscomp$40_val$jscomp$39$$ < $cnt$jscomp$1$$) {
      var $G__11240$jscomp$inline_129$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($cicoll$jscomp$1$$, $G__11250_n$jscomp$40_val$jscomp$39$$), $G__11239$jscomp$inline_128_nval$jscomp$1_val__$1$$ = $f$jscomp$92$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$92$$.$cljs$core$IFn$_invoke$arity$2$($G__11239$jscomp$inline_128_nval$jscomp$1_val__$1$$, $G__11240$jscomp$inline_129$$) : $f$jscomp$92$$.call(null, $G__11239$jscomp$inline_128_nval$jscomp$1_val__$1$$, $G__11240$jscomp$inline_129$$);
      if ($cljs$core$reduced_QMARK_$$($G__11239$jscomp$inline_128_nval$jscomp$1_val__$1$$)) {
        return $cljs$core$_deref$$($G__11239$jscomp$inline_128_nval$jscomp$1_val__$1$$);
      }
      $G__11250_n$jscomp$40_val$jscomp$39$$ += 1;
    } else {
      return $G__11239$jscomp$inline_128_nval$jscomp$1_val__$1$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($arr$jscomp$70$$, $f$jscomp$94$$) {
  var $cnt$jscomp$3$$ = $arr$jscomp$70$$.length;
  if (0 === $arr$jscomp$70$$.length) {
    return $f$jscomp$94$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$94$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$94$$.call(null);
  }
  for (var $G__11256$jscomp$inline_131_nval$jscomp$3_val$jscomp$41$$ = $arr$jscomp$70$$[0], $G__11267_n$jscomp$42$$ = 1;;) {
    if ($G__11267_n$jscomp$42$$ < $cnt$jscomp$3$$) {
      var $G__11257$jscomp$inline_132$$ = $arr$jscomp$70$$[$G__11267_n$jscomp$42$$], $G__11256$jscomp$inline_131_nval$jscomp$3_val$jscomp$41$$ = $f$jscomp$94$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$94$$.$cljs$core$IFn$_invoke$arity$2$($G__11256$jscomp$inline_131_nval$jscomp$3_val$jscomp$41$$, $G__11257$jscomp$inline_132$$) : $f$jscomp$94$$.call(null, $G__11256$jscomp$inline_131_nval$jscomp$3_val$jscomp$41$$, $G__11257$jscomp$inline_132$$);
      if ($cljs$core$reduced_QMARK_$$($G__11256$jscomp$inline_131_nval$jscomp$3_val$jscomp$41$$)) {
        return $cljs$core$_deref$$($G__11256$jscomp$inline_131_nval$jscomp$3_val$jscomp$41$$);
      }
      $G__11267_n$jscomp$42$$ += 1;
    } else {
      return $G__11256$jscomp$inline_131_nval$jscomp$3_val$jscomp$41$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($arr$jscomp$71$$, $f$jscomp$95$$, $G__11269_n$jscomp$43_val$jscomp$42$$) {
  var $cnt$jscomp$4$$ = $arr$jscomp$71$$.length, $G__11258$jscomp$inline_134_nval$jscomp$4_val__$1$jscomp$2$$ = $G__11269_n$jscomp$43_val$jscomp$42$$;
  for ($G__11269_n$jscomp$43_val$jscomp$42$$ = 0;;) {
    if ($G__11269_n$jscomp$43_val$jscomp$42$$ < $cnt$jscomp$4$$) {
      var $G__11259$jscomp$inline_135$$ = $arr$jscomp$71$$[$G__11269_n$jscomp$43_val$jscomp$42$$], $G__11258$jscomp$inline_134_nval$jscomp$4_val__$1$jscomp$2$$ = $f$jscomp$95$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$95$$.$cljs$core$IFn$_invoke$arity$2$($G__11258$jscomp$inline_134_nval$jscomp$4_val__$1$jscomp$2$$, $G__11259$jscomp$inline_135$$) : $f$jscomp$95$$.call(null, $G__11258$jscomp$inline_134_nval$jscomp$4_val__$1$jscomp$2$$, $G__11259$jscomp$inline_135$$);
      if ($cljs$core$reduced_QMARK_$$($G__11258$jscomp$inline_134_nval$jscomp$4_val__$1$jscomp$2$$)) {
        return $cljs$core$_deref$$($G__11258$jscomp$inline_134_nval$jscomp$4_val__$1$jscomp$2$$);
      }
      $G__11269_n$jscomp$43_val$jscomp$42$$ += 1;
    } else {
      return $G__11258$jscomp$inline_134_nval$jscomp$4_val__$1$jscomp$2$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$($arr$jscomp$72$$, $f$jscomp$96$$, $G__11260$jscomp$inline_137_nval$jscomp$5_val$jscomp$43_val__$1$jscomp$3$$, $G__11271_idx$jscomp$3_n$jscomp$44$$) {
  for (var $cnt$jscomp$5$$ = $arr$jscomp$72$$.length;;) {
    if ($G__11271_idx$jscomp$3_n$jscomp$44$$ < $cnt$jscomp$5$$) {
      var $G__11261$jscomp$inline_138$$ = $arr$jscomp$72$$[$G__11271_idx$jscomp$3_n$jscomp$44$$];
      $G__11260$jscomp$inline_137_nval$jscomp$5_val$jscomp$43_val__$1$jscomp$3$$ = $f$jscomp$96$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$96$$.$cljs$core$IFn$_invoke$arity$2$($G__11260$jscomp$inline_137_nval$jscomp$5_val$jscomp$43_val__$1$jscomp$3$$, $G__11261$jscomp$inline_138$$) : $f$jscomp$96$$.call(null, $G__11260$jscomp$inline_137_nval$jscomp$5_val$jscomp$43_val__$1$jscomp$3$$, $G__11261$jscomp$inline_138$$);
      if ($cljs$core$reduced_QMARK_$$($G__11260$jscomp$inline_137_nval$jscomp$5_val$jscomp$43_val__$1$jscomp$3$$)) {
        return $cljs$core$_deref$$($G__11260$jscomp$inline_137_nval$jscomp$5_val$jscomp$43_val__$1$jscomp$3$$);
      }
      $G__11271_idx$jscomp$3_n$jscomp$44$$ += 1;
    } else {
      return $G__11260$jscomp$inline_137_nval$jscomp$5_val$jscomp$43_val__$1$jscomp$3$$;
    }
  }
}
function $cljs$core$counted_QMARK_$$($x$jscomp$111$$) {
  return null != $x$jscomp$111$$ ? $x$jscomp$111$$.$cljs$lang$protocol_mask$partition0$$ & 2 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$111$$.$cljs$core$ICounted$$ ? !0 : $x$jscomp$111$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICounted$$, $x$jscomp$111$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICounted$$, $x$jscomp$111$$);
}
function $cljs$core$indexed_QMARK_$$($x$jscomp$112$$) {
  return null != $x$jscomp$112$$ ? $x$jscomp$112$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$112$$.$cljs$core$IIndexed$$ ? !0 : $x$jscomp$112$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $x$jscomp$112$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $x$jscomp$112$$);
}
function $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$45$$, $x$jscomp$114$$, $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$) {
  var $len$jscomp$12$$ = $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$45$$) : $cljs$core$count$$.call(null, $coll$jscomp$45$$);
  if ($JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$ >= $len$jscomp$12$$) {
    return -1;
  }
  !(0 < $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$) && 0 > $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$ && ($JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$ += $len$jscomp$12$$, $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$ = 
  0 > $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$ ? 0 : $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$);
  for (;;) {
    if ($JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$ < $len$jscomp$12$$) {
      if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$ ? $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$45$$, $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$) : $cljs$core$nth$$.call(null, $coll$jscomp$45$$, $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$), $x$jscomp$114$$)) {
        return $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$;
      }
      $JSCompiler_temp$jscomp$10_JSCompiler_temp$jscomp$9_idx$jscomp$4_start$jscomp$12_y__8299__auto__$jscomp$inline_140$$ += 1;
    } else {
      return -1;
    }
  }
}
function $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$47$$, $x$jscomp$116$$, $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$) {
  var $len$jscomp$13_x__8305__auto__$jscomp$inline_142$$ = $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$47$$) : $cljs$core$count$$.call(null, $coll$jscomp$47$$);
  if (0 === $len$jscomp$13_x__8305__auto__$jscomp$inline_142$$) {
    return -1;
  }
  0 < $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$ ? (--$len$jscomp$13_x__8305__auto__$jscomp$inline_142$$, $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$ = $len$jscomp$13_x__8305__auto__$jscomp$inline_142$$ < $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$ ? $len$jscomp$13_x__8305__auto__$jscomp$inline_142$$ : $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$) : $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$ = 0 > $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$ ? 
  $len$jscomp$13_x__8305__auto__$jscomp$inline_142$$ + $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$ : $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$;
  for (;;) {
    if (0 <= $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$) {
      if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$ ? $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$47$$, $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$) : $cljs$core$nth$$.call(null, $coll$jscomp$47$$, $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$), $x$jscomp$116$$)) {
        return $JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$;
      }
      --$JSCompiler_temp$jscomp$11_idx$jscomp$5_start$jscomp$13$$;
    } else {
      return -1;
    }
  }
}
function $cljs$core$IndexedSeqIterator$$($arr$jscomp$73$$, $i$jscomp$120$$) {
  this.$arr$ = $arr$jscomp$73$$;
  this.$i$ = $i$jscomp$120$$;
}
$cljs$core$IndexedSeqIterator$$.prototype.$hasNext$ = function() {
  return this.$i$ < this.$arr$.length;
};
$cljs$core$IndexedSeqIterator$$.prototype.next = function() {
  var $ret$jscomp$1$$ = this.$arr$[this.$i$];
  this.$i$ += 1;
  return $ret$jscomp$1$$;
};
function $cljs$core$IndexedSeq$$($arr$jscomp$75$$, $i$jscomp$122$$, $meta$jscomp$1$$) {
  this.$arr$ = $arr$jscomp$75$$;
  this.$i$ = $i$jscomp$122$$;
  this.$meta$ = $meta$jscomp$1$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 166592766;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$IndexedSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$40$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$40$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__11292$$ = null, $G__11292$$ = function($G__11292$$, $start$jscomp$15$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11292$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11292$$, $start$jscomp$15$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11292$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__11292$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11292$$, 0);
  };
  $G__11292$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11292$$, $start$jscomp$14$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11292$$, $start$jscomp$14$$);
  };
  return $G__11292$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__11293__1$$($G__11293__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11293__1$$, $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$count$$.call(null, this));
  }
  var $G__11293$$ = null, $G__11293$$ = function($G__11293$$, $start$jscomp$17$$) {
    switch(arguments.length) {
      case 1:
        return $G__11293__1$$.call(this, $G__11293$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11293$$, $start$jscomp$17$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11293$$.$cljs$core$IFn$_invoke$arity$1$ = $G__11293__1$$;
  $G__11293$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11293__1$$, $G__11293$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11293__1$$, $G__11293$$);
  };
  return $G__11293$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$53$$, $n$jscomp$45$$) {
  var $i__$1$$ = $n$jscomp$45$$ + this.$i$;
  if (0 <= $i__$1$$ && $i__$1$$ < this.$arr$.length) {
    return this.$arr$[$i__$1$$];
  }
  throw Error("Index out of bounds");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$54_i__$1$jscomp$1$$, $n$jscomp$46$$, $not_found$jscomp$5$$) {
  $coll$jscomp$54_i__$1$jscomp$1$$ = $n$jscomp$46$$ + this.$i$;
  return 0 <= $coll$jscomp$54_i__$1$jscomp$1$$ && $coll$jscomp$54_i__$1$jscomp$1$$ < this.$arr$.length ? this.$arr$[$coll$jscomp$54_i__$1$jscomp$1$$] : $not_found$jscomp$5$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$IndexedSeqIterator$$(this.$arr$, this.$i$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return this.$i$ + 1 < this.$arr$.length ? new $cljs$core$IndexedSeq$$(this.$arr$, this.$i$ + 1, null) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  var $y__8299__auto__$jscomp$1$$ = this.$arr$.length - this.$i$;
  return 0 > $y__8299__auto__$jscomp$1$$ ? 0 : $y__8299__auto__$jscomp$1$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$59$$, $other$jscomp$41$$) {
  return $cljs$core$equiv_sequential$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$equiv_sequential$$.$cljs$core$IFn$_invoke$arity$2$(this, $other$jscomp$41$$) : $cljs$core$equiv_sequential$$.call(null, this, $other$jscomp$41$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$61$$, $f$jscomp$97$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$jscomp$97$$, this.$arr$[this.$i$], this.$i$ + 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$62$$, $f$jscomp$98$$, $start$jscomp$18$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$jscomp$98$$, $start$jscomp$18$$, this.$i$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$arr$[this.$i$];
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return this.$i$ + 1 < this.$arr$.length ? new $cljs$core$IndexedSeq$$(this.$arr$, this.$i$ + 1, null) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this.$i$ < this.$arr$.length ? this : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$63$$, $new_meta$jscomp$2$$) {
  return new $cljs$core$IndexedSeq$$(this.$arr$, this.$i$, $new_meta$jscomp$2$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$64$$, $o$jscomp$46$$) {
  return $cljs$core$cons$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$cons$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$46$$, this) : $cljs$core$cons$$.call(null, $o$jscomp$46$$, this);
};
$cljs$core$IndexedSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$($prim$jscomp$1$$, $i$jscomp$124$$) {
  return $i$jscomp$124$$ < $prim$jscomp$1$$.length ? new $cljs$core$IndexedSeq$$($prim$jscomp$1$$, $i$jscomp$124$$, null) : null;
}
function $cljs$core$array_seq$$($var_args$jscomp$95$$) {
  for (var $args11301$$ = [], $len__9181__auto___11304$$ = arguments.length, $i__9182__auto___11305$$ = 0;;) {
    if ($i__9182__auto___11305$$ < $len__9181__auto___11304$$) {
      $args11301$$.push(arguments[$i__9182__auto___11305$$]), $i__9182__auto___11305$$ += 1;
    } else {
      break;
    }
  }
  switch($args11301$$.length) {
    case 1:
      return $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], 0);
    case 2:
      return $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11301$$.length)].join(""));
  }
}
function $cljs$core$second$$($coll$jscomp$81$$) {
  return $cljs$core$first$$($cljs$core$next$$($coll$jscomp$81$$));
}
$cljs$core$_equiv$$._ = function($x$jscomp$129$$, $o$jscomp$48$$) {
  return $x$jscomp$129$$ === $o$jscomp$48$$;
};
var $cljs$core$conj$$ = function $cljs$core$conj$$($var_args$jscomp$96$$) {
  for (var $args11311$$ = [], $len__9181__auto___11317$$ = arguments.length, $i__9182__auto___11318$$ = 0;;) {
    if ($i__9182__auto___11318$$ < $len__9181__auto___11317$$) {
      $args11311$$.push(arguments[$i__9182__auto___11318$$]), $i__9182__auto___11318$$ += 1;
    } else {
      break;
    }
  }
  switch($args11311$$.length) {
    case 0:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args11311$$.slice(2), 0, null));
  }
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return $cljs$core$PersistentVector$EMPTY$$;
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$jscomp$86$$) {
  return $coll$jscomp$86$$;
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$87$$, $x$jscomp$130$$) {
  return null != $coll$jscomp$87$$ ? $cljs$core$_conj$$($coll$jscomp$87$$, $x$jscomp$130$$) : $cljs$core$_conj$$($cljs$core$List$EMPTY$$, $x$jscomp$130$$);
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__11321_coll$jscomp$88$$, $G__11322_x$jscomp$131$$, $G__11323_xs$jscomp$1$$) {
  for (;;) {
    if ($cljs$core$truth_$$($G__11323_xs$jscomp$1$$)) {
      $G__11321_coll$jscomp$88$$ = $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__11321_coll$jscomp$88$$, $G__11322_x$jscomp$131$$), $G__11322_x$jscomp$131$$ = $cljs$core$first$$($G__11323_xs$jscomp$1$$), $G__11323_xs$jscomp$1$$ = $cljs$core$next$$($G__11323_xs$jscomp$1$$);
    } else {
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__11321_coll$jscomp$88$$, $G__11322_x$jscomp$131$$);
    }
  }
};
$cljs$core$conj$$.$cljs$lang$applyTo$ = function($G__11314_seq11312$$) {
  var $G__11313$$ = $cljs$core$first$$($G__11314_seq11312$$), $seq11312__$1_seq11312__$2$$ = $cljs$core$next$$($G__11314_seq11312$$);
  $G__11314_seq11312$$ = $cljs$core$first$$($seq11312__$1_seq11312__$2$$);
  $seq11312__$1_seq11312__$2$$ = $cljs$core$next$$($seq11312__$1_seq11312__$2$$);
  return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$($G__11313$$, $G__11314_seq11312$$, $seq11312__$1_seq11312__$2$$);
};
$cljs$core$conj$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$count$$($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$) {
  if (null != $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$) {
    if (null != $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ && ($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$.$cljs$lang$protocol_mask$partition0$$ & 2 || $cljs$core$PROTOCOL_SENTINEL$$ === $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$.$cljs$core$ICounted$$)) {
      $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ = $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$.$cljs$core$ICounted$_count$arity$1$(null);
    } else {
      if ($cljs$core$array_QMARK_$$($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$)) {
        $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ = $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$.length;
      } else {
        if ("string" === typeof $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$) {
          $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ = $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$.length;
        } else {
          if (null != $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ && ($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$.$cljs$lang$protocol_mask$partition0$$ & 8388608 || $cljs$core$PROTOCOL_SENTINEL$$ === 
          $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$.$cljs$core$ISeqable$$)) {
            a: {
              $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ = $cljs$core$seq$$($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$);
              for (var $G__11325$jscomp$inline_148_acc$jscomp$inline_146$$ = 0;;) {
                if ($cljs$core$counted_QMARK_$$($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$)) {
                  $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ = $G__11325$jscomp$inline_148_acc$jscomp$inline_146$$ + $cljs$core$_count$$($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$);
                  break a;
                }
                $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ = $cljs$core$next$$($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$);
                $G__11325$jscomp$inline_148_acc$jscomp$inline_146$$ += 1;
              }
            }
          } else {
            $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ = $cljs$core$_count$$($G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$);
          }
        }
      }
    }
  } else {
    $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$ = 0;
  }
  return $G__11324$jscomp$inline_147_JSCompiler_temp$jscomp$12_JSCompiler_temp$jscomp$13_JSCompiler_temp$jscomp$14_JSCompiler_temp$jscomp$15_JSCompiler_temp$jscomp$16_coll$jscomp$91_s$jscomp$inline_145$$;
}
function $cljs$core$linear_traversal_nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__11339_coll$jscomp$93$$, $G__11340_n$jscomp$48$$, $G__11341_not_found$jscomp$6$$) {
  for (;;) {
    if (null == $G__11339_coll$jscomp$93$$) {
      return $G__11341_not_found$jscomp$6$$;
    }
    if (0 === $G__11340_n$jscomp$48$$) {
      return $cljs$core$seq$$($G__11339_coll$jscomp$93$$) ? $cljs$core$first$$($G__11339_coll$jscomp$93$$) : $G__11341_not_found$jscomp$6$$;
    }
    if ($cljs$core$indexed_QMARK_$$($G__11339_coll$jscomp$93$$)) {
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$($G__11339_coll$jscomp$93$$, $G__11340_n$jscomp$48$$, $G__11341_not_found$jscomp$6$$);
    }
    if ($cljs$core$seq$$($G__11339_coll$jscomp$93$$)) {
      $G__11339_coll$jscomp$93$$ = $cljs$core$next$$($G__11339_coll$jscomp$93$$), --$G__11340_n$jscomp$48$$;
    } else {
      return $G__11341_not_found$jscomp$6$$;
    }
  }
}
function $cljs$core$nth$$($var_args$jscomp$98$$) {
  for (var $args11342$$ = [], $len__9181__auto___11349$$ = arguments.length, $i__9182__auto___11350$$ = 0;;) {
    if ($i__9182__auto___11350$$ < $len__9181__auto___11349$$) {
      $args11342$$.push(arguments[$i__9182__auto___11350$$]), $i__9182__auto___11350$$ += 1;
    } else {
      break;
    }
  }
  switch($args11342$$.length) {
    case 2:
      return $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11342$$.length)].join(""));
  }
}
function $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$94$$, $n$jscomp$49$$) {
  if ("number" !== typeof $n$jscomp$49$$) {
    throw Error("Index argument to nth must be a number");
  }
  if (null == $coll$jscomp$94$$) {
    return $coll$jscomp$94$$;
  }
  if (null != $coll$jscomp$94$$ && ($coll$jscomp$94$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$94$$.$cljs$core$IIndexed$$)) {
    return $coll$jscomp$94$$.$cljs$core$IIndexed$_nth$arity$2$(null, $n$jscomp$49$$);
  }
  if ($cljs$core$array_QMARK_$$($coll$jscomp$94$$)) {
    if (0 <= $n$jscomp$49$$ && $n$jscomp$49$$ < $coll$jscomp$94$$.length) {
      return $coll$jscomp$94$$[$n$jscomp$49$$];
    }
    throw Error("Index out of bounds");
  }
  if ("string" === typeof $coll$jscomp$94$$) {
    if (0 <= $n$jscomp$49$$ && $n$jscomp$49$$ < $coll$jscomp$94$$.length) {
      return $coll$jscomp$94$$.charAt($n$jscomp$49$$);
    }
    throw Error("Index out of bounds");
  }
  if (null != $coll$jscomp$94$$ && ($coll$jscomp$94$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$94$$.$cljs$core$ISeq$$)) {
    a: {
      var $G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$ = $coll$jscomp$94$$;
      for (var $G__11338$jscomp$inline_153_n$jscomp$inline_151$$ = $n$jscomp$49$$;;) {
        if (null == $G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$) {
          throw Error("Index out of bounds");
        }
        if (0 === $G__11338$jscomp$inline_153_n$jscomp$inline_151$$) {
          if ($cljs$core$seq$$($G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$)) {
            $G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$ = $cljs$core$first$$($G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if ($cljs$core$indexed_QMARK_$$($G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$)) {
          $G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$, $G__11338$jscomp$inline_153_n$jscomp$inline_151$$);
          break a;
        }
        if ($cljs$core$seq$$($G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$)) {
          $G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$ = $cljs$core$next$$($G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$), --$G__11338$jscomp$inline_153_n$jscomp$inline_151$$;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return $G__11337$jscomp$inline_152_JSCompiler_inline_result$jscomp$17_coll$jscomp$inline_150$$;
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $coll$jscomp$94$$)) {
    return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$94$$, $n$jscomp$49$$);
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("nth not supported on this type "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$type__GT_str$$(null == $coll$jscomp$94$$ ? null : $coll$jscomp$94$$.constructor))].join(""));
}
function $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$95$$, $n$jscomp$50$$, $not_found$jscomp$7$$) {
  if ("number" !== typeof $n$jscomp$50$$) {
    throw Error("Index argument to nth must be a number.");
  }
  if (null == $coll$jscomp$95$$) {
    return $not_found$jscomp$7$$;
  }
  if (null != $coll$jscomp$95$$ && ($coll$jscomp$95$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$95$$.$cljs$core$IIndexed$$)) {
    return $coll$jscomp$95$$.$cljs$core$IIndexed$_nth$arity$3$(null, $n$jscomp$50$$, $not_found$jscomp$7$$);
  }
  if ($cljs$core$array_QMARK_$$($coll$jscomp$95$$)) {
    return 0 <= $n$jscomp$50$$ && $n$jscomp$50$$ < $coll$jscomp$95$$.length ? $coll$jscomp$95$$[$n$jscomp$50$$] : $not_found$jscomp$7$$;
  }
  if ("string" === typeof $coll$jscomp$95$$) {
    return 0 <= $n$jscomp$50$$ && $n$jscomp$50$$ < $coll$jscomp$95$$.length ? $coll$jscomp$95$$.charAt($n$jscomp$50$$) : $not_found$jscomp$7$$;
  }
  if (null != $coll$jscomp$95$$ && ($coll$jscomp$95$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$95$$.$cljs$core$ISeq$$)) {
    return $cljs$core$linear_traversal_nth$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$95$$, $n$jscomp$50$$, $not_found$jscomp$7$$);
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $coll$jscomp$95$$)) {
    return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$95$$, $n$jscomp$50$$);
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("nth not supported on this type "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$type__GT_str$$(null == $coll$jscomp$95$$ ? null : $coll$jscomp$95$$.constructor))].join(""));
}
var $cljs$core$get$$ = function $cljs$core$get$$($var_args$jscomp$99$$) {
  for (var $args11355$$ = [], $len__9181__auto___11360$$ = arguments.length, $i__9182__auto___11361$$ = 0;;) {
    if ($i__9182__auto___11361$$ < $len__9181__auto___11360$$) {
      $args11355$$.push(arguments[$i__9182__auto___11361$$]), $i__9182__auto___11361$$ += 1;
    } else {
      break;
    }
  }
  switch($args11355$$.length) {
    case 2:
      return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11355$$.length)].join(""));
  }
};
$cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$ = function($o$jscomp$49$$, $k$jscomp$44$$) {
  return null == $o$jscomp$49$$ ? null : null != $o$jscomp$49$$ && ($o$jscomp$49$$.$cljs$lang$protocol_mask$partition0$$ & 256 || $cljs$core$PROTOCOL_SENTINEL$$ === $o$jscomp$49$$.$cljs$core$ILookup$$) ? $o$jscomp$49$$.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$44$$) : $cljs$core$array_QMARK_$$($o$jscomp$49$$) ? null != $k$jscomp$44$$ && $k$jscomp$44$$ < $o$jscomp$49$$.length ? $o$jscomp$49$$[$k$jscomp$44$$ | 0] : null : "string" === typeof $o$jscomp$49$$ ? null != $k$jscomp$44$$ && $k$jscomp$44$$ < 
  $o$jscomp$49$$.length ? $o$jscomp$49$$.charAt($k$jscomp$44$$ | 0) : null : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ILookup$$, $o$jscomp$49$$) ? $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$49$$, $k$jscomp$44$$) : null;
};
$cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$ = function($o$jscomp$50$$, $k$jscomp$45$$, $not_found$jscomp$8$$) {
  return null != $o$jscomp$50$$ ? null != $o$jscomp$50$$ && ($o$jscomp$50$$.$cljs$lang$protocol_mask$partition0$$ & 256 || $cljs$core$PROTOCOL_SENTINEL$$ === $o$jscomp$50$$.$cljs$core$ILookup$$) ? $o$jscomp$50$$.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$45$$, $not_found$jscomp$8$$) : $cljs$core$array_QMARK_$$($o$jscomp$50$$) ? null != $k$jscomp$45$$ && 0 <= $k$jscomp$45$$ && $k$jscomp$45$$ < $o$jscomp$50$$.length ? $o$jscomp$50$$[$k$jscomp$45$$ | 0] : $not_found$jscomp$8$$ : "string" === 
  typeof $o$jscomp$50$$ ? null != $k$jscomp$45$$ && 0 <= $k$jscomp$45$$ && $k$jscomp$45$$ < $o$jscomp$50$$.length ? $o$jscomp$50$$.charAt($k$jscomp$45$$ | 0) : $not_found$jscomp$8$$ : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ILookup$$, $o$jscomp$50$$) ? $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$50$$, $k$jscomp$45$$, $not_found$jscomp$8$$) : $not_found$jscomp$8$$ : $not_found$jscomp$8$$;
};
$cljs$core$get$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$assoc$$ = function $cljs$core$assoc$$($var_args$jscomp$100$$) {
  for (var $args11364$$ = [], $len__9181__auto___11371$$ = arguments.length, $i__9182__auto___11372$$ = 0;;) {
    if ($i__9182__auto___11372$$ < $len__9181__auto___11371$$) {
      $args11364$$.push(arguments[$i__9182__auto___11372$$]), $i__9182__auto___11372$$ += 1;
    } else {
      break;
    }
  }
  switch($args11364$$.length) {
    case 3:
      return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], new $cljs$core$IndexedSeq$$($args11364$$.slice(3), 0, null));
  }
};
$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$ = function($coll$jscomp$97$$, $k$jscomp$46$$, $v$jscomp$6$$) {
  return null != $coll$jscomp$97$$ ? $cljs$core$_assoc$$($coll$jscomp$97$$, $k$jscomp$46$$, $v$jscomp$6$$) : $cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$k$jscomp$46$$, $v$jscomp$6$$]);
};
$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__11375_coll$jscomp$98_ret$jscomp$2$$, $G__11376_k$jscomp$47$$, $G__11377_v$jscomp$7$$, $G__11378_kvs$$) {
  for (;;) {
    if ($G__11375_coll$jscomp$98_ret$jscomp$2$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__11375_coll$jscomp$98_ret$jscomp$2$$, $G__11376_k$jscomp$47$$, $G__11377_v$jscomp$7$$), $cljs$core$truth_$$($G__11378_kvs$$)) {
      $G__11376_k$jscomp$47$$ = $cljs$core$first$$($G__11378_kvs$$), $G__11377_v$jscomp$7$$ = $cljs$core$second$$($G__11378_kvs$$), $G__11378_kvs$$ = $cljs$core$next$$($cljs$core$next$$($G__11378_kvs$$));
    } else {
      return $G__11375_coll$jscomp$98_ret$jscomp$2$$;
    }
  }
};
$cljs$core$assoc$$.$cljs$lang$applyTo$ = function($G__11367_seq11365$$) {
  var $G__11366$$ = $cljs$core$first$$($G__11367_seq11365$$), $G__11368_seq11365__$1$$ = $cljs$core$next$$($G__11367_seq11365$$);
  $G__11367_seq11365$$ = $cljs$core$first$$($G__11368_seq11365__$1$$);
  var $seq11365__$2_seq11365__$3$$ = $cljs$core$next$$($G__11368_seq11365__$1$$), $G__11368_seq11365__$1$$ = $cljs$core$first$$($seq11365__$2_seq11365__$3$$), $seq11365__$2_seq11365__$3$$ = $cljs$core$next$$($seq11365__$2_seq11365__$3$$);
  return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($G__11366$$, $G__11367_seq11365$$, $G__11368_seq11365__$1$$, $seq11365__$2_seq11365__$3$$);
};
$cljs$core$assoc$$.$cljs$lang$maxFixedArity$ = 3;
function $cljs$core$fn_QMARK_$$($f$jscomp$101$$) {
  var $or__7960__auto__$$ = $goog$isFunction$$($f$jscomp$101$$);
  return $or__7960__auto__$$ ? $or__7960__auto__$$ : null != $f$jscomp$101$$ ? $cljs$core$PROTOCOL_SENTINEL$$ === $f$jscomp$101$$.$cljs$core$Fn$$ ? !0 : $f$jscomp$101$$.$cljs$lang$protocol_mask$partition$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$Fn$$, $f$jscomp$101$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$Fn$$, $f$jscomp$101$$);
}
function $cljs$core$MetaFn$$($afn$$, $meta$jscomp$5$$) {
  this.$afn$ = $afn$$;
  this.$meta$ = $meta$jscomp$5$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 393217;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$MetaFn$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_$jscomp$75$$, $new_meta$jscomp$4$$) {
  return new $cljs$core$MetaFn$$(this.$afn$, $new_meta$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$Fn$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$JSCompiler_prototypeAlias$$.call = function() {
  function $G__11397__22$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$, $G__11397$$, $G__11397__2$$) {
    $G__11397__22$$ = this;
    return $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$ ? $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$($G__11397__22$$.$afn$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$, $G__11397$$, $G__11397__2$$) : $cljs$core$apply$$.call(null, 
    $G__11397__22$$.$afn$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$, $G__11397$$, $G__11397__2$$);
  }
  function $G__11397__21$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$, $G__11397$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$20$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$20$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$, $G__11397$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, 
    $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$, $G__11397$$);
  }
  function $G__11397__20$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$19$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$19$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, 
    $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$, $G__11397__3$$);
  }
  function $G__11397__19$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$18$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$18$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, 
    $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$, $G__11397__4$$);
  }
  function $G__11397__18$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$17$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$17$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, 
    $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$, $G__11397__5$$);
  }
  function $G__11397__17$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$16$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$16$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, 
    $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$, $G__11397__6$$);
  }
  function $G__11397__16$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$15$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$15$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, 
    $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$, $G__11397__7$$);
  }
  function $G__11397__15$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$14$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$14$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, 
    $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$, $G__11397__8$$);
  }
  function $G__11397__14$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$13$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$13$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, 
    $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$, $G__11397__9$$);
  }
  function $G__11397__13$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$12$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$12$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$, $G__11397__10$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, 
    $G__11397__12$$, $G__11397__11$$, $G__11397__10$$);
  }
  function $G__11397__12$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$11$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$11$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, $G__11397__11$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$, 
    $G__11397__11$$);
  }
  function $G__11397__11$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$10$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$10$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$, $G__11397__12$$);
  }
  function $G__11397__10$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$9$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$9$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$, $G__11397__13$$);
  }
  function $G__11397__9$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$8$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$8$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$, $G__11397__14$$);
  }
  function $G__11397__8$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$7$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$7$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$, $G__11397__15$$);
  }
  function $G__11397__7$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$6$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$6$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$, $G__11397__16$$);
  }
  function $G__11397__6$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$5$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$5$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$, $G__11397__17$$);
  }
  function $G__11397__5$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$4$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$4$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$, $G__11397__18$$);
  }
  function $G__11397__4$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$3$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$3$($G__11397__21$$, $G__11397__20$$, $G__11397__19$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$, $G__11397__19$$);
  }
  function $G__11397__3$$($G__11397__22$$, $G__11397__21$$, $G__11397__20$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$2$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$2$($G__11397__21$$, $G__11397__20$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$, $G__11397__20$$);
  }
  function $G__11397__2$$($G__11397__22$$, $G__11397__21$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$1$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$1$($G__11397__21$$) : $G__11397__22$$.$afn$.call(null, $G__11397__21$$);
  }
  function $G__11397__1$$($G__11397__22$$) {
    $G__11397__22$$ = this;
    return $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$0$ ? $G__11397__22$$.$afn$.$cljs$core$IFn$_invoke$arity$0$() : $G__11397__22$$.$afn$.call(null);
  }
  var $G__11397$$ = null, $G__11397$$ = function($self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$, $G__11397$$, $p$jscomp$26$$, $q$jscomp$21$$, $r$jscomp$20$$, $s$jscomp$37$$, $t$jscomp$10$$, $rest$jscomp$5$$) {
    switch(arguments.length) {
      case 1:
        return $G__11397__1$$.call(this, $self__$jscomp$145$$);
      case 2:
        return $G__11397__2$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$);
      case 3:
        return $G__11397__3$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$);
      case 4:
        return $G__11397__4$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$);
      case 5:
        return $G__11397__5$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$);
      case 6:
        return $G__11397__6$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$);
      case 7:
        return $G__11397__7$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$);
      case 8:
        return $G__11397__8$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$);
      case 9:
        return $G__11397__9$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$);
      case 10:
        return $G__11397__10$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$);
      case 11:
        return $G__11397__11$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$);
      case 12:
        return $G__11397__12$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$);
      case 13:
        return $G__11397__13$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$);
      case 14:
        return $G__11397__14$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$);
      case 15:
        return $G__11397__15$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$);
      case 16:
        return $G__11397__16$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$, $G__11397$$);
      case 17:
        return $G__11397__17$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$, $G__11397$$, $p$jscomp$26$$);
      case 18:
        return $G__11397__18$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$, $G__11397$$, $p$jscomp$26$$, $q$jscomp$21$$);
      case 19:
        return $G__11397__19$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$, $G__11397$$, $p$jscomp$26$$, $q$jscomp$21$$, $r$jscomp$20$$);
      case 20:
        return $G__11397__20$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$, $G__11397$$, $p$jscomp$26$$, $q$jscomp$21$$, $r$jscomp$20$$, $s$jscomp$37$$);
      case 21:
        return $G__11397__21$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$, $G__11397$$, $p$jscomp$26$$, $q$jscomp$21$$, $r$jscomp$20$$, $s$jscomp$37$$, $t$jscomp$10$$);
      case 22:
        return $G__11397__22$$.call(this, $self__$jscomp$145$$, $a$jscomp$103$$, $b$jscomp$95$$, $c$jscomp$81$$, $d$jscomp$73$$, $e$jscomp$77$$, $f$jscomp$118$$, $g$jscomp$61$$, $h$jscomp$65$$, $i$jscomp$141$$, $j$jscomp$56$$, $k$jscomp$61$$, $l$jscomp$53$$, $m$jscomp$37$$, $n$jscomp$60$$, $G__11397$$, $p$jscomp$26$$, $q$jscomp$21$$, $r$jscomp$20$$, $s$jscomp$37$$, $t$jscomp$10$$, $rest$jscomp$5$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11397$$.$cljs$core$IFn$_invoke$arity$1$ = $G__11397__1$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$2$ = $G__11397__2$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$3$ = $G__11397__3$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$4$ = $G__11397__4$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$5$ = $G__11397__5$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$6$ = $G__11397__6$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$7$ = $G__11397__7$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$8$ = $G__11397__8$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$9$ = $G__11397__9$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$10$ = $G__11397__10$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$11$ = $G__11397__11$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$12$ = $G__11397__12$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$13$ = $G__11397__13$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$14$ = $G__11397__14$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$15$ = $G__11397__15$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$16$ = $G__11397__16$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$17$ = $G__11397__17$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$18$ = $G__11397__18$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$19$ = $G__11397__19$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$20$ = $G__11397__20$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$21$ = $G__11397__21$$;
  $G__11397$$.$cljs$core$IFn$_invoke$arity$22$ = $G__11397__22$$;
  return $G__11397$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$146$$, $args11396$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args11396$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$0$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$0$() : this.$afn$.call(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($a$jscomp$104$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$1$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$1$($a$jscomp$104$$) : this.$afn$.call(null, $a$jscomp$104$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($a$jscomp$105$$, $b$jscomp$96$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$2$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$2$($a$jscomp$105$$, $b$jscomp$96$$) : this.$afn$.call(null, $a$jscomp$105$$, $b$jscomp$96$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$3$ = function($a$jscomp$106$$, $b$jscomp$97$$, $c$jscomp$82$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$3$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$3$($a$jscomp$106$$, $b$jscomp$97$$, $c$jscomp$82$$) : this.$afn$.call(null, $a$jscomp$106$$, $b$jscomp$97$$, $c$jscomp$82$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$4$ = function($a$jscomp$107$$, $b$jscomp$98$$, $c$jscomp$83$$, $d$jscomp$74$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$4$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$4$($a$jscomp$107$$, $b$jscomp$98$$, $c$jscomp$83$$, $d$jscomp$74$$) : this.$afn$.call(null, $a$jscomp$107$$, $b$jscomp$98$$, $c$jscomp$83$$, $d$jscomp$74$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$5$ = function($a$jscomp$108$$, $b$jscomp$99$$, $c$jscomp$84$$, $d$jscomp$75$$, $e$jscomp$78$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$5$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$5$($a$jscomp$108$$, $b$jscomp$99$$, $c$jscomp$84$$, $d$jscomp$75$$, $e$jscomp$78$$) : this.$afn$.call(null, $a$jscomp$108$$, $b$jscomp$99$$, $c$jscomp$84$$, $d$jscomp$75$$, $e$jscomp$78$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$6$ = function($a$jscomp$109$$, $b$jscomp$100$$, $c$jscomp$85$$, $d$jscomp$76$$, $e$jscomp$79$$, $f$jscomp$119$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$6$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$6$($a$jscomp$109$$, $b$jscomp$100$$, $c$jscomp$85$$, $d$jscomp$76$$, $e$jscomp$79$$, $f$jscomp$119$$) : this.$afn$.call(null, $a$jscomp$109$$, $b$jscomp$100$$, $c$jscomp$85$$, $d$jscomp$76$$, $e$jscomp$79$$, $f$jscomp$119$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$7$ = function($a$jscomp$110$$, $b$jscomp$101$$, $c$jscomp$86$$, $d$jscomp$77$$, $e$jscomp$80$$, $f$jscomp$120$$, $g$jscomp$62$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$7$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$7$($a$jscomp$110$$, $b$jscomp$101$$, $c$jscomp$86$$, $d$jscomp$77$$, $e$jscomp$80$$, $f$jscomp$120$$, $g$jscomp$62$$) : this.$afn$.call(null, $a$jscomp$110$$, $b$jscomp$101$$, $c$jscomp$86$$, $d$jscomp$77$$, $e$jscomp$80$$, $f$jscomp$120$$, $g$jscomp$62$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$8$ = function($a$jscomp$111$$, $b$jscomp$102$$, $c$jscomp$87$$, $d$jscomp$78$$, $e$jscomp$81$$, $f$jscomp$121$$, $g$jscomp$63$$, $h$jscomp$66$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$8$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$8$($a$jscomp$111$$, $b$jscomp$102$$, $c$jscomp$87$$, $d$jscomp$78$$, $e$jscomp$81$$, $f$jscomp$121$$, $g$jscomp$63$$, $h$jscomp$66$$) : this.$afn$.call(null, $a$jscomp$111$$, $b$jscomp$102$$, $c$jscomp$87$$, $d$jscomp$78$$, $e$jscomp$81$$, $f$jscomp$121$$, $g$jscomp$63$$, $h$jscomp$66$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$9$ = function($a$jscomp$112$$, $b$jscomp$103$$, $c$jscomp$88$$, $d$jscomp$79$$, $e$jscomp$82$$, $f$jscomp$122$$, $g$jscomp$64$$, $h$jscomp$67$$, $i$jscomp$142$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$9$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$9$($a$jscomp$112$$, $b$jscomp$103$$, $c$jscomp$88$$, $d$jscomp$79$$, $e$jscomp$82$$, $f$jscomp$122$$, $g$jscomp$64$$, $h$jscomp$67$$, $i$jscomp$142$$) : this.$afn$.call(null, $a$jscomp$112$$, $b$jscomp$103$$, $c$jscomp$88$$, $d$jscomp$79$$, $e$jscomp$82$$, $f$jscomp$122$$, $g$jscomp$64$$, $h$jscomp$67$$, $i$jscomp$142$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$10$ = function($a$jscomp$113$$, $b$jscomp$104$$, $c$jscomp$89$$, $d$jscomp$80$$, $e$jscomp$83$$, $f$jscomp$123$$, $g$jscomp$65$$, $h$jscomp$68$$, $i$jscomp$143$$, $j$jscomp$57$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$10$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$10$($a$jscomp$113$$, $b$jscomp$104$$, $c$jscomp$89$$, $d$jscomp$80$$, $e$jscomp$83$$, $f$jscomp$123$$, $g$jscomp$65$$, $h$jscomp$68$$, $i$jscomp$143$$, $j$jscomp$57$$) : this.$afn$.call(null, $a$jscomp$113$$, $b$jscomp$104$$, $c$jscomp$89$$, $d$jscomp$80$$, $e$jscomp$83$$, $f$jscomp$123$$, $g$jscomp$65$$, $h$jscomp$68$$, $i$jscomp$143$$, $j$jscomp$57$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$11$ = function($a$jscomp$114$$, $b$jscomp$105$$, $c$jscomp$90$$, $d$jscomp$81$$, $e$jscomp$84$$, $f$jscomp$124$$, $g$jscomp$66$$, $h$jscomp$69$$, $i$jscomp$144$$, $j$jscomp$58$$, $k$jscomp$62$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$11$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$11$($a$jscomp$114$$, $b$jscomp$105$$, $c$jscomp$90$$, $d$jscomp$81$$, $e$jscomp$84$$, $f$jscomp$124$$, $g$jscomp$66$$, $h$jscomp$69$$, $i$jscomp$144$$, $j$jscomp$58$$, $k$jscomp$62$$) : this.$afn$.call(null, $a$jscomp$114$$, $b$jscomp$105$$, $c$jscomp$90$$, $d$jscomp$81$$, $e$jscomp$84$$, $f$jscomp$124$$, $g$jscomp$66$$, $h$jscomp$69$$, $i$jscomp$144$$, $j$jscomp$58$$, $k$jscomp$62$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$12$ = function($a$jscomp$115$$, $b$jscomp$106$$, $c$jscomp$91$$, $d$jscomp$82$$, $e$jscomp$85$$, $f$jscomp$125$$, $g$jscomp$67$$, $h$jscomp$70$$, $i$jscomp$145$$, $j$jscomp$59$$, $k$jscomp$63$$, $l$jscomp$54$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$12$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$12$($a$jscomp$115$$, $b$jscomp$106$$, $c$jscomp$91$$, $d$jscomp$82$$, $e$jscomp$85$$, $f$jscomp$125$$, $g$jscomp$67$$, $h$jscomp$70$$, $i$jscomp$145$$, $j$jscomp$59$$, $k$jscomp$63$$, $l$jscomp$54$$) : this.$afn$.call(null, $a$jscomp$115$$, $b$jscomp$106$$, $c$jscomp$91$$, $d$jscomp$82$$, $e$jscomp$85$$, $f$jscomp$125$$, $g$jscomp$67$$, $h$jscomp$70$$, $i$jscomp$145$$, $j$jscomp$59$$, $k$jscomp$63$$, $l$jscomp$54$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$13$ = function($a$jscomp$116$$, $b$jscomp$107$$, $c$jscomp$92$$, $d$jscomp$83$$, $e$jscomp$86$$, $f$jscomp$126$$, $g$jscomp$68$$, $h$jscomp$71$$, $i$jscomp$146$$, $j$jscomp$60$$, $k$jscomp$64$$, $l$jscomp$55$$, $m$jscomp$38$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$13$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$13$($a$jscomp$116$$, $b$jscomp$107$$, $c$jscomp$92$$, $d$jscomp$83$$, $e$jscomp$86$$, $f$jscomp$126$$, $g$jscomp$68$$, $h$jscomp$71$$, $i$jscomp$146$$, $j$jscomp$60$$, $k$jscomp$64$$, $l$jscomp$55$$, $m$jscomp$38$$) : this.$afn$.call(null, $a$jscomp$116$$, $b$jscomp$107$$, $c$jscomp$92$$, $d$jscomp$83$$, $e$jscomp$86$$, $f$jscomp$126$$, $g$jscomp$68$$, $h$jscomp$71$$, $i$jscomp$146$$, $j$jscomp$60$$, $k$jscomp$64$$, 
  $l$jscomp$55$$, $m$jscomp$38$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$14$ = function($a$jscomp$117$$, $b$jscomp$108$$, $c$jscomp$93$$, $d$jscomp$84$$, $e$jscomp$87$$, $f$jscomp$127$$, $g$jscomp$69$$, $h$jscomp$72$$, $i$jscomp$147$$, $j$jscomp$61$$, $k$jscomp$65$$, $l$jscomp$56$$, $m$jscomp$39$$, $n$jscomp$61$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$14$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$14$($a$jscomp$117$$, $b$jscomp$108$$, $c$jscomp$93$$, $d$jscomp$84$$, $e$jscomp$87$$, $f$jscomp$127$$, $g$jscomp$69$$, $h$jscomp$72$$, $i$jscomp$147$$, $j$jscomp$61$$, $k$jscomp$65$$, $l$jscomp$56$$, $m$jscomp$39$$, $n$jscomp$61$$) : this.$afn$.call(null, $a$jscomp$117$$, $b$jscomp$108$$, $c$jscomp$93$$, $d$jscomp$84$$, $e$jscomp$87$$, $f$jscomp$127$$, $g$jscomp$69$$, $h$jscomp$72$$, $i$jscomp$147$$, $j$jscomp$61$$, 
  $k$jscomp$65$$, $l$jscomp$56$$, $m$jscomp$39$$, $n$jscomp$61$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$15$ = function($a$jscomp$118$$, $b$jscomp$109$$, $c$jscomp$94$$, $d$jscomp$85$$, $e$jscomp$88$$, $f$jscomp$128$$, $g$jscomp$70$$, $h$jscomp$73$$, $i$jscomp$148$$, $j$jscomp$62$$, $k$jscomp$66$$, $l$jscomp$57$$, $m$jscomp$40$$, $n$jscomp$62$$, $o$jscomp$59$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$15$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$15$($a$jscomp$118$$, $b$jscomp$109$$, $c$jscomp$94$$, $d$jscomp$85$$, $e$jscomp$88$$, $f$jscomp$128$$, $g$jscomp$70$$, $h$jscomp$73$$, $i$jscomp$148$$, $j$jscomp$62$$, $k$jscomp$66$$, $l$jscomp$57$$, $m$jscomp$40$$, $n$jscomp$62$$, $o$jscomp$59$$) : this.$afn$.call(null, $a$jscomp$118$$, $b$jscomp$109$$, $c$jscomp$94$$, $d$jscomp$85$$, $e$jscomp$88$$, $f$jscomp$128$$, $g$jscomp$70$$, $h$jscomp$73$$, $i$jscomp$148$$, 
  $j$jscomp$62$$, $k$jscomp$66$$, $l$jscomp$57$$, $m$jscomp$40$$, $n$jscomp$62$$, $o$jscomp$59$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$16$ = function($a$jscomp$119$$, $b$jscomp$110$$, $c$jscomp$95$$, $d$jscomp$86$$, $e$jscomp$89$$, $f$jscomp$129$$, $g$jscomp$71$$, $h$jscomp$74$$, $i$jscomp$149$$, $j$jscomp$63$$, $k$jscomp$67$$, $l$jscomp$58$$, $m$jscomp$41$$, $n$jscomp$63$$, $o$jscomp$60$$, $p$jscomp$27$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$16$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$16$($a$jscomp$119$$, $b$jscomp$110$$, $c$jscomp$95$$, $d$jscomp$86$$, $e$jscomp$89$$, $f$jscomp$129$$, $g$jscomp$71$$, $h$jscomp$74$$, $i$jscomp$149$$, $j$jscomp$63$$, $k$jscomp$67$$, $l$jscomp$58$$, $m$jscomp$41$$, $n$jscomp$63$$, $o$jscomp$60$$, $p$jscomp$27$$) : this.$afn$.call(null, $a$jscomp$119$$, $b$jscomp$110$$, $c$jscomp$95$$, $d$jscomp$86$$, $e$jscomp$89$$, $f$jscomp$129$$, $g$jscomp$71$$, $h$jscomp$74$$, 
  $i$jscomp$149$$, $j$jscomp$63$$, $k$jscomp$67$$, $l$jscomp$58$$, $m$jscomp$41$$, $n$jscomp$63$$, $o$jscomp$60$$, $p$jscomp$27$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$17$ = function($a$jscomp$120$$, $b$jscomp$111$$, $c$jscomp$96$$, $d$jscomp$87$$, $e$jscomp$90$$, $f$jscomp$130$$, $g$jscomp$72$$, $h$jscomp$75$$, $i$jscomp$150$$, $j$jscomp$64$$, $k$jscomp$68$$, $l$jscomp$59$$, $m$jscomp$42$$, $n$jscomp$64$$, $o$jscomp$61$$, $p$jscomp$28$$, $q$jscomp$22$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$17$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$17$($a$jscomp$120$$, $b$jscomp$111$$, $c$jscomp$96$$, $d$jscomp$87$$, $e$jscomp$90$$, $f$jscomp$130$$, $g$jscomp$72$$, $h$jscomp$75$$, $i$jscomp$150$$, $j$jscomp$64$$, $k$jscomp$68$$, $l$jscomp$59$$, $m$jscomp$42$$, $n$jscomp$64$$, $o$jscomp$61$$, $p$jscomp$28$$, $q$jscomp$22$$) : this.$afn$.call(null, $a$jscomp$120$$, $b$jscomp$111$$, $c$jscomp$96$$, $d$jscomp$87$$, $e$jscomp$90$$, $f$jscomp$130$$, $g$jscomp$72$$, 
  $h$jscomp$75$$, $i$jscomp$150$$, $j$jscomp$64$$, $k$jscomp$68$$, $l$jscomp$59$$, $m$jscomp$42$$, $n$jscomp$64$$, $o$jscomp$61$$, $p$jscomp$28$$, $q$jscomp$22$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$18$ = function($a$jscomp$121$$, $b$jscomp$112$$, $c$jscomp$97$$, $d$jscomp$88$$, $e$jscomp$91$$, $f$jscomp$131$$, $g$jscomp$73$$, $h$jscomp$76$$, $i$jscomp$151$$, $j$jscomp$65$$, $k$jscomp$69$$, $l$jscomp$60$$, $m$jscomp$43$$, $n$jscomp$65$$, $o$jscomp$62$$, $p$jscomp$29$$, $q$jscomp$23$$, $r$jscomp$21$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$18$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$18$($a$jscomp$121$$, $b$jscomp$112$$, $c$jscomp$97$$, $d$jscomp$88$$, $e$jscomp$91$$, $f$jscomp$131$$, $g$jscomp$73$$, $h$jscomp$76$$, $i$jscomp$151$$, $j$jscomp$65$$, $k$jscomp$69$$, $l$jscomp$60$$, $m$jscomp$43$$, $n$jscomp$65$$, $o$jscomp$62$$, $p$jscomp$29$$, $q$jscomp$23$$, $r$jscomp$21$$) : this.$afn$.call(null, $a$jscomp$121$$, $b$jscomp$112$$, $c$jscomp$97$$, $d$jscomp$88$$, $e$jscomp$91$$, $f$jscomp$131$$, 
  $g$jscomp$73$$, $h$jscomp$76$$, $i$jscomp$151$$, $j$jscomp$65$$, $k$jscomp$69$$, $l$jscomp$60$$, $m$jscomp$43$$, $n$jscomp$65$$, $o$jscomp$62$$, $p$jscomp$29$$, $q$jscomp$23$$, $r$jscomp$21$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$19$ = function($a$jscomp$122$$, $b$jscomp$113$$, $c$jscomp$98$$, $d$jscomp$89$$, $e$jscomp$92$$, $f$jscomp$132$$, $g$jscomp$74$$, $h$jscomp$77$$, $i$jscomp$152$$, $j$jscomp$66$$, $k$jscomp$70$$, $l$jscomp$61$$, $m$jscomp$44$$, $n$jscomp$66$$, $o$jscomp$63$$, $p$jscomp$30$$, $q$jscomp$24$$, $r$jscomp$22$$, $s$jscomp$38$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$19$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$19$($a$jscomp$122$$, $b$jscomp$113$$, $c$jscomp$98$$, $d$jscomp$89$$, $e$jscomp$92$$, $f$jscomp$132$$, $g$jscomp$74$$, $h$jscomp$77$$, $i$jscomp$152$$, $j$jscomp$66$$, $k$jscomp$70$$, $l$jscomp$61$$, $m$jscomp$44$$, $n$jscomp$66$$, $o$jscomp$63$$, $p$jscomp$30$$, $q$jscomp$24$$, $r$jscomp$22$$, $s$jscomp$38$$) : this.$afn$.call(null, $a$jscomp$122$$, $b$jscomp$113$$, $c$jscomp$98$$, $d$jscomp$89$$, $e$jscomp$92$$, 
  $f$jscomp$132$$, $g$jscomp$74$$, $h$jscomp$77$$, $i$jscomp$152$$, $j$jscomp$66$$, $k$jscomp$70$$, $l$jscomp$61$$, $m$jscomp$44$$, $n$jscomp$66$$, $o$jscomp$63$$, $p$jscomp$30$$, $q$jscomp$24$$, $r$jscomp$22$$, $s$jscomp$38$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$20$ = function($a$jscomp$123$$, $b$jscomp$114$$, $c$jscomp$99$$, $d$jscomp$90$$, $e$jscomp$93$$, $f$jscomp$133$$, $g$jscomp$75$$, $h$jscomp$78$$, $i$jscomp$153$$, $j$jscomp$67$$, $k$jscomp$71$$, $l$jscomp$62$$, $m$jscomp$45$$, $n$jscomp$67$$, $o$jscomp$64$$, $p$jscomp$31$$, $q$jscomp$25$$, $r$jscomp$23$$, $s$jscomp$39$$, $t$jscomp$11$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$20$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$20$($a$jscomp$123$$, $b$jscomp$114$$, $c$jscomp$99$$, $d$jscomp$90$$, $e$jscomp$93$$, $f$jscomp$133$$, $g$jscomp$75$$, $h$jscomp$78$$, $i$jscomp$153$$, $j$jscomp$67$$, $k$jscomp$71$$, $l$jscomp$62$$, $m$jscomp$45$$, $n$jscomp$67$$, $o$jscomp$64$$, $p$jscomp$31$$, $q$jscomp$25$$, $r$jscomp$23$$, $s$jscomp$39$$, $t$jscomp$11$$) : this.$afn$.call(null, $a$jscomp$123$$, $b$jscomp$114$$, $c$jscomp$99$$, $d$jscomp$90$$, 
  $e$jscomp$93$$, $f$jscomp$133$$, $g$jscomp$75$$, $h$jscomp$78$$, $i$jscomp$153$$, $j$jscomp$67$$, $k$jscomp$71$$, $l$jscomp$62$$, $m$jscomp$45$$, $n$jscomp$67$$, $o$jscomp$64$$, $p$jscomp$31$$, $q$jscomp$25$$, $r$jscomp$23$$, $s$jscomp$39$$, $t$jscomp$11$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$21$ = function($a$jscomp$124$$, $b$jscomp$115$$, $c$jscomp$100$$, $d$jscomp$91$$, $e$jscomp$94$$, $f$jscomp$134$$, $g$jscomp$76$$, $h$jscomp$79$$, $i$jscomp$154$$, $j$jscomp$68$$, $k$jscomp$72$$, $l$jscomp$63$$, $m$jscomp$46$$, $n$jscomp$68$$, $o$jscomp$65$$, $p$jscomp$32$$, $q$jscomp$26$$, $r$jscomp$24$$, $s$jscomp$40$$, $t$jscomp$12$$, $rest$jscomp$6$$) {
  return $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$ ? $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$(this.$afn$, $a$jscomp$124$$, $b$jscomp$115$$, $c$jscomp$100$$, $d$jscomp$91$$, $e$jscomp$94$$, $f$jscomp$134$$, $g$jscomp$76$$, $h$jscomp$79$$, $i$jscomp$154$$, $j$jscomp$68$$, $k$jscomp$72$$, $l$jscomp$63$$, $m$jscomp$46$$, $n$jscomp$68$$, $o$jscomp$65$$, $p$jscomp$32$$, $q$jscomp$26$$, $r$jscomp$24$$, $s$jscomp$40$$, $t$jscomp$12$$, $rest$jscomp$6$$) : $cljs$core$apply$$.call(null, 
  this.$afn$, $a$jscomp$124$$, $b$jscomp$115$$, $c$jscomp$100$$, $d$jscomp$91$$, $e$jscomp$94$$, $f$jscomp$134$$, $g$jscomp$76$$, $h$jscomp$79$$, $i$jscomp$154$$, $j$jscomp$68$$, $k$jscomp$72$$, $l$jscomp$63$$, $m$jscomp$46$$, $n$jscomp$68$$, $o$jscomp$65$$, $p$jscomp$32$$, $q$jscomp$26$$, $r$jscomp$24$$, $s$jscomp$40$$, $t$jscomp$12$$, $rest$jscomp$6$$);
};
function $cljs$core$meta$$($o$jscomp$67$$) {
  var $and__7948__auto__$jscomp$inline_155$$ = null != $o$jscomp$67$$;
  return ($and__7948__auto__$jscomp$inline_155$$ ? null != $o$jscomp$67$$ ? $o$jscomp$67$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $cljs$core$PROTOCOL_SENTINEL$$ === $o$jscomp$67$$.$cljs$core$IMeta$$ || ($o$jscomp$67$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMeta$$, $o$jscomp$67$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMeta$$, $o$jscomp$67$$) : $and__7948__auto__$jscomp$inline_155$$) ? $cljs$core$_meta$$($o$jscomp$67$$) : 
  null;
}
function $cljs$core$empty_QMARK_$$($coll$jscomp$107$$) {
  return null == $coll$jscomp$107$$ || $cljs$core$not$$($cljs$core$seq$$($coll$jscomp$107$$));
}
function $cljs$core$set_QMARK_$$($x$jscomp$133$$) {
  return null == $x$jscomp$133$$ ? !1 : null != $x$jscomp$133$$ ? $x$jscomp$133$$.$cljs$lang$protocol_mask$partition0$$ & 4096 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$133$$.$cljs$core$ISet$$ ? !0 : $x$jscomp$133$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISet$$, $x$jscomp$133$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISet$$, $x$jscomp$133$$);
}
function $cljs$core$sequential_QMARK_$$($x$jscomp$136$$) {
  return null != $x$jscomp$136$$ ? $x$jscomp$136$$.$cljs$lang$protocol_mask$partition0$$ & 16777216 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$136$$.$cljs$core$ISequential$$ ? !0 : $x$jscomp$136$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISequential$$, $x$jscomp$136$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISequential$$, $x$jscomp$136$$);
}
function $cljs$core$map_QMARK_$$($x$jscomp$139$$) {
  return null == $x$jscomp$139$$ ? !1 : null != $x$jscomp$139$$ ? $x$jscomp$139$$.$cljs$lang$protocol_mask$partition0$$ & 1024 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$139$$.$cljs$core$IMap$$ ? !0 : $x$jscomp$139$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMap$$, $x$jscomp$139$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMap$$, $x$jscomp$139$$);
}
function $cljs$core$vector_QMARK_$$($x$jscomp$141$$) {
  return null != $x$jscomp$141$$ ? $x$jscomp$141$$.$cljs$lang$protocol_mask$partition0$$ & 16384 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$141$$.$cljs$core$IVector$$ ? !0 : $x$jscomp$141$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IVector$$, $x$jscomp$141$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IVector$$, $x$jscomp$141$$);
}
function $cljs$core$chunked_seq_QMARK_$$($x$jscomp$142$$) {
  return null != $x$jscomp$142$$ ? $x$jscomp$142$$.$cljs$lang$protocol_mask$partition1$$ & 512 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$142$$.$cljs$core$IChunkedSeq$$ ? !0 : !1 : !1;
}
function $cljs$core$js_keys$$($obj$jscomp$78$$) {
  var $keys$jscomp$1$$ = [];
  $goog$object$forEach$$($obj$jscomp$78$$, function($obj$jscomp$78$$, $keys$jscomp$1$$) {
    return function($obj$jscomp$78$$, $G__11449_11451$jscomp$1$$) {
      return $keys$jscomp$1$$.push($G__11449_11451$jscomp$1$$);
    };
  }($obj$jscomp$78$$, $keys$jscomp$1$$));
  return $keys$jscomp$1$$;
}
function $cljs$core$array_copy$$($from$$, $i$jscomp$155_i__$1$jscomp$2$$, $to$$, $G__11454_j$jscomp$69_j__$1$$, $G__11455_len$jscomp$14_len__$1$$) {
  for (; 0 !== $G__11455_len$jscomp$14_len__$1$$;) {
    $to$$[$G__11454_j$jscomp$69_j__$1$$] = $from$$[$i$jscomp$155_i__$1$jscomp$2$$], $G__11454_j$jscomp$69_j__$1$$ += 1, --$G__11455_len$jscomp$14_len__$1$$, $i$jscomp$155_i__$1$jscomp$2$$ += 1;
  }
}
var $cljs$core$lookup_sentinel$$ = {};
function $cljs$core$boolean$0$$($x$jscomp$147$$) {
  return null == $x$jscomp$147$$ ? !1 : !1 === $x$jscomp$147$$ ? !1 : !0;
}
function $cljs$core$contains_QMARK_$$($coll$jscomp$108$$, $v$jscomp$8$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$108$$, $v$jscomp$8$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? !1 : !0;
}
function $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$137$$, $coll$jscomp$114$$) {
  var $G__11519_temp__5276__auto__$jscomp$1$$ = $cljs$core$seq$$($coll$jscomp$114$$);
  if ($G__11519_temp__5276__auto__$jscomp$1$$) {
    var $G__11518$$ = $cljs$core$first$$($G__11519_temp__5276__auto__$jscomp$1$$), $G__11519_temp__5276__auto__$jscomp$1$$ = $cljs$core$next$$($G__11519_temp__5276__auto__$jscomp$1$$);
    return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$137$$, $G__11518$$, $G__11519_temp__5276__auto__$jscomp$1$$) : $cljs$core$reduce$$.call(null, $f$jscomp$137$$, $G__11518$$, $G__11519_temp__5276__auto__$jscomp$1$$);
  }
  return $f$jscomp$137$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$137$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$137$$.call(null);
}
function $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$138$$, $G__11520$jscomp$inline_163_G__11526_nval$jscomp$6_val$jscomp$45_val__$1$jscomp$4$$, $G__11527_coll$jscomp$115_coll__$1$jscomp$25$$) {
  for ($G__11527_coll$jscomp$115_coll__$1$jscomp$25$$ = $cljs$core$seq$$($G__11527_coll$jscomp$115_coll__$1$jscomp$25$$);;) {
    if ($G__11527_coll$jscomp$115_coll__$1$jscomp$25$$) {
      var $G__11521$jscomp$inline_164$$ = $cljs$core$first$$($G__11527_coll$jscomp$115_coll__$1$jscomp$25$$);
      $G__11520$jscomp$inline_163_G__11526_nval$jscomp$6_val$jscomp$45_val__$1$jscomp$4$$ = $f$jscomp$138$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$138$$.$cljs$core$IFn$_invoke$arity$2$($G__11520$jscomp$inline_163_G__11526_nval$jscomp$6_val$jscomp$45_val__$1$jscomp$4$$, $G__11521$jscomp$inline_164$$) : $f$jscomp$138$$.call(null, $G__11520$jscomp$inline_163_G__11526_nval$jscomp$6_val$jscomp$45_val__$1$jscomp$4$$, $G__11521$jscomp$inline_164$$);
      if ($cljs$core$reduced_QMARK_$$($G__11520$jscomp$inline_163_G__11526_nval$jscomp$6_val$jscomp$45_val__$1$jscomp$4$$)) {
        return $cljs$core$_deref$$($G__11520$jscomp$inline_163_G__11526_nval$jscomp$6_val$jscomp$45_val__$1$jscomp$4$$);
      }
      $G__11527_coll$jscomp$115_coll__$1$jscomp$25$$ = $cljs$core$next$$($G__11527_coll$jscomp$115_coll__$1$jscomp$25$$);
    } else {
      return $G__11520$jscomp$inline_163_G__11526_nval$jscomp$6_val$jscomp$45_val__$1$jscomp$4$$;
    }
  }
}
function $cljs$core$reduce$$($var_args$jscomp$109$$) {
  for (var $args11528_f$jscomp$inline_166$$ = [], $coll$jscomp$inline_167_len__9181__auto___11533$$ = arguments.length, $i__9182__auto___11534$$ = 0;;) {
    if ($i__9182__auto___11534$$ < $coll$jscomp$inline_167_len__9181__auto___11533$$) {
      $args11528_f$jscomp$inline_166$$.push(arguments[$i__9182__auto___11534$$]), $i__9182__auto___11534$$ += 1;
    } else {
      break;
    }
  }
  switch($args11528_f$jscomp$inline_166$$.length) {
    case 2:
      return $args11528_f$jscomp$inline_166$$ = arguments[0], $coll$jscomp$inline_167_len__9181__auto___11533$$ = arguments[1], null != $coll$jscomp$inline_167_len__9181__auto___11533$$ && ($coll$jscomp$inline_167_len__9181__auto___11533$$.$cljs$lang$protocol_mask$partition0$$ & 524288 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$inline_167_len__9181__auto___11533$$.$cljs$core$IReduce$$) ? $coll$jscomp$inline_167_len__9181__auto___11533$$.$cljs$core$IReduce$_reduce$arity$2$(null, $args11528_f$jscomp$inline_166$$) : 
      $cljs$core$array_QMARK_$$($coll$jscomp$inline_167_len__9181__auto___11533$$) ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$inline_167_len__9181__auto___11533$$, $args11528_f$jscomp$inline_166$$) : "string" === typeof $coll$jscomp$inline_167_len__9181__auto___11533$$ ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$inline_167_len__9181__auto___11533$$, $args11528_f$jscomp$inline_166$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IReduce$$, 
      $coll$jscomp$inline_167_len__9181__auto___11533$$) ? $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$inline_167_len__9181__auto___11533$$, $args11528_f$jscomp$inline_166$$) : $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($args11528_f$jscomp$inline_166$$, $coll$jscomp$inline_167_len__9181__auto___11533$$);
    case 3:
      return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11528_f$jscomp$inline_166$$.length)].join(""));
  }
}
function $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$140$$, $val$jscomp$46$$, $coll$jscomp$118$$) {
  return null != $coll$jscomp$118$$ && ($coll$jscomp$118$$.$cljs$lang$protocol_mask$partition0$$ & 524288 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$118$$.$cljs$core$IReduce$$) ? $coll$jscomp$118$$.$cljs$core$IReduce$_reduce$arity$3$(null, $f$jscomp$140$$, $val$jscomp$46$$) : $cljs$core$array_QMARK_$$($coll$jscomp$118$$) ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$118$$, $f$jscomp$140$$, $val$jscomp$46$$) : "string" === typeof $coll$jscomp$118$$ ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$118$$, 
  $f$jscomp$140$$, $val$jscomp$46$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IReduce$$, $coll$jscomp$118$$) ? $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$118$$, $f$jscomp$140$$, $val$jscomp$46$$) : $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$140$$, $val$jscomp$46$$, $coll$jscomp$118$$);
}
function $cljs$core$identity$$($x$jscomp$161$$) {
  return $x$jscomp$161$$;
}
function $cljs$core$transduce$cljs$0core$0IFn$0_invoke$0arity$04$$($f__$1_xform$jscomp$1$$, $f$jscomp$145$$, $init$jscomp$3_ret$jscomp$5$$, $coll$jscomp$121$$) {
  $f__$1_xform$jscomp$1$$ = $f__$1_xform$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $f__$1_xform$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($f$jscomp$145$$) : $f__$1_xform$jscomp$1$$.call(null, $f$jscomp$145$$);
  $init$jscomp$3_ret$jscomp$5$$ = $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f__$1_xform$jscomp$1$$, $init$jscomp$3_ret$jscomp$5$$, $coll$jscomp$121$$);
  return $f__$1_xform$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $f__$1_xform$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($init$jscomp$3_ret$jscomp$5$$) : $f__$1_xform$jscomp$1$$.call(null, $init$jscomp$3_ret$jscomp$5$$);
}
function $cljs$core$quot$$($n$jscomp$74_q$jscomp$inline_169$$) {
  $n$jscomp$74_q$jscomp$inline_169$$ = ($n$jscomp$74_q$jscomp$inline_169$$ - $n$jscomp$74_q$jscomp$inline_169$$ % 2) / 2;
  return 0 <= $n$jscomp$74_q$jscomp$inline_169$$ ? Math.floor($n$jscomp$74_q$jscomp$inline_169$$) : Math.ceil($n$jscomp$74_q$jscomp$inline_169$$);
}
function $cljs$core$bit_count$$($v$jscomp$9_v__$1_v__$2$$) {
  $v$jscomp$9_v__$1_v__$2$$ -= $v$jscomp$9_v__$1_v__$2$$ >> 1 & 1431655765;
  $v$jscomp$9_v__$1_v__$2$$ = ($v$jscomp$9_v__$1_v__$2$$ & 858993459) + ($v$jscomp$9_v__$1_v__$2$$ >> 2 & 858993459);
  return 16843009 * ($v$jscomp$9_v__$1_v__$2$$ + ($v$jscomp$9_v__$1_v__$2$$ >> 4) & 252645135) >> 24;
}
var $cljs$core$str$$ = function $cljs$core$str$$($var_args$jscomp$134$$) {
  for (var $args11789$$ = [], $len__9181__auto___11794$$ = arguments.length, $i__9182__auto___11795$$ = 0;;) {
    if ($i__9182__auto___11795$$ < $len__9181__auto___11794$$) {
      $args11789$$.push(arguments[$i__9182__auto___11795$$]), $i__9182__auto___11795$$ += 1;
    } else {
      break;
    }
  }
  switch($args11789$$.length) {
    case 0:
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    default:
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], new $cljs$core$IndexedSeq$$($args11789$$.slice(1), 0, null));
  }
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return "";
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$269$$) {
  return null == $x$jscomp$269$$ ? "" : "" + $x$jscomp$269$$;
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($x$jscomp$270$$, $ys$jscomp$2$$) {
  for (var $G__11798_sb$jscomp$5$$ = new $goog$string$StringBuffer$$("" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$270$$)), $G__11799_more$jscomp$24$$ = $ys$jscomp$2$$;;) {
    if ($cljs$core$truth_$$($G__11799_more$jscomp$24$$)) {
      $G__11798_sb$jscomp$5$$ = $G__11798_sb$jscomp$5$$.append("" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$first$$($G__11799_more$jscomp$24$$))), $G__11799_more$jscomp$24$$ = $cljs$core$next$$($G__11799_more$jscomp$24$$);
    } else {
      return $G__11798_sb$jscomp$5$$.toString();
    }
  }
};
$cljs$core$str$$.$cljs$lang$applyTo$ = function($seq11790_seq11790__$1$$) {
  var $G__11791$$ = $cljs$core$first$$($seq11790_seq11790__$1$$);
  $seq11790_seq11790__$1$$ = $cljs$core$next$$($seq11790_seq11790__$1$$);
  return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$variadic$($G__11791$$, $seq11790_seq11790__$1$$);
};
$cljs$core$str$$.$cljs$lang$maxFixedArity$ = 1;
function $cljs$core$equiv_sequential$$($x$jscomp$271$$, $y$jscomp$114$$) {
  if ($cljs$core$sequential_QMARK_$$($y$jscomp$114$$)) {
    if ($cljs$core$counted_QMARK_$$($x$jscomp$271$$) && $cljs$core$counted_QMARK_$$($y$jscomp$114$$) && $cljs$core$count$$($x$jscomp$271$$) !== $cljs$core$count$$($y$jscomp$114$$)) {
      var $G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$ = !1;
    } else {
      a: {
        $G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$ = $cljs$core$seq$$($x$jscomp$271$$);
        for (var $G__11808$jscomp$inline_174_ys$jscomp$inline_172$$ = $cljs$core$seq$$($y$jscomp$114$$);;) {
          if (null == $G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$) {
            $G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$ = null == $G__11808$jscomp$inline_174_ys$jscomp$inline_172$$;
            break a;
          }
          if (null != $G__11808$jscomp$inline_174_ys$jscomp$inline_172$$ && $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$($G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$), $cljs$core$first$$($G__11808$jscomp$inline_174_ys$jscomp$inline_172$$))) {
            $G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$ = $cljs$core$next$$($G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$), $G__11808$jscomp$inline_174_ys$jscomp$inline_172$$ = $cljs$core$next$$($G__11808$jscomp$inline_174_ys$jscomp$inline_172$$);
          } else {
            $G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$ = !1;
            break a;
          }
        }
      }
    }
  } else {
    $G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$ = null;
  }
  return $cljs$core$boolean$0$$($G__11807$jscomp$inline_173_JSCompiler_temp$jscomp$29_JSCompiler_temp$jscomp$30_xs$jscomp$inline_171$$);
}
function $cljs$core$List$$($meta$jscomp$8$$, $first$jscomp$3$$, $rest$jscomp$7$$, $count$jscomp$13$$, $__hash$$) {
  this.$meta$ = $meta$jscomp$8$$;
  this.first = $first$jscomp$3$$;
  this.$rest$ = $rest$jscomp$7$$;
  this.count = $count$jscomp$13$$;
  this.$__hash$ = $__hash$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65937646;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$List$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$44$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$44$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__11862$$ = null, $G__11862$$ = function($G__11862$$, $start$jscomp$27$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11862$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11862$$, $start$jscomp$27$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11862$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__11862$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11862$$, 0);
  };
  $G__11862$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11862$$, $start$jscomp$26$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11862$$, $start$jscomp$26$$);
  };
  return $G__11862$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__11863__1$$($G__11863__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11863__1$$, this.count);
  }
  var $G__11863$$ = null, $G__11863$$ = function($G__11863$$, $start$jscomp$29$$) {
    switch(arguments.length) {
      case 1:
        return $G__11863__1$$.call(this, $G__11863$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11863$$, $start$jscomp$29$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11863$$.$cljs$core$IFn$_invoke$arity$1$ = $G__11863__1$$;
  $G__11863$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11863__1$$, $G__11863$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11863__1$$, $G__11863$$);
  };
  return $G__11863$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return 1 === this.count ? null : this.$rest$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.count;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$1_h__8402__auto____$1$jscomp$1$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$1_h__8402__auto____$1$jscomp$1$$ ? $h__8402__auto__$jscomp$1_h__8402__auto____$1$jscomp$1$$ : this.$__hash$ = $h__8402__auto__$jscomp$1_h__8402__auto____$1$jscomp$1$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$135$$, $other$jscomp$45$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$45$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$137$$, $f$jscomp$146$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$146$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$138$$, $f$jscomp$147$$, $start$jscomp$30$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$147$$, $start$jscomp$30$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.first;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return 1 === this.count ? $cljs$core$List$EMPTY$$ : this.$rest$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$142$$, $meta__$1$$) {
  return new $cljs$core$List$$($meta__$1$$, this.first, this.$rest$, this.count, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$143$$, $o$jscomp$68$$) {
  return new $cljs$core$List$$(this.$meta$, $o$jscomp$68$$, this, this.count + 1, null);
};
$cljs$core$List$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$EmptyList$$($meta$jscomp$10$$) {
  this.$meta$ = $meta$jscomp$10$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65937614;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$EmptyList$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$46$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$46$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__11866$$ = null, $G__11866$$ = function($G__11866$$, $start$jscomp$32$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11866$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11866$$, $start$jscomp$32$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11866$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__11866$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11866$$, 0);
  };
  $G__11866$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11866$$, $start$jscomp$31$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11866$$, $start$jscomp$31$$);
  };
  return $G__11866$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__11867__1$$($G__11867__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11867__1$$, $cljs$core$count$$(this));
  }
  var $G__11867$$ = null, $G__11867$$ = function($G__11867$$, $start$jscomp$34$$) {
    switch(arguments.length) {
      case 1:
        return $G__11867__1$$.call(this, $G__11867$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11867$$, $start$jscomp$34$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11867$$.$cljs$core$IFn$_invoke$arity$1$ = $G__11867__1$$;
  $G__11867$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11867__1$$, $G__11867$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11867__1$$, $G__11867$$);
  };
  return $G__11867$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return 0;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$empty_ordered_hash$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$155$$, $other$jscomp$47$$) {
  return (null != $other$jscomp$47$$ ? $other$jscomp$47$$.$cljs$lang$protocol_mask$partition0$$ & 33554432 || $cljs$core$PROTOCOL_SENTINEL$$ === $other$jscomp$47$$.$cljs$core$IList$$ || ($other$jscomp$47$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IList$$, $other$jscomp$47$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IList$$, $other$jscomp$47$$)) || $cljs$core$sequential_QMARK_$$($other$jscomp$47$$) ? null == $cljs$core$seq$$($other$jscomp$47$$) : 
  !1;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$157$$, $f$jscomp$148$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$148$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$158$$, $f$jscomp$149$$, $start$jscomp$35$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$149$$, $start$jscomp$35$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$162$$, $meta__$1$jscomp$1$$) {
  return new $cljs$core$EmptyList$$($meta__$1$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$163$$, $o$jscomp$69$$) {
  return new $cljs$core$List$$(this.$meta$, $o$jscomp$69$$, null, 1, null);
};
var $cljs$core$List$EMPTY$$ = new $cljs$core$EmptyList$$(null);
$cljs$core$EmptyList$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
var $cljs$core$list$$ = function $cljs$core$list$$($var_args$jscomp$136$$) {
  for (var $args__9188__auto__$jscomp$1$$ = [], $len__9181__auto___11871$$ = arguments.length, $i__9182__auto___11872$$ = 0;;) {
    if ($i__9182__auto___11872$$ < $len__9181__auto___11871$$) {
      $args__9188__auto__$jscomp$1$$.push(arguments[$i__9182__auto___11872$$]), $i__9182__auto___11872$$ += 1;
    } else {
      break;
    }
  }
  return $cljs$core$list$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < $args__9188__auto__$jscomp$1$$.length ? new $cljs$core$IndexedSeq$$($args__9188__auto__$jscomp$1$$.slice(0), 0, null) : null);
};
$cljs$core$list$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$) {
  if ($i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$ instanceof $cljs$core$IndexedSeq$$ && 0 === $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$.$i$) {
    var $JSCompiler_temp$jscomp$32_arr$jscomp$77_arr$jscomp$inline_178$$ = $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$.$arr$;
  } else {
    a: {
      for ($JSCompiler_temp$jscomp$32_arr$jscomp$77_arr$jscomp$inline_178$$ = [];;) {
        if (null != $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$) {
          $JSCompiler_temp$jscomp$32_arr$jscomp$77_arr$jscomp$inline_178$$.push($i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$.$cljs$core$ISeq$_first$arity$1$(null)), $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$ = $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$.$cljs$core$INext$_next$arity$1$(null);
        } else {
          break a;
        }
      }
    }
  }
  $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$ = $JSCompiler_temp$jscomp$32_arr$jscomp$77_arr$jscomp$inline_178$$.length;
  for (var $G__11876_r$jscomp$26$$ = $cljs$core$List$EMPTY$$;;) {
    if (0 < $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$) {
      var $G__11875$$ = $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$ - 1, $G__11876_r$jscomp$26$$ = $G__11876_r$jscomp$26$$.$cljs$core$ICollection$_conj$arity$2$(null, $JSCompiler_temp$jscomp$32_arr$jscomp$77_arr$jscomp$inline_178$$[$i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$ - 1]);
      $i$jscomp$157_xs$jscomp$8_xs__$1$jscomp$inline_179$$ = $G__11875$$;
    } else {
      return $G__11876_r$jscomp$26$$;
    }
  }
};
$cljs$core$list$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$list$$.$cljs$lang$applyTo$ = function($seq11870$$) {
  return $cljs$core$list$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq11870$$));
};
function $cljs$core$Cons$$($meta$jscomp$12$$, $first$jscomp$5$$, $rest$jscomp$9$$, $__hash$jscomp$2$$) {
  this.$meta$ = $meta$jscomp$12$$;
  this.first = $first$jscomp$5$$;
  this.$rest$ = $rest$jscomp$9$$;
  this.$__hash$ = $__hash$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65929452;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Cons$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$48$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$48$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__11877$$ = null, $G__11877$$ = function($G__11877$$, $start$jscomp$37$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11877$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11877$$, $start$jscomp$37$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11877$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__11877$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11877$$, 0);
  };
  $G__11877$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11877$$, $start$jscomp$36$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11877$$, $start$jscomp$36$$);
  };
  return $G__11877$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__11878__1$$($G__11878__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11878__1$$, $cljs$core$count$$(this));
  }
  var $G__11878$$ = null, $G__11878$$ = function($G__11878$$, $start$jscomp$39$$) {
    switch(arguments.length) {
      case 1:
        return $G__11878__1$$.call(this, $G__11878$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11878$$, $start$jscomp$39$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11878$$.$cljs$core$IFn$_invoke$arity$1$ = $G__11878__1$$;
  $G__11878$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11878__1$$, $G__11878$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11878__1$$, $G__11878$$);
  };
  return $G__11878$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return null == this.$rest$ ? null : $cljs$core$seq$$(this.$rest$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$2_h__8402__auto____$1$jscomp$2$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$2_h__8402__auto____$1$jscomp$2$$ ? $h__8402__auto__$jscomp$2_h__8402__auto____$1$jscomp$2$$ : this.$__hash$ = $h__8402__auto__$jscomp$2_h__8402__auto____$1$jscomp$2$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$174$$, $other$jscomp$49$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$49$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$176$$, $f$jscomp$150$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$150$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$177$$, $f$jscomp$151$$, $start$jscomp$40$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$151$$, $start$jscomp$40$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.first;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return null == this.$rest$ ? $cljs$core$List$EMPTY$$ : this.$rest$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$181$$, $meta__$1$jscomp$2$$) {
  return new $cljs$core$Cons$$($meta__$1$jscomp$2$$, this.first, this.$rest$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$182$$, $o$jscomp$70$$) {
  return new $cljs$core$Cons$$(null, $o$jscomp$70$$, this, null);
};
$cljs$core$Cons$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$cons$$($x$jscomp$291$$, $coll$jscomp$183$$) {
  return null == $coll$jscomp$183$$ || null != $coll$jscomp$183$$ && ($coll$jscomp$183$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$183$$.$cljs$core$ISeq$$) ? new $cljs$core$Cons$$(null, $x$jscomp$291$$, $coll$jscomp$183$$, null) : new $cljs$core$Cons$$(null, $x$jscomp$291$$, $cljs$core$seq$$($coll$jscomp$183$$), null);
}
function $cljs$core$Keyword$$($ns$jscomp$4$$, $name$jscomp$81$$, $fqn$$, $_hash$jscomp$2$$) {
  this.$ns$ = $ns$jscomp$4$$;
  this.name = $name$jscomp$81$$;
  this.$fqn$ = $fqn$$;
  this.$_hash$ = $_hash$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2153775105;
  this.$cljs$lang$protocol_mask$partition1$$ = 4096;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Keyword$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(":"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$fqn$)].join("");
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$50$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$50$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($_$jscomp$124$$, $other$jscomp$51$$) {
  return $other$jscomp$51$$ instanceof $cljs$core$Keyword$$ ? this.$fqn$ === $other$jscomp$51$$.$fqn$ : !1;
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__11896$$ = null, $G__11896$$ = function($G__11896$$, $coll$jscomp$186$$, $not_found$jscomp$10$$) {
    switch(arguments.length) {
      case 2:
        return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$186$$, this);
      case 3:
        return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$186$$, this, $not_found$jscomp$10$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11896$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11896$$, $coll$jscomp$184$$) {
    return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$184$$, this);
  };
  $G__11896$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__11896$$, $coll$jscomp$185$$, $not_found$jscomp$9$$) {
    return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$185$$, this, $not_found$jscomp$9$$);
  };
  return $G__11896$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$238$$, $args11895$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args11895$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$jscomp$187$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$187$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$188$$, $not_found$jscomp$11$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$188$$, this, $not_found$jscomp$11$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$3_h__8402__auto____$1$jscomp$3$$ = this.$_hash$;
  return null != $h__8402__auto__$jscomp$3_h__8402__auto____$1$jscomp$3$$ ? $h__8402__auto__$jscomp$3_h__8402__auto____$1$jscomp$3$$ : this.$_hash$ = $h__8402__auto__$jscomp$3_h__8402__auto____$1$jscomp$3$$ = $cljs$core$hash_combine$$($cljs$core$m3_hash_unencoded_chars$$(this.name), $cljs$core$hash_string$$(this.$ns$)) + 2654435769 | 0;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INamed$_name$arity$1$ = function() {
  return this.name;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INamed$_namespace$arity$1$ = function() {
  return this.$ns$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($o$jscomp$71$$, $writer$jscomp$5$$) {
  return $cljs$core$_write$$($writer$jscomp$5$$, [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(":"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$fqn$)].join(""));
};
function $cljs$core$keyword_identical_QMARK_$$($x$jscomp$293$$, $y$jscomp$115$$) {
  return $x$jscomp$293$$ === $y$jscomp$115$$ ? !0 : $x$jscomp$293$$ instanceof $cljs$core$Keyword$$ && $y$jscomp$115$$ instanceof $cljs$core$Keyword$$ ? $x$jscomp$293$$.$fqn$ === $y$jscomp$115$$.$fqn$ : !1;
}
function $cljs$core$namespace$$($x$jscomp$295$$) {
  if (null != $x$jscomp$295$$ && ($x$jscomp$295$$.$cljs$lang$protocol_mask$partition1$$ & 4096 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$295$$.$cljs$core$INamed$$)) {
    return $x$jscomp$295$$.$cljs$core$INamed$_namespace$arity$1$(null);
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Doesn't support namespace: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$295$$)].join(""));
}
function $cljs$core$ident_QMARK_$$($x$jscomp$296$$) {
  return $x$jscomp$296$$ instanceof $cljs$core$Keyword$$ || $x$jscomp$296$$ instanceof $cljs$core$Symbol$$;
}
var $cljs$core$keyword$$ = function $cljs$core$keyword$$($var_args$jscomp$137$$) {
  for (var $args11899$$ = [], $len__9181__auto___11902$$ = arguments.length, $i__9182__auto___11903$$ = 0;;) {
    if ($i__9182__auto___11903$$ < $len__9181__auto___11902$$) {
      $args11899$$.push(arguments[$i__9182__auto___11903$$]), $i__9182__auto___11903$$ += 1;
    } else {
      break;
    }
  }
  switch($args11899$$.length) {
    case 1:
      return $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args11899$$.length)].join(""));
  }
};
$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$ = function($name$jscomp$83$$) {
  if ($name$jscomp$83$$ instanceof $cljs$core$Keyword$$) {
    return $name$jscomp$83$$;
  }
  if ($name$jscomp$83$$ instanceof $cljs$core$Symbol$$) {
    return new $cljs$core$Keyword$$($cljs$core$namespace$$($name$jscomp$83$$), $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$83$$) : $cljs$core$name$$.call(null, $name$jscomp$83$$), $name$jscomp$83$$.$str$, null);
  }
  if ("string" === typeof $name$jscomp$83$$) {
    var $parts$jscomp$4$$ = $name$jscomp$83$$.split("/");
    return 2 === $parts$jscomp$4$$.length ? new $cljs$core$Keyword$$($parts$jscomp$4$$[0], $parts$jscomp$4$$[1], $name$jscomp$83$$, null) : new $cljs$core$Keyword$$(null, $parts$jscomp$4$$[0], $name$jscomp$83$$, null);
  }
  return null;
};
$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$2$ = function($ns$jscomp$6$$, $name$jscomp$84$$) {
  var $ns__$1$$ = $ns$jscomp$6$$ instanceof $cljs$core$Keyword$$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$6$$) : $cljs$core$name$$.call(null, $ns$jscomp$6$$) : $ns$jscomp$6$$ instanceof $cljs$core$Symbol$$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$6$$) : $cljs$core$name$$.call(null, $ns$jscomp$6$$) : $ns$jscomp$6$$, $name__$1$$ = $name$jscomp$84$$ instanceof 
  $cljs$core$Keyword$$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$84$$) : $cljs$core$name$$.call(null, $name$jscomp$84$$) : $name$jscomp$84$$ instanceof $cljs$core$Symbol$$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$84$$) : $cljs$core$name$$.call(null, $name$jscomp$84$$) : $name$jscomp$84$$;
  return new $cljs$core$Keyword$$($ns__$1$$, $name__$1$$, [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$truth_$$($ns__$1$$) ? [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ns__$1$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("/")].join("") : null), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($name__$1$$)].join(""), null);
};
$cljs$core$keyword$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$LazySeq$$($meta$jscomp$14$$, $fn$jscomp$5$$, $s$jscomp$50$$, $__hash$jscomp$4$$) {
  this.$meta$ = $meta$jscomp$14$$;
  this.$fn$ = $fn$jscomp$5$$;
  this.$s$ = $s$jscomp$50$$;
  this.$__hash$ = $__hash$jscomp$4$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 1;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$LazySeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$52$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$52$$);
};
function $JSCompiler_StaticMethods_sval$$($JSCompiler_StaticMethods_sval$self$$) {
  null != $JSCompiler_StaticMethods_sval$self$$.$fn$ && ($JSCompiler_StaticMethods_sval$self$$.$s$ = $JSCompiler_StaticMethods_sval$self$$.$fn$.$cljs$core$IFn$_invoke$arity$0$ ? $JSCompiler_StaticMethods_sval$self$$.$fn$.$cljs$core$IFn$_invoke$arity$0$() : $JSCompiler_StaticMethods_sval$self$$.$fn$.call(null), $JSCompiler_StaticMethods_sval$self$$.$fn$ = null);
  return $JSCompiler_StaticMethods_sval$self$$.$s$;
}
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__11906$$ = null, $G__11906$$ = function($G__11906$$, $start$jscomp$42$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11906$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11906$$, $start$jscomp$42$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11906$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__11906$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11906$$, 0);
  };
  $G__11906$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11906$$, $start$jscomp$41$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11906$$, $start$jscomp$41$$);
  };
  return $G__11906$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__11907__1$$($G__11907__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11907__1$$, $cljs$core$count$$(this));
  }
  var $G__11907$$ = null, $G__11907$$ = function($G__11907$$, $start$jscomp$44$$) {
    switch(arguments.length) {
      case 1:
        return $G__11907__1$$.call(this, $G__11907$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11907$$, $start$jscomp$44$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11907$$.$cljs$core$IFn$_invoke$arity$1$ = $G__11907__1$$;
  $G__11907$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11907__1$$, $G__11907$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11907__1$$, $G__11907$$);
  };
  return $G__11907$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  this.$cljs$core$ISeqable$_seq$arity$1$(null);
  return null == this.$s$ ? null : $cljs$core$next$$(this.$s$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$4_h__8402__auto____$1$jscomp$4$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$4_h__8402__auto____$1$jscomp$4$$ ? $h__8402__auto__$jscomp$4_h__8402__auto____$1$jscomp$4$$ : this.$__hash$ = $h__8402__auto__$jscomp$4_h__8402__auto____$1$jscomp$4$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$198$$, $other$jscomp$53$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$53$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$201$$, $f$jscomp$152$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$152$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$202$$, $f$jscomp$153$$, $start$jscomp$45$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$153$$, $start$jscomp$45$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  this.$cljs$core$ISeqable$_seq$arity$1$(null);
  return null == this.$s$ ? null : $cljs$core$first$$(this.$s$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  this.$cljs$core$ISeqable$_seq$arity$1$(null);
  return null != this.$s$ ? $cljs$core$rest$$(this.$s$) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  $JSCompiler_StaticMethods_sval$$(this);
  if (null == this.$s$) {
    return null;
  }
  for (var $ls$$ = this.$s$;;) {
    if ($ls$$ instanceof $cljs$core$LazySeq$$) {
      $ls$$ = $JSCompiler_StaticMethods_sval$$($ls$$);
    } else {
      return this.$s$ = $ls$$, $cljs$core$seq$$(this.$s$);
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$206$$, $meta__$1$jscomp$3$$) {
  return new $cljs$core$LazySeq$$($meta__$1$jscomp$3$$, this.$fn$, this.$s$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$207$$, $o$jscomp$72$$) {
  return $cljs$core$cons$$($o$jscomp$72$$, this);
};
$cljs$core$LazySeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$ChunkBuffer$$($buf$$, $end$jscomp$6$$) {
  this.$buf$ = $buf$$;
  this.end = $end$jscomp$6$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$ChunkBuffer$$.prototype.add = function($o$jscomp$73$$) {
  this.$buf$[this.end] = $o$jscomp$73$$;
  return this.end += 1;
};
$cljs$core$ChunkBuffer$$.prototype.$chunk$ = function() {
  var $ret$jscomp$6$$ = new $cljs$core$ArrayChunk$$(this.$buf$, 0, this.end);
  this.$buf$ = null;
  return $ret$jscomp$6$$;
};
$cljs$core$ChunkBuffer$$.prototype.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end;
};
function $cljs$core$ArrayChunk$$($arr$jscomp$79$$, $off$$, $end$jscomp$8$$) {
  this.$arr$ = $arr$jscomp$79$$;
  this.$off$ = $off$$;
  this.end = $end$jscomp$8$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 524306;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayChunk$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end - this.$off$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$208$$, $i$jscomp$158$$) {
  return this.$arr$[this.$off$ + $i$jscomp$158$$];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$209$$, $i$jscomp$159$$, $not_found$jscomp$12$$) {
  return 0 <= $i$jscomp$159$$ && $i$jscomp$159$$ < this.end - this.$off$ ? this.$arr$[this.$off$ + $i$jscomp$159$$] : $not_found$jscomp$12$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunk$_drop_first$arity$1$ = function() {
  if (this.$off$ === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new $cljs$core$ArrayChunk$$(this.$arr$, this.$off$ + 1, this.end);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$211$$, $f$jscomp$154$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$jscomp$154$$, this.$arr$[this.$off$], this.$off$ + 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$212$$, $f$jscomp$155$$, $start$jscomp$46$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$jscomp$155$$, $start$jscomp$46$$, this.$off$);
};
function $cljs$core$ChunkedCons$$($chunk$jscomp$6$$, $more$jscomp$25$$, $meta$jscomp$16$$, $__hash$jscomp$6$$) {
  this.$chunk$ = $chunk$jscomp$6$$;
  this.$more$ = $more$jscomp$25$$;
  this.$meta$ = $meta$jscomp$16$$;
  this.$__hash$ = $__hash$jscomp$6$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 31850732;
  this.$cljs$lang$protocol_mask$partition1$$ = 1536;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ChunkedCons$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$54$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$54$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__11916$$ = null, $G__11916$$ = function($G__11916$$, $start$jscomp$48$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11916$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11916$$, $start$jscomp$48$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11916$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__11916$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11916$$, 0);
  };
  $G__11916$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11916$$, $start$jscomp$47$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11916$$, $start$jscomp$47$$);
  };
  return $G__11916$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__11917__1$$($G__11917__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11917__1$$, $cljs$core$count$$(this));
  }
  var $G__11917$$ = null, $G__11917$$ = function($G__11917$$, $start$jscomp$50$$) {
    switch(arguments.length) {
      case 1:
        return $G__11917__1$$.call(this, $G__11917$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11917$$, $start$jscomp$50$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__11917$$.$cljs$core$IFn$_invoke$arity$1$ = $G__11917__1$$;
  $G__11917$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__11917__1$$, $G__11917$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__11917__1$$, $G__11917$$);
  };
  return $G__11917$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  if (1 < $cljs$core$_count$$(this.$chunk$)) {
    return new $cljs$core$ChunkedCons$$($cljs$core$_drop_first$$(this.$chunk$), this.$more$, this.$meta$, null);
  }
  var $more__$1$$ = $cljs$core$_seq$$(this.$more$);
  return null == $more__$1$$ ? null : $more__$1$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$5_h__8402__auto____$1$jscomp$5$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$5_h__8402__auto____$1$jscomp$5$$ ? $h__8402__auto__$jscomp$5_h__8402__auto____$1$jscomp$5$$ : this.$__hash$ = $h__8402__auto__$jscomp$5_h__8402__auto____$1$jscomp$5$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$221$$, $other$jscomp$55$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$55$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this.$chunk$, 0);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return 1 < $cljs$core$_count$$(this.$chunk$) ? new $cljs$core$ChunkedCons$$($cljs$core$_drop_first$$(this.$chunk$), this.$more$, this.$meta$, null) : null == this.$more$ ? $cljs$core$List$EMPTY$$ : this.$more$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$ = function() {
  return this.$chunk$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$ = function() {
  return null == this.$more$ ? $cljs$core$List$EMPTY$$ : this.$more$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$228$$, $m$jscomp$48$$) {
  return new $cljs$core$ChunkedCons$$(this.$chunk$, this.$more$, $m$jscomp$48$$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($this$$jscomp$39$$, $o$jscomp$74$$) {
  return $cljs$core$cons$$($o$jscomp$74$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedNext$_chunked_next$arity$1$ = function() {
  return null == this.$more$ ? null : this.$more$;
};
$cljs$core$ChunkedCons$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$chunk_cons$$($chunk$jscomp$8$$, $rest$jscomp$11$$) {
  return 0 === $cljs$core$_count$$($chunk$jscomp$8$$) ? $rest$jscomp$11$$ : new $cljs$core$ChunkedCons$$($chunk$jscomp$8$$, $rest$jscomp$11$$, null, null);
}
function $cljs$core$chunk_append$$($b$jscomp$117$$, $x$jscomp$315$$) {
  $b$jscomp$117$$.add($x$jscomp$315$$);
}
function $cljs$core$to_array$$($s$jscomp$55_s__$1$jscomp$1$$) {
  for (var $ary$$ = [];;) {
    if ($cljs$core$seq$$($s$jscomp$55_s__$1$jscomp$1$$)) {
      $ary$$.push($cljs$core$first$$($s$jscomp$55_s__$1$jscomp$1$$)), $s$jscomp$55_s__$1$jscomp$1$$ = $cljs$core$next$$($s$jscomp$55_s__$1$jscomp$1$$);
    } else {
      return $ary$$;
    }
  }
}
function $cljs$core$bounded_count$$($n$jscomp$85$$, $coll$jscomp$231$$) {
  if ($cljs$core$counted_QMARK_$$($coll$jscomp$231$$)) {
    return $cljs$core$count$$($coll$jscomp$231$$);
  }
  for (var $G__11973_i$jscomp$164$$ = 0, $G__11974_s$jscomp$60$$ = $cljs$core$seq$$($coll$jscomp$231$$);;) {
    if (null != $G__11974_s$jscomp$60$$ && $G__11973_i$jscomp$164$$ < $n$jscomp$85$$) {
      $G__11973_i$jscomp$164$$ += 1, $G__11974_s$jscomp$60$$ = $cljs$core$next$$($G__11974_s$jscomp$60$$);
    } else {
      return $G__11973_i$jscomp$164$$;
    }
  }
}
var $cljs$core$spread$$ = function $cljs$core$spread$$($G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$) {
  if (null == $G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$) {
    var $JSCompiler_temp$jscomp$35_JSCompiler_temp$jscomp$36_JSCompiler_temp_const$jscomp$38$$ = null;
  } else {
    if (null == $cljs$core$next$$($G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$)) {
      $JSCompiler_temp$jscomp$35_JSCompiler_temp$jscomp$36_JSCompiler_temp_const$jscomp$38$$ = $cljs$core$seq$$($cljs$core$first$$($G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$));
    } else {
      $JSCompiler_temp$jscomp$35_JSCompiler_temp$jscomp$36_JSCompiler_temp_const$jscomp$38$$ = $cljs$core$cons$$;
      var $JSCompiler_temp_const$jscomp$37$$ = $cljs$core$first$$($G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$);
      $G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$ = $cljs$core$next$$($G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$);
      $G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$ = $cljs$core$spread$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$spread$$.$cljs$core$IFn$_invoke$arity$1$($G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$) : $cljs$core$spread$$.call(null, $G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$);
      $JSCompiler_temp$jscomp$35_JSCompiler_temp$jscomp$36_JSCompiler_temp_const$jscomp$38$$ = $JSCompiler_temp$jscomp$35_JSCompiler_temp$jscomp$36_JSCompiler_temp_const$jscomp$38$$($JSCompiler_temp_const$jscomp$37$$, $G__11976$jscomp$inline_183_JSCompiler_inline_result$jscomp$39_arglist$$);
    }
  }
  return $JSCompiler_temp$jscomp$35_JSCompiler_temp$jscomp$36_JSCompiler_temp_const$jscomp$38$$;
}, $cljs$core$conj_BANG_$$ = function $cljs$core$conj_BANG_$$($var_args$jscomp$145$$) {
  for (var $args12005$$ = [], $len__9181__auto___12011$$ = arguments.length, $i__9182__auto___12012$$ = 0;;) {
    if ($i__9182__auto___12012$$ < $len__9181__auto___12011$$) {
      $args12005$$.push(arguments[$i__9182__auto___12012$$]), $i__9182__auto___12012$$ += 1;
    } else {
      break;
    }
  }
  switch($args12005$$.length) {
    case 0:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args12005$$.slice(2), 0, null));
  }
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return $cljs$core$_as_transient$$($cljs$core$PersistentVector$EMPTY$$);
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ = function($tcoll$jscomp$8$$) {
  return $tcoll$jscomp$8$$;
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($tcoll$jscomp$9$$, $val$jscomp$47$$) {
  return $cljs$core$_conj_BANG_$$($tcoll$jscomp$9$$, $val$jscomp$47$$);
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__12015_ntcoll_tcoll$jscomp$10$$, $G__12016_val$jscomp$48$$, $G__12017_vals$$) {
  for (;;) {
    if ($G__12015_ntcoll_tcoll$jscomp$10$$ = $cljs$core$_conj_BANG_$$($G__12015_ntcoll_tcoll$jscomp$10$$, $G__12016_val$jscomp$48$$), $cljs$core$truth_$$($G__12017_vals$$)) {
      $G__12016_val$jscomp$48$$ = $cljs$core$first$$($G__12017_vals$$), $G__12017_vals$$ = $cljs$core$next$$($G__12017_vals$$);
    } else {
      return $G__12015_ntcoll_tcoll$jscomp$10$$;
    }
  }
};
$cljs$core$conj_BANG_$$.$cljs$lang$applyTo$ = function($G__12008_seq12006$$) {
  var $G__12007$$ = $cljs$core$first$$($G__12008_seq12006$$), $seq12006__$1_seq12006__$2$$ = $cljs$core$next$$($G__12008_seq12006$$);
  $G__12008_seq12006$$ = $cljs$core$first$$($seq12006__$1_seq12006__$2$$);
  $seq12006__$1_seq12006__$2$$ = $cljs$core$next$$($seq12006__$1_seq12006__$2$$);
  return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$($G__12007$$, $G__12008_seq12006$$, $seq12006__$1_seq12006__$2$$);
};
$cljs$core$conj_BANG_$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$apply_to$$($f$jscomp$156$$, $argc$$, $a9025_args$jscomp$15$$) {
  var $args__$1_b9026$$ = $cljs$core$seq$$($a9025_args$jscomp$15$$);
  if (0 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$156$$.call(null);
  }
  $a9025_args$jscomp$15$$ = $cljs$core$_first$$($args__$1_b9026$$);
  var $args__$2_c9027$$ = $cljs$core$_rest$$($args__$1_b9026$$);
  if (1 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$1$($a9025_args$jscomp$15$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$1$($a9025_args$jscomp$15$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$);
  }
  var $args__$1_b9026$$ = $cljs$core$_first$$($args__$2_c9027$$), $args__$3_d9028$$ = $cljs$core$_rest$$($args__$2_c9027$$);
  if (2 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$($a9025_args$jscomp$15$$, $args__$1_b9026$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$($a9025_args$jscomp$15$$, $args__$1_b9026$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$);
  }
  var $args__$2_c9027$$ = $cljs$core$_first$$($args__$3_d9028$$), $args__$4_e9029$$ = $cljs$core$_rest$$($args__$3_d9028$$);
  if (3 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$3$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$3$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$);
  }
  var $args__$3_d9028$$ = $cljs$core$_first$$($args__$4_e9029$$), $args__$5_f9030$$ = $cljs$core$_rest$$($args__$4_e9029$$);
  if (4 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$4$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$4$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$);
  }
  var $args__$4_e9029$$ = $cljs$core$_first$$($args__$5_f9030$$), $args__$6_g9031$$ = $cljs$core$_rest$$($args__$5_f9030$$);
  if (5 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$5$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$5$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$5$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$5$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, 
    $args__$3_d9028$$, $args__$4_e9029$$);
  }
  var $args__$5_f9030$$ = $cljs$core$_first$$($args__$6_g9031$$), $args__$7_h9032$$ = $cljs$core$_rest$$($args__$6_g9031$$);
  if (6 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$6$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$6$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$6$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$6$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, 
    $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$);
  }
  var $args__$6_g9031$$ = $cljs$core$_first$$($args__$7_h9032$$), $args__$8_i9033$$ = $cljs$core$_rest$$($args__$7_h9032$$);
  if (7 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$7$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$7$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$7$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$7$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$) : $f$jscomp$156$$.call(null, 
    $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$);
  }
  var $args__$7_h9032$$ = $cljs$core$_first$$($args__$8_i9033$$), $args__$9_j9034$$ = $cljs$core$_rest$$($args__$8_i9033$$);
  if (8 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$8$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$8$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$8$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$8$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, 
    $args__$7_h9032$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$);
  }
  var $args__$8_i9033$$ = $cljs$core$_first$$($args__$9_j9034$$), $args__$10_k9035$$ = $cljs$core$_rest$$($args__$9_j9034$$);
  if (9 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$9$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$9$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$9$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$9$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, 
    $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$);
  }
  var $args__$9_j9034$$ = $cljs$core$_first$$($args__$10_k9035$$), $args__$11_l9036$$ = $cljs$core$_rest$$($args__$10_k9035$$);
  if (10 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$10$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$10$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$10$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$10$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, 
    $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$);
  }
  var $args__$10_k9035$$ = $cljs$core$_first$$($args__$11_l9036$$), $args__$12_m9037$$ = $cljs$core$_rest$$($args__$11_l9036$$);
  if (11 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$11$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$11$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$11$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$11$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, 
    $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$);
  }
  var $args__$11_l9036$$ = $cljs$core$_first$$($args__$12_m9037$$), $args__$13_n9038$$ = $cljs$core$_rest$$($args__$12_m9037$$);
  if (12 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$12$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$12$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$12$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$12$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, 
    $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$);
  }
  var $args__$12_m9037$$ = $cljs$core$_first$$($args__$13_n9038$$), $args__$14_o9039$$ = $cljs$core$_rest$$($args__$13_n9038$$);
  if (13 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$13$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$13$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$13$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$13$($a9025_args$jscomp$15$$, $args__$1_b9026$$, 
    $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$);
  }
  var $args__$13_n9038$$ = $cljs$core$_first$$($args__$14_o9039$$), $args__$15_p9040$$ = $cljs$core$_rest$$($args__$14_o9039$$);
  if (14 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$14$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$14$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$14$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$14$($a9025_args$jscomp$15$$, 
    $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, 
    $args__$12_m9037$$, $args__$13_n9038$$);
  }
  var $args__$14_o9039$$ = $cljs$core$_first$$($args__$15_p9040$$), $args__$16_q9041$$ = $cljs$core$_rest$$($args__$15_p9040$$);
  if (15 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$15$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$15$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$15$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$15$($a9025_args$jscomp$15$$, 
    $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, 
    $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$);
  }
  var $args__$15_p9040$$ = $cljs$core$_first$$($args__$16_q9041$$), $args__$17_r9042$$ = $cljs$core$_rest$$($args__$16_q9041$$);
  if (16 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$16$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$16$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$16$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$16$($a9025_args$jscomp$15$$, 
    $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, 
    $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$);
  }
  var $args__$16_q9041$$ = $cljs$core$_first$$($args__$17_r9042$$), $args__$18_s9043$$ = $cljs$core$_rest$$($args__$17_r9042$$);
  if (17 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$17$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$17$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$17$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$17$($a9025_args$jscomp$15$$, 
    $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, 
    $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$);
  }
  var $args__$17_r9042$$ = $cljs$core$_first$$($args__$18_s9043$$), $args__$19_args__$20$$ = $cljs$core$_rest$$($args__$18_s9043$$);
  if (18 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$18$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$18$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$18$ ? 
    $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$18$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, 
    $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$);
  }
  $args__$18_s9043$$ = $cljs$core$_first$$($args__$19_args__$20$$);
  $args__$19_args__$20$$ = $cljs$core$_rest$$($args__$19_args__$20$$);
  if (19 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$19$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$19$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$, $args__$18_s9043$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$19$ ? 
    $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$19$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$, $args__$18_s9043$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, 
    $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$, $args__$18_s9043$$);
  }
  var $t9044$$ = $cljs$core$_first$$($args__$19_args__$20$$);
  $cljs$core$_rest$$($args__$19_args__$20$$);
  if (20 === $argc$$) {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$20$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$20$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$, $args__$18_s9043$$, $t9044$$) : $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$20$ ? 
    $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$20$($a9025_args$jscomp$15$$, $args__$1_b9026$$, $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$, $args__$18_s9043$$, $t9044$$) : $f$jscomp$156$$.call(null, $a9025_args$jscomp$15$$, $args__$1_b9026$$, 
    $args__$2_c9027$$, $args__$3_d9028$$, $args__$4_e9029$$, $args__$5_f9030$$, $args__$6_g9031$$, $args__$7_h9032$$, $args__$8_i9033$$, $args__$9_j9034$$, $args__$10_k9035$$, $args__$11_l9036$$, $args__$12_m9037$$, $args__$13_n9038$$, $args__$14_o9039$$, $args__$15_p9040$$, $args__$16_q9041$$, $args__$17_r9042$$, $args__$18_s9043$$, $t9044$$);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function $cljs$core$apply$$($var_args$jscomp$149$$) {
  for (var $args12059$$ = [], $len__9181__auto___12068$$ = arguments.length, $i__9182__auto___12069$$ = 0;;) {
    if ($i__9182__auto___12069$$ < $len__9181__auto___12068$$) {
      $args12059$$.push(arguments[$i__9182__auto___12069$$]), $i__9182__auto___12069$$ += 1;
    } else {
      break;
    }
  }
  switch($args12059$$.length) {
    case 2:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$04$$(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new $cljs$core$IndexedSeq$$($args12059$$.slice(5), 0, null));
  }
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$157$$, $args$jscomp$16$$) {
  var $fixed_arity$$ = $f$jscomp$157$$.$cljs$lang$maxFixedArity$;
  if ($f$jscomp$157$$.$cljs$lang$applyTo$) {
    var $bc$$ = $cljs$core$bounded_count$$($fixed_arity$$ + 1, $args$jscomp$16$$);
    return $bc$$ <= $fixed_arity$$ ? $cljs$core$apply_to$$($f$jscomp$157$$, $bc$$, $args$jscomp$16$$) : $f$jscomp$157$$.$cljs$lang$applyTo$($args$jscomp$16$$);
  }
  return $f$jscomp$157$$.apply($f$jscomp$157$$, $cljs$core$to_array$$($args$jscomp$16$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$158$$, $arglist$jscomp$1_x$jscomp$319$$, $args$jscomp$17_fixed_arity$jscomp$1$$) {
  $arglist$jscomp$1_x$jscomp$319$$ = $cljs$core$cons$$($arglist$jscomp$1_x$jscomp$319$$, $args$jscomp$17_fixed_arity$jscomp$1$$);
  $args$jscomp$17_fixed_arity$jscomp$1$$ = $f$jscomp$158$$.$cljs$lang$maxFixedArity$;
  if ($f$jscomp$158$$.$cljs$lang$applyTo$) {
    var $bc$jscomp$1$$ = $cljs$core$bounded_count$$($args$jscomp$17_fixed_arity$jscomp$1$$ + 1, $arglist$jscomp$1_x$jscomp$319$$);
    return $bc$jscomp$1$$ <= $args$jscomp$17_fixed_arity$jscomp$1$$ ? $cljs$core$apply_to$$($f$jscomp$158$$, $bc$jscomp$1$$, $arglist$jscomp$1_x$jscomp$319$$) : $f$jscomp$158$$.$cljs$lang$applyTo$($arglist$jscomp$1_x$jscomp$319$$);
  }
  return $f$jscomp$158$$.apply($f$jscomp$158$$, $cljs$core$to_array$$($arglist$jscomp$1_x$jscomp$319$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$04$$($f$jscomp$159$$, $arglist$jscomp$2_x$jscomp$320$$, $fixed_arity$jscomp$2_y$jscomp$119$$, $args$jscomp$18_bc$jscomp$2$$) {
  $arglist$jscomp$2_x$jscomp$320$$ = $cljs$core$cons$$($arglist$jscomp$2_x$jscomp$320$$, $cljs$core$cons$$($fixed_arity$jscomp$2_y$jscomp$119$$, $args$jscomp$18_bc$jscomp$2$$));
  $fixed_arity$jscomp$2_y$jscomp$119$$ = $f$jscomp$159$$.$cljs$lang$maxFixedArity$;
  return $f$jscomp$159$$.$cljs$lang$applyTo$ ? ($args$jscomp$18_bc$jscomp$2$$ = $cljs$core$bounded_count$$($fixed_arity$jscomp$2_y$jscomp$119$$ + 1, $arglist$jscomp$2_x$jscomp$320$$), $args$jscomp$18_bc$jscomp$2$$ <= $fixed_arity$jscomp$2_y$jscomp$119$$ ? $cljs$core$apply_to$$($f$jscomp$159$$, $args$jscomp$18_bc$jscomp$2$$, $arglist$jscomp$2_x$jscomp$320$$) : $f$jscomp$159$$.$cljs$lang$applyTo$($arglist$jscomp$2_x$jscomp$320$$)) : $f$jscomp$159$$.apply($f$jscomp$159$$, $cljs$core$to_array$$($arglist$jscomp$2_x$jscomp$320$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$jscomp$160$$, $arglist$jscomp$3_x$jscomp$321$$, $fixed_arity$jscomp$3_y$jscomp$120$$, $bc$jscomp$3_z$jscomp$11$$, $args$jscomp$19$$) {
  $arglist$jscomp$3_x$jscomp$321$$ = $cljs$core$cons$$($arglist$jscomp$3_x$jscomp$321$$, $cljs$core$cons$$($fixed_arity$jscomp$3_y$jscomp$120$$, $cljs$core$cons$$($bc$jscomp$3_z$jscomp$11$$, $args$jscomp$19$$)));
  $fixed_arity$jscomp$3_y$jscomp$120$$ = $f$jscomp$160$$.$cljs$lang$maxFixedArity$;
  return $f$jscomp$160$$.$cljs$lang$applyTo$ ? ($bc$jscomp$3_z$jscomp$11$$ = $cljs$core$bounded_count$$($fixed_arity$jscomp$3_y$jscomp$120$$ + 1, $arglist$jscomp$3_x$jscomp$321$$), $bc$jscomp$3_z$jscomp$11$$ <= $fixed_arity$jscomp$3_y$jscomp$120$$ ? $cljs$core$apply_to$$($f$jscomp$160$$, $bc$jscomp$3_z$jscomp$11$$, $arglist$jscomp$3_x$jscomp$321$$) : $f$jscomp$160$$.$cljs$lang$applyTo$($arglist$jscomp$3_x$jscomp$321$$)) : $f$jscomp$160$$.apply($f$jscomp$160$$, $cljs$core$to_array$$($arglist$jscomp$3_x$jscomp$321$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($f$jscomp$161$$, $a$jscomp$136_arglist$jscomp$4$$, $b$jscomp$122_fixed_arity$jscomp$4$$, $bc$jscomp$4_c$jscomp$103$$, $d$jscomp$98$$, $args$jscomp$20$$) {
  $a$jscomp$136_arglist$jscomp$4$$ = $cljs$core$cons$$($a$jscomp$136_arglist$jscomp$4$$, $cljs$core$cons$$($b$jscomp$122_fixed_arity$jscomp$4$$, $cljs$core$cons$$($bc$jscomp$4_c$jscomp$103$$, $cljs$core$cons$$($d$jscomp$98$$, $cljs$core$spread$$($args$jscomp$20$$)))));
  $b$jscomp$122_fixed_arity$jscomp$4$$ = $f$jscomp$161$$.$cljs$lang$maxFixedArity$;
  return $f$jscomp$161$$.$cljs$lang$applyTo$ ? ($bc$jscomp$4_c$jscomp$103$$ = $cljs$core$bounded_count$$($b$jscomp$122_fixed_arity$jscomp$4$$ + 1, $a$jscomp$136_arglist$jscomp$4$$), $bc$jscomp$4_c$jscomp$103$$ <= $b$jscomp$122_fixed_arity$jscomp$4$$ ? $cljs$core$apply_to$$($f$jscomp$161$$, $bc$jscomp$4_c$jscomp$103$$, $a$jscomp$136_arglist$jscomp$4$$) : $f$jscomp$161$$.$cljs$lang$applyTo$($a$jscomp$136_arglist$jscomp$4$$)) : $f$jscomp$161$$.apply($f$jscomp$161$$, $cljs$core$to_array$$($a$jscomp$136_arglist$jscomp$4$$));
}
function $cljs$core$nil_iter$$() {
  "undefined" === typeof $cljs$core$t_cljs$0core12114$$ && ($cljs$core$t_cljs$0core12114$$ = function($meta12115$$) {
    this.$meta12115$ = $meta12115$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$core$t_cljs$0core12114$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_12116$$, $meta12115__$1$$) {
    return new $cljs$core$t_cljs$0core12114$$($meta12115__$1$$);
  }, $cljs$core$t_cljs$0core12114$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta12115$;
  }, $cljs$core$t_cljs$0core12114$$.prototype.$hasNext$ = function() {
    return !1;
  }, $cljs$core$t_cljs$0core12114$$.prototype.next = function() {
    return Error("No such element");
  }, $cljs$core$t_cljs$0core12114$$.prototype.remove = function() {
    return Error("Unsupported operation");
  }, $cljs$core$t_cljs$0core12114$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0meta12115$$], null);
  }, $cljs$core$t_cljs$0core12114$$.$cljs$lang$type$ = !0, $cljs$core$t_cljs$0core12114$$.$cljs$lang$ctorStr$ = "cljs.core/t_cljs$core12114", $cljs$core$t_cljs$0core12114$$.$cljs$lang$ctorPrWriter$ = function($this__8617__auto__$jscomp$18$$, $writer__8618__auto__$jscomp$18$$) {
    return $cljs$core$_write$$($writer__8618__auto__$jscomp$18$$, "cljs.core/t_cljs$core12114");
  });
  return new $cljs$core$t_cljs$0core12114$$($cljs$core$PersistentArrayMap$EMPTY$$);
}
function $cljs$core$every_QMARK_$$($pred$$, $coll$jscomp$240$$) {
  for (;;) {
    if (null == $cljs$core$seq$$($coll$jscomp$240$$)) {
      return !0;
    }
    var $G__12163$jscomp$inline_185_G__12164_JSCompiler_inline_result$jscomp$42$$ = $cljs$core$first$$($coll$jscomp$240$$);
    $G__12163$jscomp$inline_185_G__12164_JSCompiler_inline_result$jscomp$42$$ = $pred$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$$.$cljs$core$IFn$_invoke$arity$1$($G__12163$jscomp$inline_185_G__12164_JSCompiler_inline_result$jscomp$42$$) : $pred$$.call(null, $G__12163$jscomp$inline_185_G__12164_JSCompiler_inline_result$jscomp$42$$);
    if ($cljs$core$truth_$$($G__12163$jscomp$inline_185_G__12164_JSCompiler_inline_result$jscomp$42$$)) {
      $G__12163$jscomp$inline_185_G__12164_JSCompiler_inline_result$jscomp$42$$ = $pred$$;
      var $G__12165$$ = $cljs$core$next$$($coll$jscomp$240$$);
      $pred$$ = $G__12163$jscomp$inline_185_G__12164_JSCompiler_inline_result$jscomp$42$$;
      $coll$jscomp$240$$ = $G__12165$$;
    } else {
      return !1;
    }
  }
}
function $cljs$core$constantly$$() {
  return function() {
    function $G__12178$$($G__12178$$) {
      if (0 < arguments.length) {
        for (var $var_args$jscomp$155$$ = 0, $G__12179__a$$ = Array(arguments.length - 0); $var_args$jscomp$155$$ < $G__12179__a$$.length;) {
          $G__12179__a$$[$var_args$jscomp$155$$] = arguments[$var_args$jscomp$155$$ + 0], ++$var_args$jscomp$155$$;
        }
      }
      return !1;
    }
    $G__12178$$.$cljs$lang$maxFixedArity$ = 0;
    $G__12178$$.$cljs$lang$applyTo$ = function($G__12178$$) {
      $cljs$core$seq$$($G__12178$$);
      return !1;
    };
    $G__12178$$.$cljs$core$IFn$_invoke$arity$variadic$ = function() {
      return !1;
    };
    return $G__12178$$;
  }();
}
function $cljs$core$partial$cljs$0core$0IFn$0_invoke$0arity$02$$() {
  var $f$jscomp$173$$ = $cljs$spec$alpha$valid_QMARK_$$, $arg1$jscomp$1$$ = $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$;
  return function() {
    function $G__12236__3$$($G__12236__3$$, $G__12236__2$$, $G__12236__1$$) {
      return $f$jscomp$173$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$jscomp$173$$.$cljs$core$IFn$_invoke$arity$4$($arg1$jscomp$1$$, $G__12236__3$$, $G__12236__2$$, $G__12236__1$$) : $f$jscomp$173$$.call(null, $arg1$jscomp$1$$, $G__12236__3$$, $G__12236__2$$, $G__12236__1$$);
    }
    function $G__12236__2$$($G__12236__3$$, $G__12236__2$$) {
      return $f$jscomp$173$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$173$$.$cljs$core$IFn$_invoke$arity$3$($arg1$jscomp$1$$, $G__12236__3$$, $G__12236__2$$) : $f$jscomp$173$$.call(null, $arg1$jscomp$1$$, $G__12236__3$$, $G__12236__2$$);
    }
    function $G__12236__1$$($G__12236__3$$) {
      return $f$jscomp$173$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$173$$.$cljs$core$IFn$_invoke$arity$2$($arg1$jscomp$1$$, $G__12236__3$$) : $f$jscomp$173$$.call(null, $arg1$jscomp$1$$, $G__12236__3$$);
    }
    function $G__12236__0$$() {
      return $f$jscomp$173$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$173$$.$cljs$core$IFn$_invoke$arity$1$($arg1$jscomp$1$$) : $f$jscomp$173$$.call(null, $arg1$jscomp$1$$);
    }
    var $G__12236$$ = null, $G__12236__4$$ = function() {
      function $G__12236__3$$($f$jscomp$173$$, $arg1$jscomp$1$$, $G__12236__3$$, $G__12236__1$$) {
        var $G__12236__0$$ = null;
        if (3 < arguments.length) {
          for (var $G__12236__0$$ = 0, $G__12236$$ = Array(arguments.length - 3); $G__12236__0$$ < $G__12236$$.length;) {
            $G__12236$$[$G__12236__0$$] = arguments[$G__12236__0$$ + 3], ++$G__12236__0$$;
          }
          $G__12236__0$$ = new $cljs$core$IndexedSeq$$($G__12236$$, 0, null);
        }
        return $G__12236__2$$.call(this, $f$jscomp$173$$, $arg1$jscomp$1$$, $G__12236__3$$, $G__12236__0$$);
      }
      function $G__12236__2$$($G__12236__3$$, $G__12236__2$$, $G__12236__1$$, $G__12236__0$$) {
        return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($f$jscomp$173$$, $arg1$jscomp$1$$, $G__12236__3$$, $G__12236__2$$, $G__12236__1$$, $cljs$core$array_seq$$([$G__12236__0$$], 0));
      }
      $G__12236__3$$.$cljs$lang$maxFixedArity$ = 3;
      $G__12236__3$$.$cljs$lang$applyTo$ = function($f$jscomp$173$$) {
        var $arg1$jscomp$1$$ = $cljs$core$first$$($f$jscomp$173$$);
        $f$jscomp$173$$ = $cljs$core$next$$($f$jscomp$173$$);
        var $G__12236__3$$ = $cljs$core$first$$($f$jscomp$173$$);
        $f$jscomp$173$$ = $cljs$core$next$$($f$jscomp$173$$);
        var $G__12236__1$$ = $cljs$core$first$$($f$jscomp$173$$);
        $f$jscomp$173$$ = $cljs$core$rest$$($f$jscomp$173$$);
        return $G__12236__2$$($arg1$jscomp$1$$, $G__12236__3$$, $G__12236__1$$, $f$jscomp$173$$);
      };
      $G__12236__3$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__12236__2$$;
      return $G__12236__3$$;
    }(), $G__12236$$ = function($f$jscomp$173$$, $arg1$jscomp$1$$, $G__12236$$, $var_args$jscomp$164$$) {
      switch(arguments.length) {
        case 0:
          return $G__12236__0$$.call(this);
        case 1:
          return $G__12236__1$$.call(this, $f$jscomp$173$$);
        case 2:
          return $G__12236__2$$.call(this, $f$jscomp$173$$, $arg1$jscomp$1$$);
        case 3:
          return $G__12236__3$$.call(this, $f$jscomp$173$$, $arg1$jscomp$1$$, $G__12236$$);
        default:
          var $x$jscomp$354$$ = null;
          if (3 < arguments.length) {
            for (var $x$jscomp$354$$ = 0, $y$jscomp$145$$ = Array(arguments.length - 3); $x$jscomp$354$$ < $y$jscomp$145$$.length;) {
              $y$jscomp$145$$[$x$jscomp$354$$] = arguments[$x$jscomp$354$$ + 3], ++$x$jscomp$354$$;
            }
            $x$jscomp$354$$ = new $cljs$core$IndexedSeq$$($y$jscomp$145$$, 0, null);
          }
          return $G__12236__4$$.$cljs$core$IFn$_invoke$arity$variadic$($f$jscomp$173$$, $arg1$jscomp$1$$, $G__12236$$, $x$jscomp$354$$);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    $G__12236$$.$cljs$lang$maxFixedArity$ = 3;
    $G__12236$$.$cljs$lang$applyTo$ = $G__12236__4$$.$cljs$lang$applyTo$;
    $G__12236$$.$cljs$core$IFn$_invoke$arity$0$ = $G__12236__0$$;
    $G__12236$$.$cljs$core$IFn$_invoke$arity$1$ = $G__12236__1$$;
    $G__12236$$.$cljs$core$IFn$_invoke$arity$2$ = $G__12236__2$$;
    $G__12236$$.$cljs$core$IFn$_invoke$arity$3$ = $G__12236__3$$;
    $G__12236$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__12236__4$$.$cljs$core$IFn$_invoke$arity$variadic$;
    return $G__12236$$;
  }();
}
function $cljs$core$Atom$$($state$jscomp$1$$, $meta$jscomp$18$$, $validator$$, $watches$$) {
  this.state = $state$jscomp$1$$;
  this.$meta$ = $meta$jscomp$18$$;
  this.$validator$ = $validator$$;
  this.$watches$ = $watches$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 16386;
  this.$cljs$lang$protocol_mask$partition0$$ = 6455296;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Atom$$.prototype;
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$56$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$56$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$jscomp$80$$, $other$jscomp$57$$) {
  return this === $other$jscomp$57$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IDeref$_deref$arity$1$ = function() {
  return this.state;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_notify_watches$arity$3$ = function($G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$, $oldval$jscomp$1$$, $newval$jscomp$1$$) {
  for (var $G__12367_f$jscomp$184_vec__12355$$, $G__12365_seq__12351_seq__12351__$1$$ = $cljs$core$seq$$(this.$watches$), $c__8871__auto___chunk__12352_vec__12358$$ = null, $count__12353$$ = 0, $i__12354$$ = 0;;) {
    if ($i__12354$$ < $count__12353$$) {
      $G__12367_f$jscomp$184_vec__12355$$ = $c__8871__auto___chunk__12352_vec__12358$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__12354$$), $G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__12367_f$jscomp$184_vec__12355$$, 0, null), $G__12367_f$jscomp$184_vec__12355$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__12367_f$jscomp$184_vec__12355$$, 1, null), $G__12367_f$jscomp$184_vec__12355$$.$cljs$core$IFn$_invoke$arity$4$ ? 
      $G__12367_f$jscomp$184_vec__12355$$.$cljs$core$IFn$_invoke$arity$4$($G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$, this, $oldval$jscomp$1$$, $newval$jscomp$1$$) : $G__12367_f$jscomp$184_vec__12355$$.call(null, $G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$, this, $oldval$jscomp$1$$, $newval$jscomp$1$$), $i__12354$$ += 1;
    } else {
      if ($G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$ = $cljs$core$seq$$($G__12365_seq__12351_seq__12351__$1$$)) {
        $G__12365_seq__12351_seq__12351__$1$$ = $G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$, $cljs$core$chunked_seq_QMARK_$$($G__12365_seq__12351_seq__12351__$1$$) ? ($c__8871__auto___chunk__12352_vec__12358$$ = $cljs$core$_chunked_first$$($G__12365_seq__12351_seq__12351__$1$$), $G__12365_seq__12351_seq__12351__$1$$ = $cljs$core$_chunked_rest$$($G__12365_seq__12351_seq__12351__$1$$), $G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$ = $c__8871__auto___chunk__12352_vec__12358$$, 
        $G__12367_f$jscomp$184_vec__12355$$ = $cljs$core$count$$($c__8871__auto___chunk__12352_vec__12358$$), $c__8871__auto___chunk__12352_vec__12358$$ = $G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$, $count__12353$$ = $G__12367_f$jscomp$184_vec__12355$$) : ($c__8871__auto___chunk__12352_vec__12358$$ = $cljs$core$first$$($G__12365_seq__12351_seq__12351__$1$$), $G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__8871__auto___chunk__12352_vec__12358$$, 
        0, null), $G__12367_f$jscomp$184_vec__12355$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__8871__auto___chunk__12352_vec__12358$$, 1, null), $G__12367_f$jscomp$184_vec__12355$$.$cljs$core$IFn$_invoke$arity$4$ ? $G__12367_f$jscomp$184_vec__12355$$.$cljs$core$IFn$_invoke$arity$4$($G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$, this, $oldval$jscomp$1$$, $newval$jscomp$1$$) : $G__12367_f$jscomp$184_vec__12355$$.call(null, $G__12366_key$jscomp$68_temp__5278__auto__$jscomp$2_this$$jscomp$57$$, 
        this, $oldval$jscomp$1$$, $newval$jscomp$1$$), $G__12365_seq__12351_seq__12351__$1$$ = $cljs$core$next$$($G__12365_seq__12351_seq__12351__$1$$), $c__8871__auto___chunk__12352_vec__12358$$ = null, $count__12353$$ = 0), $i__12354$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return this[$goog$UID_PROPERTY_$$] || (this[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
};
function $cljs$core$atom$$($var_args$jscomp$179$$) {
  for (var $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$ = [], $len__9181__auto___12381_x$jscomp$inline_189$$ = arguments.length, $i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$ = 0;;) {
    if ($i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$ < $len__9181__auto___12381_x$jscomp$inline_189$$) {
      $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$.push(arguments[$i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$]), $i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$ += 1;
    } else {
      break;
    }
  }
  switch($args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$.length) {
    case 1:
      return $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(arguments[0]);
    default:
      return $len__9181__auto___12381_x$jscomp$inline_189$$ = arguments[0], $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$ = new $cljs$core$IndexedSeq$$($args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$.slice(1), 0, null), $i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$ = null != $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$ && ($args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$.$cljs$lang$protocol_mask$partition0$$ & 
      64 || $cljs$core$PROTOCOL_SENTINEL$$ === $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$) : $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$, $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$, 
      $cljs$core$cst$0kw$0meta$$), $i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$, $cljs$core$cst$0kw$0validator$$), new $cljs$core$Atom$$($len__9181__auto___12381_x$jscomp$inline_189$$, $args12373_meta$jscomp$inline_192_p__12378$jscomp$inline_190$$, $i__9182__auto___12382_map__12379__$1$jscomp$inline_191_validator$jscomp$inline_193$$, 
      null);
  }
}
function $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($x$jscomp$373$$) {
  return new $cljs$core$Atom$$($x$jscomp$373$$, null, null, null);
}
function $cljs$core$reset_BANG_$$($a$jscomp$161$$, $new_value$jscomp$2$$) {
  if ($a$jscomp$161$$ instanceof $cljs$core$Atom$$) {
    var $old_value_validate$$ = $a$jscomp$161$$.$validator$;
    if (null != $old_value_validate$$ && !$cljs$core$truth_$$($old_value_validate$$.$cljs$core$IFn$_invoke$arity$1$ ? $old_value_validate$$.$cljs$core$IFn$_invoke$arity$1$($new_value$jscomp$2$$) : $old_value_validate$$.call(null, $new_value$jscomp$2$$))) {
      throw Error("Validator rejected reference state");
    }
    $old_value_validate$$ = $a$jscomp$161$$.state;
    $a$jscomp$161$$.state = $new_value$jscomp$2$$;
    null != $a$jscomp$161$$.$watches$ && $cljs$core$_notify_watches$$($a$jscomp$161$$, $old_value_validate$$, $new_value$jscomp$2$$);
    return $new_value$jscomp$2$$;
  }
  return $cljs$core$_reset_BANG_$$($a$jscomp$161$$, $new_value$jscomp$2$$);
}
var $cljs$core$swap_BANG_$$ = function $cljs$core$swap_BANG_$$($var_args$jscomp$180$$) {
  for (var $args12385$$ = [], $len__9181__auto___12399$$ = arguments.length, $i__9182__auto___12400$$ = 0;;) {
    if ($i__9182__auto___12400$$ < $len__9181__auto___12399$$) {
      $args12385$$.push(arguments[$i__9182__auto___12400$$]), $i__9182__auto___12400$$ += 1;
    } else {
      break;
    }
  }
  switch($args12385$$.length) {
    case 2:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], arguments[3], new $cljs$core$IndexedSeq$$($args12385$$.slice(4), 0, null));
  }
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($a$jscomp$162$$, $f$jscomp$186$$) {
  if ($a$jscomp$162$$ instanceof $cljs$core$Atom$$) {
    var $G__12393$jscomp$inline_195_JSCompiler_inline_result$jscomp$45_JSCompiler_temp$jscomp$44$$ = $a$jscomp$162$$.state;
    $G__12393$jscomp$inline_195_JSCompiler_inline_result$jscomp$45_JSCompiler_temp$jscomp$44$$ = $f$jscomp$186$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$186$$.$cljs$core$IFn$_invoke$arity$1$($G__12393$jscomp$inline_195_JSCompiler_inline_result$jscomp$45_JSCompiler_temp$jscomp$44$$) : $f$jscomp$186$$.call(null, $G__12393$jscomp$inline_195_JSCompiler_inline_result$jscomp$45_JSCompiler_temp$jscomp$44$$);
    $G__12393$jscomp$inline_195_JSCompiler_inline_result$jscomp$45_JSCompiler_temp$jscomp$44$$ = $cljs$core$reset_BANG_$$($a$jscomp$162$$, $G__12393$jscomp$inline_195_JSCompiler_inline_result$jscomp$45_JSCompiler_temp$jscomp$44$$);
  } else {
    $G__12393$jscomp$inline_195_JSCompiler_inline_result$jscomp$45_JSCompiler_temp$jscomp$44$$ = $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($a$jscomp$162$$, $f$jscomp$186$$);
  }
  return $G__12393$jscomp$inline_195_JSCompiler_inline_result$jscomp$45_JSCompiler_temp$jscomp$44$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$ = function($JSCompiler_temp$jscomp$46_a$jscomp$163$$, $JSCompiler_inline_result$jscomp$47_f$jscomp$187$$, $x$jscomp$375$$) {
  if ($JSCompiler_temp$jscomp$46_a$jscomp$163$$ instanceof $cljs$core$Atom$$) {
    var $G__12394$jscomp$inline_197$$ = $JSCompiler_temp$jscomp$46_a$jscomp$163$$.state;
    $JSCompiler_inline_result$jscomp$47_f$jscomp$187$$ = $JSCompiler_inline_result$jscomp$47_f$jscomp$187$$.$cljs$core$IFn$_invoke$arity$2$ ? $JSCompiler_inline_result$jscomp$47_f$jscomp$187$$.$cljs$core$IFn$_invoke$arity$2$($G__12394$jscomp$inline_197$$, $x$jscomp$375$$) : $JSCompiler_inline_result$jscomp$47_f$jscomp$187$$.call(null, $G__12394$jscomp$inline_197$$, $x$jscomp$375$$);
    $JSCompiler_temp$jscomp$46_a$jscomp$163$$ = $cljs$core$reset_BANG_$$($JSCompiler_temp$jscomp$46_a$jscomp$163$$, $JSCompiler_inline_result$jscomp$47_f$jscomp$187$$);
  } else {
    $JSCompiler_temp$jscomp$46_a$jscomp$163$$ = $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$46_a$jscomp$163$$, $JSCompiler_inline_result$jscomp$47_f$jscomp$187$$, $x$jscomp$375$$);
  }
  return $JSCompiler_temp$jscomp$46_a$jscomp$163$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$ = function($JSCompiler_temp$jscomp$48_a$jscomp$164$$, $JSCompiler_inline_result$jscomp$49_f$jscomp$188$$, $x$jscomp$376$$, $y$jscomp$160$$) {
  if ($JSCompiler_temp$jscomp$48_a$jscomp$164$$ instanceof $cljs$core$Atom$$) {
    var $G__12396$jscomp$inline_199$$ = $JSCompiler_temp$jscomp$48_a$jscomp$164$$.state;
    $JSCompiler_inline_result$jscomp$49_f$jscomp$188$$ = $JSCompiler_inline_result$jscomp$49_f$jscomp$188$$.$cljs$core$IFn$_invoke$arity$3$ ? $JSCompiler_inline_result$jscomp$49_f$jscomp$188$$.$cljs$core$IFn$_invoke$arity$3$($G__12396$jscomp$inline_199$$, $x$jscomp$376$$, $y$jscomp$160$$) : $JSCompiler_inline_result$jscomp$49_f$jscomp$188$$.call(null, $G__12396$jscomp$inline_199$$, $x$jscomp$376$$, $y$jscomp$160$$);
    $JSCompiler_temp$jscomp$48_a$jscomp$164$$ = $cljs$core$reset_BANG_$$($JSCompiler_temp$jscomp$48_a$jscomp$164$$, $JSCompiler_inline_result$jscomp$49_f$jscomp$188$$);
  } else {
    $JSCompiler_temp$jscomp$48_a$jscomp$164$$ = $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($JSCompiler_temp$jscomp$48_a$jscomp$164$$, $JSCompiler_inline_result$jscomp$49_f$jscomp$188$$, $x$jscomp$376$$, $y$jscomp$160$$);
  }
  return $JSCompiler_temp$jscomp$48_a$jscomp$164$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($a$jscomp$165$$, $f$jscomp$189$$, $x$jscomp$377$$, $y$jscomp$161$$, $more$jscomp$30$$) {
  return $a$jscomp$165$$ instanceof $cljs$core$Atom$$ ? $cljs$core$reset_BANG_$$($a$jscomp$165$$, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$jscomp$189$$, $a$jscomp$165$$.state, $x$jscomp$377$$, $y$jscomp$161$$, $more$jscomp$30$$)) : $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$5$($a$jscomp$165$$, $f$jscomp$189$$, $x$jscomp$377$$, $y$jscomp$161$$, $more$jscomp$30$$);
};
$cljs$core$swap_BANG_$$.$cljs$lang$applyTo$ = function($G__12388_seq12386$$) {
  var $G__12387$$ = $cljs$core$first$$($G__12388_seq12386$$), $G__12389_seq12386__$1$$ = $cljs$core$next$$($G__12388_seq12386$$);
  $G__12388_seq12386$$ = $cljs$core$first$$($G__12389_seq12386__$1$$);
  var $G__12390_seq12386__$2$$ = $cljs$core$next$$($G__12389_seq12386__$1$$), $G__12389_seq12386__$1$$ = $cljs$core$first$$($G__12390_seq12386__$2$$), $seq12386__$3_seq12386__$4$$ = $cljs$core$next$$($G__12390_seq12386__$2$$), $G__12390_seq12386__$2$$ = $cljs$core$first$$($seq12386__$3_seq12386__$4$$), $seq12386__$3_seq12386__$4$$ = $cljs$core$next$$($seq12386__$3_seq12386__$4$$);
  return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$($G__12387$$, $G__12388_seq12386$$, $G__12389_seq12386__$1$$, $G__12390_seq12386__$2$$, $seq12386__$3_seq12386__$4$$);
};
$cljs$core$swap_BANG_$$.$cljs$lang$maxFixedArity$ = 4;
function $cljs$core$Volatile$$($state$jscomp$3$$) {
  this.state = $state$jscomp$3$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32768;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$Volatile$$.prototype.$cljs$core$IVolatile$_vreset_BANG_$arity$2$ = function($_$jscomp$148$$, $new_state$$) {
  return this.state = $new_state$$;
};
$cljs$core$Volatile$$.prototype.$cljs$core$IDeref$_deref$arity$1$ = function() {
  return this.state;
};
var $cljs$core$map$$ = function $cljs$core$map$$($var_args$jscomp$200$$) {
  for (var $args12522$$ = [], $len__9181__auto___12542$$ = arguments.length, $i__9182__auto___12543$$ = 0;;) {
    if ($i__9182__auto___12543$$ < $len__9181__auto___12542$$) {
      $args12522$$.push(arguments[$i__9182__auto___12543$$]), $i__9182__auto___12543$$ += 1;
    } else {
      break;
    }
  }
  switch($args12522$$.length) {
    case 1:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], arguments[3], new $cljs$core$IndexedSeq$$($args12522$$.slice(4), 0, null));
  }
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$1$ = function($f$jscomp$192$$) {
  return function($rf$jscomp$3$$) {
    return function() {
      function $G__12546__2$$($G__12546__2$$, $G__12546__1$$) {
        var $G__12546__0$$ = $f$jscomp$192$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$192$$.$cljs$core$IFn$_invoke$arity$1$($G__12546__1$$) : $f$jscomp$192$$.call(null, $G__12546__1$$);
        return $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$ ? $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$($G__12546__2$$, $G__12546__0$$) : $rf$jscomp$3$$.call(null, $G__12546__2$$, $G__12546__0$$);
      }
      function $G__12546__1$$($f$jscomp$192$$) {
        return $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($f$jscomp$192$$) : $rf$jscomp$3$$.call(null, $f$jscomp$192$$);
      }
      function $G__12546__0$$() {
        return $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$0$ ? $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$0$() : $rf$jscomp$3$$.call(null);
      }
      var $G__12546$$ = null, $G__12546__3$$ = function() {
        function $G__12546__2$$($f$jscomp$192$$, $rf$jscomp$3$$, $G__12546__2$$) {
          var $G__12546__0$$ = null;
          if (2 < arguments.length) {
            for (var $G__12546__0$$ = 0, $G__12546$$ = Array(arguments.length - 2); $G__12546__0$$ < $G__12546$$.length;) {
              $G__12546$$[$G__12546__0$$] = arguments[$G__12546__0$$ + 2], ++$G__12546__0$$;
            }
            $G__12546__0$$ = new $cljs$core$IndexedSeq$$($G__12546$$, 0, null);
          }
          return $G__12546__1$$.call(this, $f$jscomp$192$$, $rf$jscomp$3$$, $G__12546__0$$);
        }
        function $G__12546__1$$($G__12546__2$$, $G__12546__1$$, $G__12546__0$$) {
          $G__12546__1$$ = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$192$$, $G__12546__1$$, $G__12546__0$$);
          return $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$ ? $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$($G__12546__2$$, $G__12546__1$$) : $rf$jscomp$3$$.call(null, $G__12546__2$$, $G__12546__1$$);
        }
        $G__12546__2$$.$cljs$lang$maxFixedArity$ = 2;
        $G__12546__2$$.$cljs$lang$applyTo$ = function($f$jscomp$192$$) {
          var $rf$jscomp$3$$ = $cljs$core$first$$($f$jscomp$192$$);
          $f$jscomp$192$$ = $cljs$core$next$$($f$jscomp$192$$);
          var $G__12546__2$$ = $cljs$core$first$$($f$jscomp$192$$);
          $f$jscomp$192$$ = $cljs$core$rest$$($f$jscomp$192$$);
          return $G__12546__1$$($rf$jscomp$3$$, $G__12546__2$$, $f$jscomp$192$$);
        };
        $G__12546__2$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__12546__1$$;
        return $G__12546__2$$;
      }(), $G__12546$$ = function($f$jscomp$192$$, $rf$jscomp$3$$, $G__12546$$) {
        switch(arguments.length) {
          case 0:
            return $G__12546__0$$.call(this);
          case 1:
            return $G__12546__1$$.call(this, $f$jscomp$192$$);
          case 2:
            return $G__12546__2$$.call(this, $f$jscomp$192$$, $rf$jscomp$3$$);
          default:
            var $result$jscomp$26$$ = null;
            if (2 < arguments.length) {
              for (var $result$jscomp$26$$ = 0, $input$jscomp$18$$ = Array(arguments.length - 2); $result$jscomp$26$$ < $input$jscomp$18$$.length;) {
                $input$jscomp$18$$[$result$jscomp$26$$] = arguments[$result$jscomp$26$$ + 2], ++$result$jscomp$26$$;
              }
              $result$jscomp$26$$ = new $cljs$core$IndexedSeq$$($input$jscomp$18$$, 0, null);
            }
            return $G__12546__3$$.$cljs$core$IFn$_invoke$arity$variadic$($f$jscomp$192$$, $rf$jscomp$3$$, $result$jscomp$26$$);
        }
        throw Error("Invalid arity: " + (arguments.length - 1));
      };
      $G__12546$$.$cljs$lang$maxFixedArity$ = 2;
      $G__12546$$.$cljs$lang$applyTo$ = $G__12546__3$$.$cljs$lang$applyTo$;
      $G__12546$$.$cljs$core$IFn$_invoke$arity$0$ = $G__12546__0$$;
      $G__12546$$.$cljs$core$IFn$_invoke$arity$1$ = $G__12546__1$$;
      $G__12546$$.$cljs$core$IFn$_invoke$arity$2$ = $G__12546__2$$;
      $G__12546$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__12546__3$$.$cljs$core$IFn$_invoke$arity$variadic$;
      return $G__12546$$;
    }();
  };
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$ = function($f$jscomp$193$$, $coll$jscomp$247$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $temp__5278__auto__$jscomp$4$$ = $cljs$core$seq$$($coll$jscomp$247$$);
    if ($temp__5278__auto__$jscomp$4$$) {
      if ($cljs$core$chunked_seq_QMARK_$$($temp__5278__auto__$jscomp$4$$)) {
        for (var $c$jscomp$125$$ = $cljs$core$_chunked_first$$($temp__5278__auto__$jscomp$4$$), $size$jscomp$23$$ = $cljs$core$count$$($c$jscomp$125$$), $b$jscomp$148$$ = new $cljs$core$ChunkBuffer$$(Array($size$jscomp$23$$), 0), $i_12553$$ = 0;;) {
          if ($i_12553$$ < $size$jscomp$23$$) {
            $cljs$core$chunk_append$$($b$jscomp$148$$, function() {
              var $coll$jscomp$247$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($c$jscomp$125$$, $i_12553$$);
              return $f$jscomp$193$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$193$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$247$$) : $f$jscomp$193$$.call(null, $coll$jscomp$247$$);
            }()), $i_12553$$ += 1;
          } else {
            break;
          }
        }
        return $cljs$core$chunk_cons$$($b$jscomp$148$$.$chunk$(), $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($f$jscomp$193$$, $cljs$core$_chunked_rest$$($temp__5278__auto__$jscomp$4$$)));
      }
      return $cljs$core$cons$$(function() {
        var $coll$jscomp$247$$ = $cljs$core$first$$($temp__5278__auto__$jscomp$4$$);
        return $f$jscomp$193$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$193$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$247$$) : $f$jscomp$193$$.call(null, $coll$jscomp$247$$);
      }(), $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($f$jscomp$193$$, $cljs$core$rest$$($temp__5278__auto__$jscomp$4$$)));
    }
    return null;
  }, null, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$ = function($f$jscomp$194$$, $c1$jscomp$1$$, $c2$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$50_s1$$ = $cljs$core$seq$$($c1$jscomp$1$$), $s2$$ = $cljs$core$seq$$($c2$$);
    if ($JSCompiler_temp$jscomp$50_s1$$ && $s2$$) {
      var $JSCompiler_temp_const$jscomp$51$$ = $cljs$core$cons$$;
      var $G__12536$jscomp$inline_201_JSCompiler_inline_result$jscomp$52$$ = $cljs$core$first$$($JSCompiler_temp$jscomp$50_s1$$);
      var $G__12537$jscomp$inline_202$$ = $cljs$core$first$$($s2$$);
      $G__12536$jscomp$inline_201_JSCompiler_inline_result$jscomp$52$$ = $f$jscomp$194$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$194$$.$cljs$core$IFn$_invoke$arity$2$($G__12536$jscomp$inline_201_JSCompiler_inline_result$jscomp$52$$, $G__12537$jscomp$inline_202$$) : $f$jscomp$194$$.call(null, $G__12536$jscomp$inline_201_JSCompiler_inline_result$jscomp$52$$, $G__12537$jscomp$inline_202$$);
      $JSCompiler_temp$jscomp$50_s1$$ = $JSCompiler_temp_const$jscomp$51$$($G__12536$jscomp$inline_201_JSCompiler_inline_result$jscomp$52$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$($f$jscomp$194$$, $cljs$core$rest$$($JSCompiler_temp$jscomp$50_s1$$), $cljs$core$rest$$($s2$$)));
    } else {
      $JSCompiler_temp$jscomp$50_s1$$ = null;
    }
    return $JSCompiler_temp$jscomp$50_s1$$;
  }, null, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$ = function($f$jscomp$195$$, $c1$jscomp$2$$, $c2$jscomp$1$$, $c3$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$53_s1$jscomp$1$$ = $cljs$core$seq$$($c1$jscomp$2$$), $s2$jscomp$1$$ = $cljs$core$seq$$($c2$jscomp$1$$), $s3$$ = $cljs$core$seq$$($c3$$);
    if ($JSCompiler_temp$jscomp$53_s1$jscomp$1$$ && $s2$jscomp$1$$ && $s3$$) {
      var $JSCompiler_temp_const$jscomp$54$$ = $cljs$core$cons$$;
      var $G__12538$jscomp$inline_204_JSCompiler_inline_result$jscomp$55$$ = $cljs$core$first$$($JSCompiler_temp$jscomp$53_s1$jscomp$1$$);
      var $G__12539$jscomp$inline_205$$ = $cljs$core$first$$($s2$jscomp$1$$), $G__12540$jscomp$inline_206$$ = $cljs$core$first$$($s3$$);
      $G__12538$jscomp$inline_204_JSCompiler_inline_result$jscomp$55$$ = $f$jscomp$195$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$195$$.$cljs$core$IFn$_invoke$arity$3$($G__12538$jscomp$inline_204_JSCompiler_inline_result$jscomp$55$$, $G__12539$jscomp$inline_205$$, $G__12540$jscomp$inline_206$$) : $f$jscomp$195$$.call(null, $G__12538$jscomp$inline_204_JSCompiler_inline_result$jscomp$55$$, $G__12539$jscomp$inline_205$$, $G__12540$jscomp$inline_206$$);
      $JSCompiler_temp$jscomp$53_s1$jscomp$1$$ = $JSCompiler_temp_const$jscomp$54$$($G__12538$jscomp$inline_204_JSCompiler_inline_result$jscomp$55$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$($f$jscomp$195$$, $cljs$core$rest$$($JSCompiler_temp$jscomp$53_s1$jscomp$1$$), $cljs$core$rest$$($s2$jscomp$1$$), $cljs$core$rest$$($s3$$)));
    } else {
      $JSCompiler_temp$jscomp$53_s1$jscomp$1$$ = null;
    }
    return $JSCompiler_temp$jscomp$53_s1$jscomp$1$$;
  }, null, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($f$jscomp$196$$, $c1$jscomp$3$$, $c2$jscomp$2$$, $c3$jscomp$1$$, $colls$jscomp$2$$) {
  var $step$jscomp$1$$ = function $cljs$core$step$$($f$jscomp$196$$) {
    return new $cljs$core$LazySeq$$(null, function() {
      var $c1$jscomp$3$$ = $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$seq$$, $f$jscomp$196$$);
      return $cljs$core$every_QMARK_$$($cljs$core$identity$$, $c1$jscomp$3$$) ? $cljs$core$cons$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$, $c1$jscomp$3$$), $cljs$core$step$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$rest$$, $c1$jscomp$3$$))) : null;
    }, null, null);
  };
  return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function() {
    return function($c1$jscomp$3$$) {
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$196$$, $c1$jscomp$3$$);
    };
  }($step$jscomp$1$$), $step$jscomp$1$$($cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$($colls$jscomp$2$$, $c3$jscomp$1$$, $cljs$core$array_seq$$([$c2$jscomp$2$$, $c1$jscomp$3$$], 0))));
};
$cljs$core$map$$.$cljs$lang$applyTo$ = function($G__12525_seq12523$$) {
  var $G__12524$$ = $cljs$core$first$$($G__12525_seq12523$$), $G__12526_seq12523__$1$$ = $cljs$core$next$$($G__12525_seq12523$$);
  $G__12525_seq12523$$ = $cljs$core$first$$($G__12526_seq12523__$1$$);
  var $G__12527_seq12523__$2$$ = $cljs$core$next$$($G__12526_seq12523__$1$$), $G__12526_seq12523__$1$$ = $cljs$core$first$$($G__12527_seq12523__$2$$), $seq12523__$3_seq12523__$4$$ = $cljs$core$next$$($G__12527_seq12523__$2$$), $G__12527_seq12523__$2$$ = $cljs$core$first$$($seq12523__$3_seq12523__$4$$), $seq12523__$3_seq12523__$4$$ = $cljs$core$next$$($seq12523__$3_seq12523__$4$$);
  return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$variadic$($G__12524$$, $G__12525_seq12523$$, $G__12526_seq12523__$1$$, $G__12527_seq12523__$2$$, $seq12523__$3_seq12523__$4$$);
};
$cljs$core$map$$.$cljs$lang$maxFixedArity$ = 4;
var $cljs$core$take$$ = function $cljs$core$take$$($var_args$jscomp$203$$) {
  for (var $args12555$$ = [], $len__9181__auto___12558$$ = arguments.length, $i__9182__auto___12559$$ = 0;;) {
    if ($i__9182__auto___12559$$ < $len__9181__auto___12558$$) {
      $args12555$$.push(arguments[$i__9182__auto___12559$$]), $i__9182__auto___12559$$ += 1;
    } else {
      break;
    }
  }
  switch($args12555$$.length) {
    case 1:
      return $cljs$core$take$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$take$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args12555$$.length)].join(""));
  }
};
$cljs$core$take$$.$cljs$core$IFn$_invoke$arity$1$ = function($n$jscomp$89$$) {
  if ("number" !== typeof $n$jscomp$89$$) {
    throw Error("Assert failed: (number? n)");
  }
  return function($rf$jscomp$4$$) {
    return function($n$jscomp$89$$) {
      return function() {
        function $na$jscomp$1$$($na$jscomp$1$$, $G__12562__2$$) {
          var $G__12562__1$$ = $cljs$core$_deref$$($n$jscomp$89$$), $G__12562__0$$ = $cljs$core$_vreset_BANG_$$($n$jscomp$89$$, $cljs$core$_deref$$($n$jscomp$89$$) - 1), $G__12562__1$$ = 0 < $G__12562__1$$ ? $rf$jscomp$4$$.$cljs$core$IFn$_invoke$arity$2$ ? $rf$jscomp$4$$.$cljs$core$IFn$_invoke$arity$2$($na$jscomp$1$$, $G__12562__2$$) : $rf$jscomp$4$$.call(null, $na$jscomp$1$$, $G__12562__2$$) : $na$jscomp$1$$;
          return 0 < $G__12562__0$$ ? $G__12562__1$$ : $cljs$core$reduced_QMARK_$$($G__12562__1$$) ? $G__12562__1$$ : new $cljs$core$Reduced$$($G__12562__1$$);
        }
        function $G__12562__1$$($n$jscomp$89$$) {
          return $rf$jscomp$4$$.$cljs$core$IFn$_invoke$arity$1$ ? $rf$jscomp$4$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$89$$) : $rf$jscomp$4$$.call(null, $n$jscomp$89$$);
        }
        function $G__12562__0$$() {
          return $rf$jscomp$4$$.$cljs$core$IFn$_invoke$arity$0$ ? $rf$jscomp$4$$.$cljs$core$IFn$_invoke$arity$0$() : $rf$jscomp$4$$.call(null);
        }
        var $G__12562$$ = null, $G__12562$$ = function($n$jscomp$89$$, $rf$jscomp$4$$) {
          switch(arguments.length) {
            case 0:
              return $G__12562__0$$.call(this);
            case 1:
              return $G__12562__1$$.call(this, $n$jscomp$89$$);
            case 2:
              return $na$jscomp$1$$.call(this, $n$jscomp$89$$, $rf$jscomp$4$$);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        $G__12562$$.$cljs$core$IFn$_invoke$arity$0$ = $G__12562__0$$;
        $G__12562$$.$cljs$core$IFn$_invoke$arity$1$ = $G__12562__1$$;
        $G__12562$$.$cljs$core$IFn$_invoke$arity$2$ = $na$jscomp$1$$;
        return $G__12562$$;
      }();
    }(new $cljs$core$Volatile$$($n$jscomp$89$$));
  };
};
$cljs$core$take$$.$cljs$core$IFn$_invoke$arity$2$ = function($n$jscomp$90$$, $coll$jscomp$248$$) {
  if ("number" !== typeof $n$jscomp$90$$) {
    throw Error("Assert failed: (number? n)");
  }
  return new $cljs$core$LazySeq$$(null, function() {
    if (0 < $n$jscomp$90$$) {
      var $temp__5278__auto__$jscomp$5$$ = $cljs$core$seq$$($coll$jscomp$248$$);
      return $temp__5278__auto__$jscomp$5$$ ? $cljs$core$cons$$($cljs$core$first$$($temp__5278__auto__$jscomp$5$$), $cljs$core$take$$.$cljs$core$IFn$_invoke$arity$2$($n$jscomp$90$$ - 1, $cljs$core$rest$$($temp__5278__auto__$jscomp$5$$))) : null;
    }
    return null;
  }, null, null);
};
$cljs$core$take$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$($n$jscomp$92$$, $coll$jscomp$249$$) {
  if ("number" !== typeof $n$jscomp$92$$) {
    throw Error("Assert failed: (number? n)");
  }
  return new $cljs$core$LazySeq$$(null, function($step$jscomp$4$$) {
    return function() {
      return $step$jscomp$4$$($n$jscomp$92$$, $coll$jscomp$249$$);
    };
  }(function($n$jscomp$92$$, $coll$jscomp$249$$) {
    for (;;) {
      var $n__$1$jscomp$4$$ = $cljs$core$seq$$($coll$jscomp$249$$);
      if (0 < $n$jscomp$92$$ && $n__$1$jscomp$4$$) {
        var $coll__$1$jscomp$100$$ = $n$jscomp$92$$ - 1, $n__$1$jscomp$4$$ = $cljs$core$rest$$($n__$1$jscomp$4$$);
        $n$jscomp$92$$ = $coll__$1$jscomp$100$$;
        $coll$jscomp$249$$ = $n__$1$jscomp$4$$;
      } else {
        return $n__$1$jscomp$4$$;
      }
    }
  }), null, null);
}
function $cljs$core$repeat$cljs$0core$0IFn$0_invoke$0arity$01$$($x$jscomp$437$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    return $cljs$core$cons$$($x$jscomp$437$$, $cljs$core$repeat$cljs$0core$0IFn$0_invoke$0arity$01$$($x$jscomp$437$$));
  }, null, null);
}
function $cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$7$$, $coll$jscomp$256$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $r$jscomp$27_temp__5278__auto__$jscomp$7$$ = $cljs$core$seq$$($coll$jscomp$256$$);
    if ($r$jscomp$27_temp__5278__auto__$jscomp$7$$) {
      if ($cljs$core$chunked_seq_QMARK_$$($r$jscomp$27_temp__5278__auto__$jscomp$7$$)) {
        for (var $c$jscomp$126_f$jscomp$202$$ = $cljs$core$_chunked_first$$($r$jscomp$27_temp__5278__auto__$jscomp$7$$), $size$jscomp$24$$ = $cljs$core$count$$($c$jscomp$126_f$jscomp$202$$), $b$jscomp$149$$ = new $cljs$core$ChunkBuffer$$(Array($size$jscomp$24$$), 0), $i_12657$$ = 0;;) {
          if ($i_12657$$ < $size$jscomp$24$$) {
            var $G__12650$jscomp$inline_208_JSCompiler_inline_result$jscomp$56_x$jscomp$inline_618$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($c$jscomp$126_f$jscomp$202$$, $i_12657$$);
            $G__12650$jscomp$inline_208_JSCompiler_inline_result$jscomp$56_x$jscomp$inline_618$$ = $pred$jscomp$7$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$7$$.$cljs$core$IFn$_invoke$arity$1$($G__12650$jscomp$inline_208_JSCompiler_inline_result$jscomp$56_x$jscomp$inline_618$$) : $pred$jscomp$7$$.call(null, $G__12650$jscomp$inline_208_JSCompiler_inline_result$jscomp$56_x$jscomp$inline_618$$);
            $cljs$core$truth_$$($G__12650$jscomp$inline_208_JSCompiler_inline_result$jscomp$56_x$jscomp$inline_618$$) && ($G__12650$jscomp$inline_208_JSCompiler_inline_result$jscomp$56_x$jscomp$inline_618$$ = $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($c$jscomp$126_f$jscomp$202$$, $i_12657$$), $b$jscomp$149$$.add($G__12650$jscomp$inline_208_JSCompiler_inline_result$jscomp$56_x$jscomp$inline_618$$));
            $i_12657$$ += 1;
          } else {
            break;
          }
        }
        return $cljs$core$chunk_cons$$($b$jscomp$149$$.$chunk$(), $cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$7$$, $cljs$core$_chunked_rest$$($r$jscomp$27_temp__5278__auto__$jscomp$7$$)));
      }
      $c$jscomp$126_f$jscomp$202$$ = $cljs$core$first$$($r$jscomp$27_temp__5278__auto__$jscomp$7$$);
      $r$jscomp$27_temp__5278__auto__$jscomp$7$$ = $cljs$core$rest$$($r$jscomp$27_temp__5278__auto__$jscomp$7$$);
      return $cljs$core$truth_$$($pred$jscomp$7$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$7$$.$cljs$core$IFn$_invoke$arity$1$($c$jscomp$126_f$jscomp$202$$) : $pred$jscomp$7$$.call(null, $c$jscomp$126_f$jscomp$202$$)) ? $cljs$core$cons$$($c$jscomp$126_f$jscomp$202$$, $cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$7$$, $r$jscomp$27_temp__5278__auto__$jscomp$7$$)) : $cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($pred$jscomp$7$$, $r$jscomp$27_temp__5278__auto__$jscomp$7$$);
    }
    return null;
  }, null, null);
}
function $cljs$core$into$$($var_args$jscomp$214$$) {
  for (var $args12667_to$jscomp$inline_210$$ = [], $len__9181__auto___12672_xform$jscomp$inline_211$$ = arguments.length, $from$jscomp$inline_212_i__9182__auto___12673$$ = 0;;) {
    if ($from$jscomp$inline_212_i__9182__auto___12673$$ < $len__9181__auto___12672_xform$jscomp$inline_211$$) {
      $args12667_to$jscomp$inline_210$$.push(arguments[$from$jscomp$inline_212_i__9182__auto___12673$$]), $from$jscomp$inline_212_i__9182__auto___12673$$ += 1;
    } else {
      break;
    }
  }
  switch($args12667_to$jscomp$inline_210$$.length) {
    case 0:
      return $cljs$core$PersistentVector$EMPTY$$;
    case 1:
      return arguments[0];
    case 2:
      return $cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 3:
      return $args12667_to$jscomp$inline_210$$ = arguments[0], $len__9181__auto___12672_xform$jscomp$inline_211$$ = arguments[1], $from$jscomp$inline_212_i__9182__auto___12673$$ = arguments[2], null != $args12667_to$jscomp$inline_210$$ && ($args12667_to$jscomp$inline_210$$.$cljs$lang$protocol_mask$partition1$$ & 4 || $cljs$core$PROTOCOL_SENTINEL$$ === $args12667_to$jscomp$inline_210$$.$cljs$core$IEditableCollection$$) ? $cljs$core$_with_meta$$($cljs$core$_persistent_BANG_$$($cljs$core$transduce$cljs$0core$0IFn$0_invoke$0arity$04$$($len__9181__auto___12672_xform$jscomp$inline_211$$, 
      $cljs$core$conj_BANG_$$, $cljs$core$_as_transient$$($args12667_to$jscomp$inline_210$$), $from$jscomp$inline_212_i__9182__auto___12673$$)), $cljs$core$meta$$($args12667_to$jscomp$inline_210$$)) : $cljs$core$transduce$cljs$0core$0IFn$0_invoke$0arity$04$$($len__9181__auto___12672_xform$jscomp$inline_211$$, $cljs$core$conj$$, $args12667_to$jscomp$inline_210$$, $from$jscomp$inline_212_i__9182__auto___12673$$);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args12667_to$jscomp$inline_210$$.length)].join(""));
  }
}
function $cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$($to$jscomp$3$$, $from$jscomp$2$$) {
  return null != $to$jscomp$3$$ ? null != $to$jscomp$3$$ && ($to$jscomp$3$$.$cljs$lang$protocol_mask$partition1$$ & 4 || $cljs$core$PROTOCOL_SENTINEL$$ === $to$jscomp$3$$.$cljs$core$IEditableCollection$$) ? $cljs$core$_with_meta$$($cljs$core$_persistent_BANG_$$($cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj_BANG_$$, $cljs$core$_as_transient$$($to$jscomp$3$$), $from$jscomp$2$$)), $cljs$core$meta$$($to$jscomp$3$$)) : $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj$$, 
  $to$jscomp$3$$, $from$jscomp$2$$) : $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$conj$$, $cljs$core$List$EMPTY$$, $from$jscomp$2$$);
}
function $cljs$core$VectorNode$$($edit$$, $arr$jscomp$87$$) {
  this.$edit$ = $edit$$;
  this.$arr$ = $arr$jscomp$87$$;
}
function $cljs$core$pv_fresh_node$$($edit$jscomp$2$$) {
  return new $cljs$core$VectorNode$$($edit$jscomp$2$$, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function $cljs$core$tail_off$$($cnt$jscomp$6_pv$$) {
  $cnt$jscomp$6_pv$$ = $cnt$jscomp$6_pv$$.$cnt$;
  return 32 > $cnt$jscomp$6_pv$$ ? 0 : $cnt$jscomp$6_pv$$ - 1 >>> 5 << 5;
}
function $cljs$core$new_path$$($edit$jscomp$3$$, $level$jscomp$7_ll$$, $G__12787_node$jscomp$6_ret$jscomp$13$$) {
  for (;;) {
    if (0 === $level$jscomp$7_ll$$) {
      return $G__12787_node$jscomp$6_ret$jscomp$13$$;
    }
    var $r$jscomp$28$$ = $cljs$core$pv_fresh_node$$($edit$jscomp$3$$);
    $r$jscomp$28$$.$arr$[0] = $G__12787_node$jscomp$6_ret$jscomp$13$$;
    $G__12787_node$jscomp$6_ret$jscomp$13$$ = $r$jscomp$28$$;
    $level$jscomp$7_ll$$ -= 5;
  }
}
var $cljs$core$push_tail$$ = function $cljs$core$push_tail$$($JSCompiler_temp$jscomp$58_pv$jscomp$1$$, $G__12793$jscomp$inline_214_level$jscomp$8$$, $child_parent$jscomp$2$$, $tailnode$$) {
  var $ret$jscomp$14$$ = new $cljs$core$VectorNode$$($child_parent$jscomp$2$$.$edit$, $cljs$core$aclone$$($child_parent$jscomp$2$$.$arr$)), $subidx$$ = $JSCompiler_temp$jscomp$58_pv$jscomp$1$$.$cnt$ - 1 >>> $G__12793$jscomp$inline_214_level$jscomp$8$$ & 31;
  5 === $G__12793$jscomp$inline_214_level$jscomp$8$$ ? $ret$jscomp$14$$.$arr$[$subidx$$] = $tailnode$$ : ($child_parent$jscomp$2$$ = $child_parent$jscomp$2$$.$arr$[$subidx$$], null != $child_parent$jscomp$2$$ ? ($G__12793$jscomp$inline_214_level$jscomp$8$$ -= 5, $JSCompiler_temp$jscomp$58_pv$jscomp$1$$ = $cljs$core$push_tail$$.$cljs$core$IFn$_invoke$arity$4$ ? $cljs$core$push_tail$$.$cljs$core$IFn$_invoke$arity$4$($JSCompiler_temp$jscomp$58_pv$jscomp$1$$, $G__12793$jscomp$inline_214_level$jscomp$8$$, 
  $child_parent$jscomp$2$$, $tailnode$$) : $cljs$core$push_tail$$.call(null, $JSCompiler_temp$jscomp$58_pv$jscomp$1$$, $G__12793$jscomp$inline_214_level$jscomp$8$$, $child_parent$jscomp$2$$, $tailnode$$)) : $JSCompiler_temp$jscomp$58_pv$jscomp$1$$ = $cljs$core$new_path$$(null, $G__12793$jscomp$inline_214_level$jscomp$8$$ - 5, $tailnode$$), $ret$jscomp$14$$.$arr$[$subidx$$] = $JSCompiler_temp$jscomp$58_pv$jscomp$1$$);
  return $ret$jscomp$14$$;
};
function $cljs$core$vector_index_out_of_bounds$$($i$jscomp$172$$, $cnt$jscomp$7$$) {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("No item "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i$jscomp$172$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in vector of length "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cnt$jscomp$7$$)].join(""));
}
function $cljs$core$unchecked_array_for$$($pv$jscomp$3$$, $i$jscomp$173$$) {
  if ($i$jscomp$173$$ >= $cljs$core$tail_off$$($pv$jscomp$3$$)) {
    return $pv$jscomp$3$$.$tail$;
  }
  for (var $node$jscomp$8$$ = $pv$jscomp$3$$.root, $level$jscomp$10$$ = $pv$jscomp$3$$.shift;;) {
    if (0 < $level$jscomp$10$$) {
      var $G__12799$$ = $level$jscomp$10$$ - 5, $node$jscomp$8$$ = $node$jscomp$8$$.$arr$[$i$jscomp$173$$ >>> $level$jscomp$10$$ & 31], $level$jscomp$10$$ = $G__12799$$;
    } else {
      return $node$jscomp$8$$.$arr$;
    }
  }
}
function $cljs$core$array_for$$($pv$jscomp$4$$, $i$jscomp$174$$) {
  return 0 <= $i$jscomp$174$$ && $i$jscomp$174$$ < $pv$jscomp$4$$.$cnt$ ? $cljs$core$unchecked_array_for$$($pv$jscomp$4$$, $i$jscomp$174$$) : $cljs$core$vector_index_out_of_bounds$$($i$jscomp$174$$, $pv$jscomp$4$$.$cnt$);
}
var $cljs$core$do_assoc$$ = function $cljs$core$do_assoc$$($JSCompiler_inline_result$jscomp$59_pv$jscomp$5$$, $G__12806$jscomp$inline_216_level$jscomp$11$$, $G__12807$jscomp$inline_217_node$jscomp$9$$, $i$jscomp$175$$, $val$jscomp$58$$) {
  var $ret$jscomp$15$$ = new $cljs$core$VectorNode$$($G__12807$jscomp$inline_217_node$jscomp$9$$.$edit$, $cljs$core$aclone$$($G__12807$jscomp$inline_217_node$jscomp$9$$.$arr$));
  if (0 === $G__12806$jscomp$inline_216_level$jscomp$11$$) {
    $ret$jscomp$15$$.$arr$[$i$jscomp$175$$ & 31] = $val$jscomp$58$$;
  } else {
    var $subidx$jscomp$1$$ = $i$jscomp$175$$ >>> $G__12806$jscomp$inline_216_level$jscomp$11$$ & 31;
    $G__12806$jscomp$inline_216_level$jscomp$11$$ -= 5;
    $G__12807$jscomp$inline_217_node$jscomp$9$$ = $G__12807$jscomp$inline_217_node$jscomp$9$$.$arr$[$subidx$jscomp$1$$];
    $JSCompiler_inline_result$jscomp$59_pv$jscomp$5$$ = $cljs$core$do_assoc$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$do_assoc$$.$cljs$core$IFn$_invoke$arity$5$($JSCompiler_inline_result$jscomp$59_pv$jscomp$5$$, $G__12806$jscomp$inline_216_level$jscomp$11$$, $G__12807$jscomp$inline_217_node$jscomp$9$$, $i$jscomp$175$$, $val$jscomp$58$$) : $cljs$core$do_assoc$$.call(null, $JSCompiler_inline_result$jscomp$59_pv$jscomp$5$$, $G__12806$jscomp$inline_216_level$jscomp$11$$, $G__12807$jscomp$inline_217_node$jscomp$9$$, 
    $i$jscomp$175$$, $val$jscomp$58$$);
    $ret$jscomp$15$$.$arr$[$subidx$jscomp$1$$] = $JSCompiler_inline_result$jscomp$59_pv$jscomp$5$$;
  }
  return $ret$jscomp$15$$;
};
function $cljs$core$RangedIterator$$($i$jscomp$176$$, $base$jscomp$2$$, $arr$jscomp$89$$, $v$jscomp$15$$, $start$jscomp$51$$, $end$jscomp$11$$) {
  this.$i$ = $i$jscomp$176$$;
  this.$base$ = $base$jscomp$2$$;
  this.$arr$ = $arr$jscomp$89$$;
  this.$v$ = $v$jscomp$15$$;
  this.start = $start$jscomp$51$$;
  this.end = $end$jscomp$11$$;
}
$cljs$core$RangedIterator$$.prototype.$hasNext$ = function() {
  return this.$i$ < this.end;
};
$cljs$core$RangedIterator$$.prototype.next = function() {
  32 === this.$i$ - this.$base$ && (this.$arr$ = $cljs$core$unchecked_array_for$$(this.$v$, this.$i$), this.$base$ += 32);
  var $ret$jscomp$17$$ = this.$arr$[this.$i$ & 31];
  this.$i$ += 1;
  return $ret$jscomp$17$$;
};
function $cljs$core$ranged_iterator$$($v$jscomp$17$$, $start$jscomp$53$$, $end$jscomp$13$$) {
  return new $cljs$core$RangedIterator$$($start$jscomp$53$$, $start$jscomp$53$$ - $start$jscomp$53$$ % 32, $start$jscomp$53$$ < $cljs$core$count$$($v$jscomp$17$$) ? $cljs$core$unchecked_array_for$$($v$jscomp$17$$, $start$jscomp$53$$) : null, $v$jscomp$17$$, $start$jscomp$53$$, $end$jscomp$13$$);
}
function $cljs$core$PersistentVector$$($meta$jscomp$21$$, $cnt$jscomp$8$$, $shift$$, $root$jscomp$3$$, $tail$$, $__hash$jscomp$8$$) {
  this.$meta$ = $meta$jscomp$21$$;
  this.$cnt$ = $cnt$jscomp$8$$;
  this.shift = $shift$$;
  this.root = $root$jscomp$3$$;
  this.$tail$ = $tail$$;
  this.$__hash$ = $__hash$jscomp$8$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 167668511;
  this.$cljs$lang$protocol_mask$partition1$$ = 8196;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentVector$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$58$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$58$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__12826$$ = null, $G__12826$$ = function($G__12826$$, $start$jscomp$55$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12826$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12826$$, $start$jscomp$55$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12826$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__12826$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12826$$, 0);
  };
  $G__12826$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12826$$, $start$jscomp$54$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12826$$, $start$jscomp$54$$);
  };
  return $G__12826$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__12827__1$$($G__12827__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12827__1$$, $cljs$core$count$$(this));
  }
  var $G__12827$$ = null, $G__12827$$ = function($G__12827$$, $start$jscomp$57$$) {
    switch(arguments.length) {
      case 1:
        return $G__12827__1$$.call(this, $G__12827$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12827$$, $start$jscomp$57$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12827$$.$cljs$core$IFn$_invoke$arity$1$ = $G__12827__1$$;
  $G__12827$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12827__1$$, $G__12827$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12827__1$$, $G__12827$$);
  };
  return $G__12827$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$269$$, $k$jscomp$89$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$89$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$270$$, $k$jscomp$90$$, $not_found$jscomp$14$$) {
  return "number" === typeof $k$jscomp$90$$ ? this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$90$$, $not_found$jscomp$14$$) : $not_found$jscomp$14$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$271$$, $n$jscomp$102$$) {
  return $cljs$core$array_for$$(this, $n$jscomp$102$$)[$n$jscomp$102$$ & 31];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$272$$, $n$jscomp$103$$, $not_found$jscomp$15$$) {
  return 0 <= $n$jscomp$103$$ && $n$jscomp$103$$ < this.$cnt$ ? $cljs$core$unchecked_array_for$$(this, $n$jscomp$103$$)[$n$jscomp$103$$ & 31] : $not_found$jscomp$15$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IVector$_assoc_n$arity$3$ = function($coll$jscomp$273_new_tail$$, $n$jscomp$104$$, $val$jscomp$59$$) {
  if (0 <= $n$jscomp$104$$ && $n$jscomp$104$$ < this.$cnt$) {
    return $cljs$core$tail_off$$(this) <= $n$jscomp$104$$ ? ($coll$jscomp$273_new_tail$$ = $cljs$core$aclone$$(this.$tail$), $coll$jscomp$273_new_tail$$[$n$jscomp$104$$ & 31] = $val$jscomp$59$$, new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$, this.shift, this.root, $coll$jscomp$273_new_tail$$, null)) : new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$, this.shift, $cljs$core$do_assoc$$(this, this.shift, this.root, $n$jscomp$104$$, $val$jscomp$59$$), this.$tail$, null);
  }
  if ($n$jscomp$104$$ === this.$cnt$) {
    return this.$cljs$core$ICollection$_conj$arity$2$(null, $val$jscomp$59$$);
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Index "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$104$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" out of bounds  [0,"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$cnt$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("]")].join(""));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return $cljs$core$ranged_iterator$$(this, 0, this.$cnt$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMapEntry$_key$arity$1$ = function() {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, 0);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMapEntry$_val$arity$1$ = function() {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$6_h__8402__auto____$1$jscomp$6$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$6_h__8402__auto____$1$jscomp$6$$ ? $h__8402__auto__$jscomp$6_h__8402__auto____$1$jscomp$6$$ : this.$__hash$ = $h__8402__auto__$jscomp$6_h__8402__auto____$1$jscomp$6$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$282$$, $other$jscomp$59$$) {
  if ($other$jscomp$59$$ instanceof $cljs$core$PersistentVector$$) {
    if (this.$cnt$ === $cljs$core$count$$($other$jscomp$59$$)) {
      for (var $me_iter$$ = this.$cljs$core$IIterable$_iterator$arity$1$(null), $you_iter$$ = $cljs$core$_iterator$$($other$jscomp$59$$);;) {
        if ($me_iter$$.$hasNext$()) {
          var $x$jscomp$452$$ = $me_iter$$.next(), $y$jscomp$213$$ = $you_iter$$.next();
          if (!$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($x$jscomp$452$$, $y$jscomp$213$$)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return $cljs$core$equiv_sequential$$(this, $other$jscomp$59$$);
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientVector$$(this.$cnt$, this.shift, $cljs$core$tv_editable_root$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$tv_editable_root$$.$cljs$core$IFn$_invoke$arity$1$(this.root) : $cljs$core$tv_editable_root$$.call(null, this.root), $cljs$core$tv_editable_tail$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$tv_editable_tail$$.$cljs$core$IFn$_invoke$arity$1$(this.$tail$) : $cljs$core$tv_editable_tail$$.call(null, this.$tail$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($v$jscomp$19$$, $f$jscomp$218$$) {
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $f$jscomp$218$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($i$jscomp$180_v$jscomp$20$$, $f$jscomp$219$$, $init$jscomp$5_len$jscomp$18$$) {
  $i$jscomp$180_v$jscomp$20$$ = 0;
  for (var $G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$ = $init$jscomp$5_len$jscomp$18$$;;) {
    if ($i$jscomp$180_v$jscomp$20$$ < this.$cnt$) {
      var $G__12835_arr$jscomp$92_init__$2$jscomp$2$$ = $cljs$core$unchecked_array_for$$(this, $i$jscomp$180_v$jscomp$20$$);
      $init$jscomp$5_len$jscomp$18$$ = $G__12835_arr$jscomp$92_init__$2$jscomp$2$$.length;
      a: {
        for (var $j$jscomp$inline_532$$ = 0;;) {
          if ($j$jscomp$inline_532$$ < $init$jscomp$5_len$jscomp$18$$) {
            var $G__12821$jscomp$inline_536$$ = $G__12835_arr$jscomp$92_init__$2$jscomp$2$$[$j$jscomp$inline_532$$], $G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$ = $f$jscomp$219$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$219$$.$cljs$core$IFn$_invoke$arity$2$($G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$, $G__12821$jscomp$inline_536$$) : 
            $f$jscomp$219$$.call(null, $G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$, $G__12821$jscomp$inline_536$$);
            if ($cljs$core$reduced_QMARK_$$($G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$)) {
              $G__12835_arr$jscomp$92_init__$2$jscomp$2$$ = $G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$;
              break a;
            }
            $j$jscomp$inline_532$$ += 1;
          } else {
            $G__12835_arr$jscomp$92_init__$2$jscomp$2$$ = $G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$;
            break a;
          }
        }
      }
      if ($cljs$core$reduced_QMARK_$$($G__12835_arr$jscomp$92_init__$2$jscomp$2$$)) {
        return $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($G__12835_arr$jscomp$92_init__$2$jscomp$2$$) : $cljs$core$deref$$.call(null, $G__12835_arr$jscomp$92_init__$2$jscomp$2$$);
      }
      $i$jscomp$180_v$jscomp$20$$ += $init$jscomp$5_len$jscomp$18$$;
      $G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$ = $G__12835_arr$jscomp$92_init__$2$jscomp$2$$;
    } else {
      return $G__12820$jscomp$inline_535_G__12833$jscomp$inline_537_init__$1$jscomp$1_init__$2$jscomp$inline_533_init__$3$jscomp$inline_534$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($coll$jscomp$285$$, $k$jscomp$91$$, $v$jscomp$21$$) {
  if ("number" === typeof $k$jscomp$91$$) {
    return this.$cljs$core$IVector$_assoc_n$arity$3$(null, $k$jscomp$91$$, $v$jscomp$21$$);
  }
  throw Error("Vector's key for assoc must be a number.");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$jscomp$286$$, $k$jscomp$92$$) {
  return "number" !== typeof $k$jscomp$92$$ || isNaN($k$jscomp$92$$) || Infinity === $k$jscomp$92$$ || parseFloat($k$jscomp$92$$) !== parseInt($k$jscomp$92$$, 10) ? !1 : 0 <= $k$jscomp$92$$ && $k$jscomp$92$$ < this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  if (0 === this.$cnt$) {
    return null;
  }
  if (32 >= this.$cnt$) {
    return new $cljs$core$IndexedSeq$$(this.$tail$, 0, null);
  }
  a: {
    var $G__12823_node$jscomp$inline_223$$ = this.root;
    for (var $G__12797$jscomp$inline_225_level$jscomp$inline_224$$ = this.shift;;) {
      if (0 < $G__12797$jscomp$inline_225_level$jscomp$inline_224$$) {
        $G__12797$jscomp$inline_225_level$jscomp$inline_224$$ -= 5, $G__12823_node$jscomp$inline_223$$ = $G__12823_node$jscomp$inline_223$$.$arr$[0];
      } else {
        $G__12823_node$jscomp$inline_223$$ = $G__12823_node$jscomp$inline_223$$.$arr$;
        break a;
      }
    }
  }
  return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $G__12823_node$jscomp$inline_223$$, 0, 0) : $cljs$core$chunked_seq$$.call(null, this, $G__12823_node$jscomp$inline_223$$, 0, 0);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$288$$, $meta__$1$jscomp$4$$) {
  return new $cljs$core$PersistentVector$$($meta__$1$jscomp$4$$, this.$cnt$, this.shift, this.root, this.$tail$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$289$$, $o$jscomp$83$$) {
  if (32 > this.$cnt$ - $cljs$core$tail_off$$(this)) {
    for (var $len$jscomp$19_new_shift$$ = this.$tail$.length, $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$ = Array($len$jscomp$19_new_shift$$ + 1), $i_12837_val$jscomp$inline_630$$ = 0;;) {
      if ($i_12837_val$jscomp$inline_630$$ < $len$jscomp$19_new_shift$$) {
        $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$[$i_12837_val$jscomp$inline_630$$] = this.$tail$[$i_12837_val$jscomp$inline_630$$], $i_12837_val$jscomp$inline_630$$ += 1;
      } else {
        break;
      }
    }
    $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$[$len$jscomp$19_new_shift$$] = $o$jscomp$83$$;
    return new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$ + 1, this.shift, this.root, $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$, null);
  }
  $len$jscomp$19_new_shift$$ = ($JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$ = this.$cnt$ >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$ ? ($JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$ = $cljs$core$pv_fresh_node$$(null), $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$.$arr$[0] = this.root, $i_12837_val$jscomp$inline_630$$ = $cljs$core$new_path$$(null, this.shift, new $cljs$core$VectorNode$$(null, this.$tail$)), $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$.$arr$[1] = 
  $i_12837_val$jscomp$inline_630$$) : $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$ = $cljs$core$push_tail$$(this, this.shift, this.root, new $cljs$core$VectorNode$$(null, this.$tail$));
  return new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$ + 1, $len$jscomp$19_new_shift$$, $JSCompiler_temp$jscomp$60_n_r$jscomp$inline_227_new_tail$jscomp$2_root_overflow_QMARK_$$, [$o$jscomp$83$$], null);
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__12839$$ = null, $G__12839$$ = function($G__12839$$, $k$jscomp$95$$, $not_found$jscomp$17$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$95$$);
      case 3:
        return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$95$$, $not_found$jscomp$17$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12839$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12839$$, $k$jscomp$93$$) {
    return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$93$$);
  };
  $G__12839$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__12839$$, $k$jscomp$94$$, $not_found$jscomp$16$$) {
    return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$94$$, $not_found$jscomp$16$$);
  };
  return $G__12839$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$373$$, $args12816$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args12816$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$96$$) {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$96$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$97$$, $not_found$jscomp$18$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$97$$, $not_found$jscomp$18$$);
};
var $cljs$core$PersistentVector$EMPTY_NODE$$ = new $cljs$core$VectorNode$$(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), $cljs$core$PersistentVector$EMPTY$$ = new $cljs$core$PersistentVector$$(null, 0, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [], $cljs$core$empty_ordered_hash$$);
function $cljs$core$PersistentVector$fromArray$$($xs$jscomp$9$$) {
  var $l$jscomp$64$$ = $xs$jscomp$9$$.length;
  if (32 > $l$jscomp$64$$) {
    return new $cljs$core$PersistentVector$$(null, $l$jscomp$64$$, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, $xs$jscomp$9$$, null);
  }
  for (var $i$jscomp$181$$ = 32, $G__12841_out$$ = (new $cljs$core$PersistentVector$$(null, 32, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, $xs$jscomp$9$$.slice(0, 32), null)).$cljs$core$IEditableCollection$_as_transient$arity$1$(null);;) {
    if ($i$jscomp$181$$ < $l$jscomp$64$$) {
      var $G__12840$$ = $i$jscomp$181$$ + 1, $G__12841_out$$ = $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($G__12841_out$$, $xs$jscomp$9$$[$i$jscomp$181$$]), $i$jscomp$181$$ = $G__12840$$;
    } else {
      return $cljs$core$_persistent_BANG_$$($G__12841_out$$);
    }
  }
}
$cljs$core$PersistentVector$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$vec$$($coll$jscomp$294$$) {
  return $cljs$core$array_QMARK_$$($coll$jscomp$294$$) ? $cljs$core$PersistentVector$fromArray$$($coll$jscomp$294$$) : $cljs$core$_persistent_BANG_$$($cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj_BANG_$$, $cljs$core$_as_transient$$($cljs$core$PersistentVector$EMPTY$$), $coll$jscomp$294$$));
}
var $cljs$core$vector$$ = function $cljs$core$vector$$($var_args$jscomp$220$$) {
  for (var $args__9188__auto__$jscomp$2$$ = [], $len__9181__auto___12843$$ = arguments.length, $i__9182__auto___12844$$ = 0;;) {
    if ($i__9182__auto___12844$$ < $len__9181__auto___12843$$) {
      $args__9188__auto__$jscomp$2$$.push(arguments[$i__9182__auto___12844$$]), $i__9182__auto___12844$$ += 1;
    } else {
      break;
    }
  }
  return $cljs$core$vector$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < $args__9188__auto__$jscomp$2$$.length ? new $cljs$core$IndexedSeq$$($args__9188__auto__$jscomp$2$$.slice(0), 0, null) : null);
};
$cljs$core$vector$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($args$jscomp$84$$) {
  return $args$jscomp$84$$ instanceof $cljs$core$IndexedSeq$$ && 0 === $args$jscomp$84$$.$i$ ? $cljs$core$PersistentVector$fromArray$$($args$jscomp$84$$.$arr$) : $cljs$core$vec$$($args$jscomp$84$$);
};
$cljs$core$vector$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$vector$$.$cljs$lang$applyTo$ = function($seq12842$$) {
  return $cljs$core$vector$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq12842$$));
};
function $cljs$core$ChunkedSeq$$($vec$$, $node$jscomp$12$$, $i$jscomp$182$$, $off$jscomp$4$$, $meta$jscomp$23$$, $__hash$jscomp$10$$) {
  this.$vec$ = $vec$$;
  this.node = $node$jscomp$12$$;
  this.$i$ = $i$jscomp$182$$;
  this.$off$ = $off$jscomp$4$$;
  this.$meta$ = $meta$jscomp$23$$;
  this.$__hash$ = $__hash$jscomp$10$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32375020;
  this.$cljs$lang$protocol_mask$partition1$$ = 1536;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ChunkedSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$60$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$60$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__12868$$ = null, $G__12868$$ = function($G__12868$$, $start$jscomp$59$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12868$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12868$$, $start$jscomp$59$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12868$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__12868$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12868$$, 0);
  };
  $G__12868$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12868$$, $start$jscomp$58$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12868$$, $start$jscomp$58$$);
  };
  return $G__12868$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__12869__1$$($G__12869__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12869__1$$, $cljs$core$count$$(this));
  }
  var $G__12869$$ = null, $G__12869$$ = function($G__12869$$, $start$jscomp$61$$) {
    switch(arguments.length) {
      case 1:
        return $G__12869__1$$.call(this, $G__12869$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12869$$, $start$jscomp$61$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12869$$.$cljs$core$IFn$_invoke$arity$1$ = $G__12869__1$$;
  $G__12869$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12869__1$$, $G__12869$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12869__1$$, $G__12869$$);
  };
  return $G__12869$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  if (this.$off$ + 1 < this.node.length) {
    var $G__12846$jscomp$inline_229_s$jscomp$78$$ = this.$vec$;
    var $G__12847$jscomp$inline_230$$ = this.node, $G__12848$jscomp$inline_231$$ = this.$i$, $G__12849$jscomp$inline_232$$ = this.$off$ + 1;
    $G__12846$jscomp$inline_229_s$jscomp$78$$ = $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__12846$jscomp$inline_229_s$jscomp$78$$, $G__12847$jscomp$inline_230$$, $G__12848$jscomp$inline_231$$, $G__12849$jscomp$inline_232$$) : $cljs$core$chunked_seq$$.call(null, $G__12846$jscomp$inline_229_s$jscomp$78$$, $G__12847$jscomp$inline_230$$, $G__12848$jscomp$inline_231$$, $G__12849$jscomp$inline_232$$);
    return null == $G__12846$jscomp$inline_229_s$jscomp$78$$ ? null : $G__12846$jscomp$inline_229_s$jscomp$78$$;
  }
  return this.$cljs$core$IChunkedNext$_chunked_next$arity$1$(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$7_h__8402__auto____$1$jscomp$7$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$7_h__8402__auto____$1$jscomp$7$$ ? $h__8402__auto__$jscomp$7_h__8402__auto____$1$jscomp$7$$ : this.$__hash$ = $h__8402__auto__$jscomp$7_h__8402__auto____$1$jscomp$7$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$303$$, $other$jscomp$61$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$61$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$305$$, $f$jscomp$220$$) {
  var $G__12850$jscomp$inline_234_JSCompiler_inline_result$jscomp$62$$ = this.$vec$;
  var $G__12851$jscomp$inline_235$$ = this.$i$ + this.$off$, $G__12852$jscomp$inline_236$$ = $cljs$core$count$$(this.$vec$);
  $G__12850$jscomp$inline_234_JSCompiler_inline_result$jscomp$62$$ = $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($G__12850$jscomp$inline_234_JSCompiler_inline_result$jscomp$62$$, $G__12851$jscomp$inline_235$$, $G__12852$jscomp$inline_236$$) : $cljs$core$subvec$$.call(null, $G__12850$jscomp$inline_234_JSCompiler_inline_result$jscomp$62$$, $G__12851$jscomp$inline_235$$, $G__12852$jscomp$inline_236$$);
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($G__12850$jscomp$inline_234_JSCompiler_inline_result$jscomp$62$$, $f$jscomp$220$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($G__12853$jscomp$inline_238_JSCompiler_inline_result$jscomp$64_coll$jscomp$306$$, $f$jscomp$221$$, $start$jscomp$62$$) {
  $G__12853$jscomp$inline_238_JSCompiler_inline_result$jscomp$64_coll$jscomp$306$$ = this.$vec$;
  var $G__12854$jscomp$inline_239$$ = this.$i$ + this.$off$, $G__12855$jscomp$inline_240$$ = $cljs$core$count$$(this.$vec$);
  $G__12853$jscomp$inline_238_JSCompiler_inline_result$jscomp$64_coll$jscomp$306$$ = $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($G__12853$jscomp$inline_238_JSCompiler_inline_result$jscomp$64_coll$jscomp$306$$, $G__12854$jscomp$inline_239$$, $G__12855$jscomp$inline_240$$) : $cljs$core$subvec$$.call(null, $G__12853$jscomp$inline_238_JSCompiler_inline_result$jscomp$64_coll$jscomp$306$$, $G__12854$jscomp$inline_239$$, $G__12855$jscomp$inline_240$$);
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($G__12853$jscomp$inline_238_JSCompiler_inline_result$jscomp$64_coll$jscomp$306$$, $f$jscomp$221$$, $start$jscomp$62$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.node[this.$off$];
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  if (this.$off$ + 1 < this.node.length) {
    var $G__12856$jscomp$inline_242_s$jscomp$79$$ = this.$vec$;
    var $G__12857$jscomp$inline_243$$ = this.node, $G__12858$jscomp$inline_244$$ = this.$i$, $G__12859$jscomp$inline_245$$ = this.$off$ + 1;
    $G__12856$jscomp$inline_242_s$jscomp$79$$ = $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__12856$jscomp$inline_242_s$jscomp$79$$, $G__12857$jscomp$inline_243$$, $G__12858$jscomp$inline_244$$, $G__12859$jscomp$inline_245$$) : $cljs$core$chunked_seq$$.call(null, $G__12856$jscomp$inline_242_s$jscomp$79$$, $G__12857$jscomp$inline_243$$, $G__12858$jscomp$inline_244$$, $G__12859$jscomp$inline_245$$);
    return null == $G__12856$jscomp$inline_242_s$jscomp$79$$ ? $cljs$core$List$EMPTY$$ : $G__12856$jscomp$inline_242_s$jscomp$79$$;
  }
  return this.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$ = function() {
  var $arr$jscomp$inline_247$$ = this.node;
  return new $cljs$core$ArrayChunk$$($arr$jscomp$inline_247$$, this.$off$, $arr$jscomp$inline_247$$.length);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$ = function() {
  var $end$jscomp$14$$ = this.$i$ + this.node.length;
  if ($end$jscomp$14$$ < $cljs$core$_count$$(this.$vec$)) {
    var $G__12860$$ = this.$vec$, $G__12861$$ = $cljs$core$unchecked_array_for$$(this.$vec$, $end$jscomp$14$$);
    return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__12860$$, $G__12861$$, $end$jscomp$14$$, 0) : $cljs$core$chunked_seq$$.call(null, $G__12860$$, $G__12861$$, $end$jscomp$14$$, 0);
  }
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$312$$, $m$jscomp$62$$) {
  return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$(this.$vec$, this.node, this.$i$, this.$off$, $m$jscomp$62$$) : $cljs$core$chunked_seq$$.call(null, this.$vec$, this.node, this.$i$, this.$off$, $m$jscomp$62$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$313$$, $o$jscomp$84$$) {
  return $cljs$core$cons$$($o$jscomp$84$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedNext$_chunked_next$arity$1$ = function() {
  var $end$jscomp$15$$ = this.$i$ + this.node.length;
  if ($end$jscomp$15$$ < $cljs$core$_count$$(this.$vec$)) {
    var $G__12864$$ = this.$vec$, $G__12865$$ = $cljs$core$unchecked_array_for$$(this.$vec$, $end$jscomp$15$$);
    return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__12864$$, $G__12865$$, $end$jscomp$15$$, 0) : $cljs$core$chunked_seq$$.call(null, $G__12864$$, $G__12865$$, $end$jscomp$15$$, 0);
  }
  return null;
};
$cljs$core$ChunkedSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$chunked_seq$$($var_args$jscomp$221$$) {
  for (var $args12870_vec$jscomp$inline_250$$ = [], $i$jscomp$inline_251_len__9181__auto___12873$$ = arguments.length, $i__9182__auto___12874_off$jscomp$inline_252$$ = 0;;) {
    if ($i__9182__auto___12874_off$jscomp$inline_252$$ < $i$jscomp$inline_251_len__9181__auto___12873$$) {
      $args12870_vec$jscomp$inline_250$$.push(arguments[$i__9182__auto___12874_off$jscomp$inline_252$$]), $i__9182__auto___12874_off$jscomp$inline_252$$ += 1;
    } else {
      break;
    }
  }
  switch($args12870_vec$jscomp$inline_250$$.length) {
    case 3:
      return $args12870_vec$jscomp$inline_250$$ = arguments[0], $i$jscomp$inline_251_len__9181__auto___12873$$ = arguments[1], $i__9182__auto___12874_off$jscomp$inline_252$$ = arguments[2], new $cljs$core$ChunkedSeq$$($args12870_vec$jscomp$inline_250$$, $cljs$core$array_for$$($args12870_vec$jscomp$inline_250$$, $i$jscomp$inline_251_len__9181__auto___12873$$), $i$jscomp$inline_251_len__9181__auto___12873$$, $i__9182__auto___12874_off$jscomp$inline_252$$, null, null);
    case 4:
      return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args12870_vec$jscomp$inline_250$$.length)].join(""));
  }
}
function $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($vec$jscomp$3$$, $node$jscomp$14$$, $i$jscomp$185$$, $off$jscomp$7$$) {
  return new $cljs$core$ChunkedSeq$$($vec$jscomp$3$$, $node$jscomp$14$$, $i$jscomp$185$$, $off$jscomp$7$$, null, null);
}
function $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$($vec$jscomp$4$$, $node$jscomp$15$$, $i$jscomp$186$$, $off$jscomp$8$$, $meta$jscomp$25$$) {
  return new $cljs$core$ChunkedSeq$$($vec$jscomp$4$$, $node$jscomp$15$$, $i$jscomp$186$$, $off$jscomp$8$$, $meta$jscomp$25$$, null);
}
function $cljs$core$Subvec$$($meta$jscomp$26$$, $v$jscomp$23$$, $start$jscomp$63$$, $end$jscomp$16$$, $__hash$jscomp$12$$) {
  this.$meta$ = $meta$jscomp$26$$;
  this.$v$ = $v$jscomp$23$$;
  this.start = $start$jscomp$63$$;
  this.end = $end$jscomp$16$$;
  this.$__hash$ = $__hash$jscomp$12$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 167666463;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Subvec$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$62$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$62$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__12897$$ = null, $G__12897$$ = function($G__12897$$, $start__$1$jscomp$1$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12897$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12897$$, $start__$1$jscomp$1$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12897$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__12897$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12897$$, 0);
  };
  $G__12897$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12897$$, $start__$1$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12897$$, $start__$1$$);
  };
  return $G__12897$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__12898__1$$($G__12898__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12898__1$$, $cljs$core$count$$(this));
  }
  var $G__12898$$ = null, $G__12898$$ = function($G__12898$$, $start__$1$jscomp$3$$) {
    switch(arguments.length) {
      case 1:
        return $G__12898__1$$.call(this, $G__12898$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12898$$, $start__$1$jscomp$3$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12898$$.$cljs$core$IFn$_invoke$arity$1$ = $G__12898__1$$;
  $G__12898$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12898__1$$, $G__12898$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12898__1$$, $G__12898$$);
  };
  return $G__12898$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$321$$, $k$jscomp$98$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$98$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$322$$, $k$jscomp$99$$, $not_found$jscomp$19$$) {
  return "number" === typeof $k$jscomp$99$$ ? this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$99$$, $not_found$jscomp$19$$) : $not_found$jscomp$19$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$324$$, $n$jscomp$105$$) {
  return 0 > $n$jscomp$105$$ || this.end <= this.start + $n$jscomp$105$$ ? $cljs$core$vector_index_out_of_bounds$$($n$jscomp$105$$, this.end - this.start) : $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(this.$v$, this.start + $n$jscomp$105$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$325$$, $n$jscomp$106$$, $not_found$jscomp$20$$) {
  return 0 > $n$jscomp$106$$ || this.end <= this.start + $n$jscomp$106$$ ? $not_found$jscomp$20$$ : $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$(this.$v$, this.start + $n$jscomp$106$$, $not_found$jscomp$20$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IVector$_assoc_n$arity$3$ = function($G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$, $G__12881_n$jscomp$107$$, $G__12882_val$jscomp$60$$) {
  $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$ = this.start + $G__12881_n$jscomp$107$$;
  if (0 > $G__12881_n$jscomp$107$$ || this.end + 1 <= $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Index "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__12881_n$jscomp$107$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" out of bounds [0,"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$cljs$core$ICounted$_count$arity$1$(null)), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("]")].join(""));
  }
  $G__12881_n$jscomp$107$$ = this.$meta$;
  $G__12882_val$jscomp$60$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$v$, $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$, $G__12882_val$jscomp$60$$);
  var $G__12883$$ = this.start, $x__8298__auto__$jscomp$inline_254$$ = this.end;
  $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$ += 1;
  $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$ = $x__8298__auto__$jscomp$inline_254$$ > $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$ ? $x__8298__auto__$jscomp$inline_254$$ : $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($G__12881_n$jscomp$107$$, $G__12882_val$jscomp$60$$, $G__12883$$, $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$, null) : $cljs$core$build_subvec$$.call(null, $G__12881_n$jscomp$107$$, $G__12882_val$jscomp$60$$, $G__12883$$, $G__12884_coll$jscomp$326_v_pos_y__8299__auto__$jscomp$inline_255$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return $cljs$core$ranged_iterator$$(this.$v$, this.start, this.end);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end - this.start;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$8_h__8402__auto____$1$jscomp$8$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$8_h__8402__auto____$1$jscomp$8$$ ? $h__8402__auto__$jscomp$8_h__8402__auto____$1$jscomp$8$$ : this.$__hash$ = $h__8402__auto__$jscomp$8_h__8402__auto____$1$jscomp$8$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$334$$, $other$jscomp$63$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$63$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$336$$, $f$jscomp$223$$) {
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $f$jscomp$223$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$337$$, $f$jscomp$224$$, $start__$1$jscomp$4$$) {
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $f$jscomp$224$$, $start__$1$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($coll$jscomp$338$$, $key$jscomp$72$$, $val$jscomp$61$$) {
  if ("number" === typeof $key$jscomp$72$$) {
    return this.$cljs$core$IVector$_assoc_n$arity$3$(null, $key$jscomp$72$$, $val$jscomp$61$$);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  var $self__$jscomp$423$$ = this;
  return function($coll__$1$jscomp$160$$) {
    return function $cljs$core$subvec_seq$$($i$jscomp$188$$) {
      return $i$jscomp$188$$ === $self__$jscomp$423$$.end ? null : $cljs$core$cons$$($cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($self__$jscomp$423$$.$v$, $i$jscomp$188$$), new $cljs$core$LazySeq$$(null, function() {
        return function() {
          return $cljs$core$subvec_seq$$($i$jscomp$188$$ + 1);
        };
      }($coll__$1$jscomp$160$$), null, null));
    };
  }(this)($self__$jscomp$423$$.start);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$340$$, $meta__$1$jscomp$5$$) {
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($meta__$1$jscomp$5$$, this.$v$, this.start, this.end, this.$__hash$) : $cljs$core$build_subvec$$.call(null, $meta__$1$jscomp$5$$, this.$v$, this.start, this.end, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$341$$, $o$jscomp$85$$) {
  var $G__12892$$ = this.$meta$, $G__12893$$ = $cljs$core$_assoc_n$$(this.$v$, this.end, $o$jscomp$85$$), $G__12894$$ = this.start, $G__12895$$ = this.end + 1;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($G__12892$$, $G__12893$$, $G__12894$$, $G__12895$$, null) : $cljs$core$build_subvec$$.call(null, $G__12892$$, $G__12893$$, $G__12894$$, $G__12895$$, null);
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__12902$$ = null, $G__12902$$ = function($G__12902$$, $k$jscomp$102$$, $not_found$jscomp$22$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$102$$);
      case 3:
        return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$102$$, $not_found$jscomp$22$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12902$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12902$$, $k$jscomp$100$$) {
    return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$100$$);
  };
  $G__12902$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__12902$$, $k$jscomp$101$$, $not_found$jscomp$21$$) {
    return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$101$$, $not_found$jscomp$21$$);
  };
  return $G__12902$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$429$$, $args12877$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args12877$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$103$$) {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$103$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$104$$, $not_found$jscomp$23$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$104$$, $not_found$jscomp$23$$);
};
$cljs$core$Subvec$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$build_subvec$$($meta$jscomp$28$$, $v$jscomp$25$$, $G__12905_start$jscomp$65$$, $G__12906_end$jscomp$18$$, $G__12907___hash$jscomp$14$$) {
  for (;;) {
    if ($v$jscomp$25$$ instanceof $cljs$core$Subvec$$) {
      $G__12905_start$jscomp$65$$ = $v$jscomp$25$$.start + $G__12905_start$jscomp$65$$, $G__12906_end$jscomp$18$$ = $v$jscomp$25$$.start + $G__12906_end$jscomp$18$$, $v$jscomp$25$$ = $v$jscomp$25$$.$v$;
    } else {
      if (!$cljs$core$vector_QMARK_$$($v$jscomp$25$$)) {
        throw Error("v must satisfy IVector");
      }
      var $c_12908$$ = $cljs$core$count$$($v$jscomp$25$$);
      if (0 > $G__12905_start$jscomp$65$$ || 0 > $G__12906_end$jscomp$18$$ || $G__12905_start$jscomp$65$$ > $c_12908$$ || $G__12906_end$jscomp$18$$ > $c_12908$$) {
        throw Error("Index out of bounds");
      }
      return new $cljs$core$Subvec$$($meta$jscomp$28$$, $v$jscomp$25$$, $G__12905_start$jscomp$65$$, $G__12906_end$jscomp$18$$, $G__12907___hash$jscomp$14$$);
    }
  }
}
function $cljs$core$subvec$$($var_args$jscomp$222$$) {
  for (var $args12909_v$jscomp$inline_257$$ = [], $len__9181__auto___12912$$ = arguments.length, $i__9182__auto___12913$$ = 0;;) {
    if ($i__9182__auto___12913$$ < $len__9181__auto___12912$$) {
      $args12909_v$jscomp$inline_257$$.push(arguments[$i__9182__auto___12913$$]), $i__9182__auto___12913$$ += 1;
    } else {
      break;
    }
  }
  switch($args12909_v$jscomp$inline_257$$.length) {
    case 2:
      return $args12909_v$jscomp$inline_257$$ = arguments[0], $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($args12909_v$jscomp$inline_257$$, arguments[1], $cljs$core$count$$($args12909_v$jscomp$inline_257$$));
    case 3:
      return $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args12909_v$jscomp$inline_257$$.length)].join(""));
  }
}
function $cljs$core$subvec$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$27$$, $start$jscomp$67$$, $end$jscomp$19$$) {
  return $cljs$core$build_subvec$$(null, $v$jscomp$27$$, $start$jscomp$67$$, $end$jscomp$19$$, null);
}
function $cljs$core$tv_ensure_editable$$($edit$jscomp$4$$, $node$jscomp$16$$) {
  return $edit$jscomp$4$$ === $node$jscomp$16$$.$edit$ ? $node$jscomp$16$$ : new $cljs$core$VectorNode$$($edit$jscomp$4$$, $cljs$core$aclone$$($node$jscomp$16$$.$arr$));
}
function $cljs$core$tv_editable_root$$($node$jscomp$17$$) {
  return new $cljs$core$VectorNode$$({}, $cljs$core$aclone$$($node$jscomp$17$$.$arr$));
}
function $cljs$core$tv_editable_tail$$($tl$$) {
  var $ret$jscomp$18$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  $cljs$core$array_copy$$($tl$$, 0, $ret$jscomp$18$$, 0, $tl$$.length);
  return $ret$jscomp$18$$;
}
var $cljs$core$tv_push_tail$$ = function $cljs$core$tv_push_tail$$($JSCompiler_temp$jscomp$67_tv$$, $G__12925$jscomp$inline_261_level$jscomp$13$$, $parent$jscomp$3_ret$jscomp$19$$, $tail_node$$) {
  $parent$jscomp$3_ret$jscomp$19$$ = $cljs$core$tv_ensure_editable$$($JSCompiler_temp$jscomp$67_tv$$.root.$edit$, $parent$jscomp$3_ret$jscomp$19$$);
  var $subidx$jscomp$3$$ = $JSCompiler_temp$jscomp$67_tv$$.$cnt$ - 1 >>> $G__12925$jscomp$inline_261_level$jscomp$13$$ & 31;
  if (5 === $G__12925$jscomp$inline_261_level$jscomp$13$$) {
    $JSCompiler_temp$jscomp$67_tv$$ = $tail_node$$;
  } else {
    var $child$jscomp$inline_260$$ = $parent$jscomp$3_ret$jscomp$19$$.$arr$[$subidx$jscomp$3$$];
    null != $child$jscomp$inline_260$$ ? ($G__12925$jscomp$inline_261_level$jscomp$13$$ -= 5, $JSCompiler_temp$jscomp$67_tv$$ = $cljs$core$tv_push_tail$$.$cljs$core$IFn$_invoke$arity$4$ ? $cljs$core$tv_push_tail$$.$cljs$core$IFn$_invoke$arity$4$($JSCompiler_temp$jscomp$67_tv$$, $G__12925$jscomp$inline_261_level$jscomp$13$$, $child$jscomp$inline_260$$, $tail_node$$) : $cljs$core$tv_push_tail$$.call(null, $JSCompiler_temp$jscomp$67_tv$$, $G__12925$jscomp$inline_261_level$jscomp$13$$, $child$jscomp$inline_260$$, 
    $tail_node$$)) : $JSCompiler_temp$jscomp$67_tv$$ = $cljs$core$new_path$$($JSCompiler_temp$jscomp$67_tv$$.root.$edit$, $G__12925$jscomp$inline_261_level$jscomp$13$$ - 5, $tail_node$$);
  }
  $parent$jscomp$3_ret$jscomp$19$$.$arr$[$subidx$jscomp$3$$] = $JSCompiler_temp$jscomp$67_tv$$;
  return $parent$jscomp$3_ret$jscomp$19$$;
};
function $cljs$core$TransientVector$$($cnt$jscomp$10$$, $shift$jscomp$2$$, $root$jscomp$6$$, $tail$jscomp$2$$) {
  this.$cnt$ = $cnt$jscomp$10$$;
  this.shift = $shift$jscomp$2$$;
  this.root = $root$jscomp$6$$;
  this.$tail$ = $tail$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 88;
  this.$cljs$lang$protocol_mask$partition0$$ = 275;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientVector$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$jscomp$18$$, $o$jscomp$86$$) {
  if (this.root.$edit$) {
    if (32 > this.$cnt$ - $cljs$core$tail_off$$(this)) {
      this.$tail$[this.$cnt$ & 31] = $o$jscomp$86$$;
    } else {
      var $tail_node$jscomp$1$$ = new $cljs$core$VectorNode$$(this.root.$edit$, this.$tail$), $new_root_array_new_tail$jscomp$3$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $new_root_array_new_tail$jscomp$3$$[0] = $o$jscomp$86$$;
      this.$tail$ = $new_root_array_new_tail$jscomp$3$$;
      if (this.$cnt$ >>> 5 > 1 << this.shift) {
        var $new_root_array_new_tail$jscomp$3$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], $new_shift$jscomp$1$$ = this.shift + 5;
        $new_root_array_new_tail$jscomp$3$$[0] = this.root;
        $new_root_array_new_tail$jscomp$3$$[1] = $cljs$core$new_path$$(this.root.$edit$, this.shift, $tail_node$jscomp$1$$);
        this.root = new $cljs$core$VectorNode$$(this.root.$edit$, $new_root_array_new_tail$jscomp$3$$);
        this.shift = $new_shift$jscomp$1$$;
      } else {
        this.root = $cljs$core$tv_push_tail$$(this, this.shift, this.root, $tail_node$jscomp$1$$);
      }
    }
    this.$cnt$ += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  if (this.root.$edit$) {
    this.root.$edit$ = null;
    var $len$jscomp$20$$ = this.$cnt$ - $cljs$core$tail_off$$(this), $trimmed_tail$$ = Array($len$jscomp$20$$);
    $cljs$core$array_copy$$(this.$tail$, 0, $trimmed_tail$$, 0, $len$jscomp$20$$);
    return new $cljs$core$PersistentVector$$(null, this.$cnt$, this.shift, this.root, $trimmed_tail$$, null);
  }
  throw Error("persistent! called twice");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($tcoll$jscomp$20$$, $key$jscomp$73$$, $val$jscomp$62$$) {
  if ("number" === typeof $key$jscomp$73$$) {
    return $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$$(this, $key$jscomp$73$$, $val$jscomp$62$$);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
function $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$$($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$, $n$jscomp$108$$, $val$jscomp$63$$) {
  if ($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.root.$edit$) {
    if (0 <= $n$jscomp$108$$ && $n$jscomp$108$$ < $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$cnt$) {
      if ($cljs$core$tail_off$$($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$) <= $n$jscomp$108$$) {
        $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$tail$[$n$jscomp$108$$ & 31] = $val$jscomp$63$$;
      } else {
        var $new_root$jscomp$3$$ = function() {
          return function $cljs$core$go$$($new_root$jscomp$3$$, $node$jscomp$20$$) {
            var $level$jscomp$16$$ = $cljs$core$tv_ensure_editable$$($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.root.$edit$, $node$jscomp$20$$);
            if (0 === $new_root$jscomp$3$$) {
              $level$jscomp$16$$.$arr$[$n$jscomp$108$$ & 31] = $val$jscomp$63$$;
            } else {
              var $subidx$jscomp$5$$ = $n$jscomp$108$$ >>> $new_root$jscomp$3$$ & 31, $val$jscomp$inline_638$$ = $cljs$core$go$$($new_root$jscomp$3$$ - 5, $level$jscomp$16$$.$arr$[$subidx$jscomp$5$$]);
              $level$jscomp$16$$.$arr$[$subidx$jscomp$5$$] = $val$jscomp$inline_638$$;
            }
            return $level$jscomp$16$$;
          };
        }($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$).call(null, $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.shift, $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.root);
        $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.root = $new_root$jscomp$3$$;
      }
      return $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$;
    }
    if ($n$jscomp$108$$ === $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$cnt$) {
      return $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$(null, $val$jscomp$63$$);
    }
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Index "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$108$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" out of bounds for TransientVector of length"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$cnt$)].join(""));
  }
  throw Error("assoc! after persistent!");
}
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if (this.root.$edit$) {
    return this.$cnt$;
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$347$$, $n$jscomp$109$$) {
  if (this.root.$edit$) {
    return $cljs$core$array_for$$(this, $n$jscomp$109$$)[$n$jscomp$109$$ & 31];
  }
  throw Error("nth after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$348$$, $n$jscomp$110$$, $not_found$jscomp$24$$) {
  return 0 <= $n$jscomp$110$$ && $n$jscomp$110$$ < this.$cnt$ ? this.$cljs$core$IIndexed$_nth$arity$2$(null, $n$jscomp$110$$) : $not_found$jscomp$24$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$349$$, $k$jscomp$105$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$105$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$350$$, $k$jscomp$106$$, $not_found$jscomp$25$$) {
  return "number" === typeof $k$jscomp$106$$ ? this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$106$$, $not_found$jscomp$25$$) : $not_found$jscomp$25$$;
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__12939$$ = null, $G__12939$$ = function($G__12939$$, $k$jscomp$109$$, $not_found$jscomp$27$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$109$$);
      case 3:
        return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$109$$, $not_found$jscomp$27$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12939$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12939$$, $k$jscomp$107$$) {
    return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$107$$);
  };
  $G__12939$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__12939$$, $k$jscomp$108$$, $not_found$jscomp$26$$) {
    return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$108$$, $not_found$jscomp$26$$);
  };
  return $G__12939$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$445$$, $args12936$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args12936$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$110$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$110$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$111$$, $not_found$jscomp$28$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$111$$, $not_found$jscomp$28$$);
};
function $cljs$core$NeverEquiv$$() {
  this.$cljs$lang$protocol_mask$partition0$$ = 2097152;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$NeverEquiv$$.prototype.equiv = function($other$jscomp$68$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$68$$);
};
$cljs$core$NeverEquiv$$.prototype.$cljs$core$IEquiv$_equiv$arity$2$ = function() {
  return !1;
};
var $cljs$core$never_equiv$$ = new $cljs$core$NeverEquiv$$;
function $cljs$core$equiv_map$$($x$jscomp$477$$, $y$jscomp$214$$) {
  return $cljs$core$boolean$0$$($cljs$core$map_QMARK_$$($y$jscomp$214$$) ? $cljs$core$count$$($x$jscomp$477$$) === $cljs$core$count$$($y$jscomp$214$$) ? $cljs$core$every_QMARK_$$(function($x$jscomp$477$$) {
    return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($y$jscomp$214$$, $cljs$core$first$$($x$jscomp$477$$), $cljs$core$never_equiv$$), $cljs$core$second$$($x$jscomp$477$$));
  }, $x$jscomp$477$$) : null : null);
}
function $cljs$core$ES6EntriesIterator$$($s$jscomp$80$$) {
  this.$s$ = $s$jscomp$80$$;
}
$cljs$core$ES6EntriesIterator$$.prototype.next = function() {
  if (null != this.$s$) {
    var $v$jscomp$30_vec__12964$$ = $cljs$core$first$$(this.$s$), $k$jscomp$127$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$30_vec__12964$$, 0, null), $v$jscomp$30_vec__12964$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$30_vec__12964$$, 1, null);
    this.$s$ = $cljs$core$next$$(this.$s$);
    return {value:[$k$jscomp$127$$, $v$jscomp$30_vec__12964$$], done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$ES6SetEntriesIterator$$($s$jscomp$82$$) {
  this.$s$ = $s$jscomp$82$$;
}
$cljs$core$ES6SetEntriesIterator$$.prototype.next = function() {
  if (null != this.$s$) {
    var $x$jscomp$478$$ = $cljs$core$first$$(this.$s$);
    this.$s$ = $cljs$core$next$$(this.$s$);
    return {value:[$x$jscomp$478$$, $x$jscomp$478$$], done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$array_index_of$$($arr$jscomp$98$$, $k$jscomp$132$$) {
  if ($k$jscomp$132$$ instanceof $cljs$core$Keyword$$) {
    a: {
      var $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $arr$jscomp$98$$.length;
      for (var $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ = $k$jscomp$132$$.$fqn$, $i$jscomp$inline_267_i$jscomp$inline_278$$ = 0;;) {
        if ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ <= $i$jscomp$inline_267_i$jscomp$inline_278$$) {
          $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = -1;
          break a;
        }
        if ($arr$jscomp$98$$[$i$jscomp$inline_267_i$jscomp$inline_278$$] instanceof $cljs$core$Keyword$$ && $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ === $arr$jscomp$98$$[$i$jscomp$inline_267_i$jscomp$inline_278$$].$fqn$) {
          $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $i$jscomp$inline_267_i$jscomp$inline_278$$;
          break a;
        }
        $i$jscomp$inline_267_i$jscomp$inline_278$$ += 2;
      }
    }
  } else {
    if ("string" == typeof $k$jscomp$132$$ || "number" === typeof $k$jscomp$132$$) {
      a: {
        for ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $arr$jscomp$98$$.length, $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ = 0;;) {
          if ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ <= $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$) {
            $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = -1;
            break a;
          }
          if ($k$jscomp$132$$ === $arr$jscomp$98$$[$i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$]) {
            $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$;
            break a;
          }
          $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ += 2;
        }
      }
    } else {
      if ($k$jscomp$132$$ instanceof $cljs$core$Symbol$$) {
        a: {
          for ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $arr$jscomp$98$$.length, $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ = $k$jscomp$132$$.$str$, $i$jscomp$inline_267_i$jscomp$inline_278$$ = 0;;) {
            if ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ <= $i$jscomp$inline_267_i$jscomp$inline_278$$) {
              $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = -1;
              break a;
            }
            if ($arr$jscomp$98$$[$i$jscomp$inline_267_i$jscomp$inline_278$$] instanceof $cljs$core$Symbol$$ && $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ === $arr$jscomp$98$$[$i$jscomp$inline_267_i$jscomp$inline_278$$].$str$) {
              $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $i$jscomp$inline_267_i$jscomp$inline_278$$;
              break a;
            }
            $i$jscomp$inline_267_i$jscomp$inline_278$$ += 2;
          }
        }
      } else {
        if (null == $k$jscomp$132$$) {
          a: {
            for ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $arr$jscomp$98$$.length, $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ = 0;;) {
              if ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ <= $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$) {
                $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = -1;
                break a;
              }
              if (null == $arr$jscomp$98$$[$i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$]) {
                $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$;
                break a;
              }
              $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ += 2;
            }
          }
        } else {
          a: {
            for ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $arr$jscomp$98$$.length, $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ = 0;;) {
              if ($JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ <= $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$) {
                $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = -1;
                break a;
              }
              if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$jscomp$132$$, $arr$jscomp$98$$[$i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$])) {
                $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$ = $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$;
                break a;
              }
              $i$jscomp$inline_272_i$jscomp$inline_282_i$jscomp$inline_287_kstr$jscomp$inline_266_kstr$jscomp$inline_277$$ += 2;
            }
          }
        }
      }
    }
  }
  return $JSCompiler_temp$jscomp$68_JSCompiler_temp$jscomp$69_JSCompiler_temp$jscomp$70_JSCompiler_temp$jscomp$71_len$jscomp$inline_265_len$jscomp$inline_271_len$jscomp$inline_276_len$jscomp$inline_281_len$jscomp$inline_286$$;
}
function $cljs$core$PersistentArrayMapSeq$$($arr$jscomp$100$$, $i$jscomp$199$$, $_meta$jscomp$4$$) {
  this.$arr$ = $arr$jscomp$100$$;
  this.$i$ = $i$jscomp$199$$;
  this.$_meta$ = $_meta$jscomp$4$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374990;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentArrayMapSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$73$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$73$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__12978$$ = null, $G__12978$$ = function($G__12978$$, $start$jscomp$82$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12978$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12978$$, $start$jscomp$82$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12978$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__12978$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12978$$, 0);
  };
  $G__12978$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12978$$, $start$jscomp$81$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12978$$, $start$jscomp$81$$);
  };
  return $G__12978$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__12979__1$$($G__12979__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12979__1$$, $cljs$core$count$$(this));
  }
  var $G__12979$$ = null, $G__12979$$ = function($G__12979$$, $start$jscomp$84$$) {
    switch(arguments.length) {
      case 1:
        return $G__12979__1$$.call(this, $G__12979$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12979$$, $start$jscomp$84$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__12979$$.$cljs$core$IFn$_invoke$arity$1$ = $G__12979__1$$;
  $G__12979$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__12979__1$$, $G__12979$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__12979__1$$, $G__12979$$);
  };
  return $G__12979$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return this.$i$ < this.$arr$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.$i$ + 2, this.$_meta$) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return (this.$arr$.length - this.$i$) / 2;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$426$$, $other$jscomp$74$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$74$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$428$$, $f$jscomp$228$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$228$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$429$$, $f$jscomp$229$$, $start$jscomp$85$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$229$$, $start$jscomp$85$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.$arr$[this.$i$], this.$arr$[this.$i$ + 1]], null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return this.$i$ < this.$arr$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.$i$ + 2, this.$_meta$) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$433$$, $new_meta$jscomp$5$$) {
  return new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.$i$, $new_meta$jscomp$5$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$434$$, $o$jscomp$91$$) {
  return $cljs$core$cons$$($o$jscomp$91$$, this);
};
$cljs$core$PersistentArrayMapSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$PersistentArrayMapIterator$$($arr$jscomp$103$$, $i$jscomp$202$$, $cnt$jscomp$12$$) {
  this.$arr$ = $arr$jscomp$103$$;
  this.$i$ = $i$jscomp$202$$;
  this.$cnt$ = $cnt$jscomp$12$$;
}
$cljs$core$PersistentArrayMapIterator$$.prototype.$hasNext$ = function() {
  return this.$i$ < this.$cnt$;
};
$cljs$core$PersistentArrayMapIterator$$.prototype.next = function() {
  var $ret$jscomp$21$$ = new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.$arr$[this.$i$], this.$arr$[this.$i$ + 1]], null);
  this.$i$ += 2;
  return $ret$jscomp$21$$;
};
function $cljs$core$PersistentArrayMap$$($meta$jscomp$36$$, $cnt$jscomp$14$$, $arr$jscomp$105$$, $__hash$jscomp$23$$) {
  this.$meta$ = $meta$jscomp$36$$;
  this.$cnt$ = $cnt$jscomp$14$$;
  this.$arr$ = $arr$jscomp$105$$;
  this.$__hash$ = $__hash$jscomp$23$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 16647951;
  this.$cljs$lang$protocol_mask$partition1$$ = 8196;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentArrayMap$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$75$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$75$$);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$keys$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  return new $cljs$core$ES6EntriesIterator$$($cljs$core$seq$$($cljs$core$seq$$(this)));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$vals$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.has = function($k$jscomp$147$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$jscomp$147$$);
};
$JSCompiler_prototypeAlias$$.get = function($k$jscomp$148$$, $not_found$jscomp$38$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$148$$, $not_found$jscomp$38$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$230$$) {
  for (var $G__13004_v$jscomp$35_vec__12985$$, $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$, $G__13002_seq__12981_seq__12981__$1$$ = $cljs$core$seq$$(this), $c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$ = null, $count__12983$$ = 0, $i__12984$$ = 0;;) {
    if ($i__12984$$ < $count__12983$$) {
      $G__13004_v$jscomp$35_vec__12985$$ = $c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__12984$$), $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__13004_v$jscomp$35_vec__12985$$, 0, null), $G__13004_v$jscomp$35_vec__12985$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__13004_v$jscomp$35_vec__12985$$, 1, null), $f$jscomp$230$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$230$$.$cljs$core$IFn$_invoke$arity$2$($G__13004_v$jscomp$35_vec__12985$$, 
      $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$) : $f$jscomp$230$$.call(null, $G__13004_v$jscomp$35_vec__12985$$, $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$), $i__12984$$ += 1;
    } else {
      if ($G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$ = $cljs$core$seq$$($G__13002_seq__12981_seq__12981__$1$$)) {
        $G__13002_seq__12981_seq__12981__$1$$ = $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$, $cljs$core$chunked_seq_QMARK_$$($G__13002_seq__12981_seq__12981__$1$$) ? ($c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$ = $cljs$core$_chunked_first$$($G__13002_seq__12981_seq__12981__$1$$), $G__13002_seq__12981_seq__12981__$1$$ = $cljs$core$_chunked_rest$$($G__13002_seq__12981_seq__12981__$1$$), $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$ = $c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$, 
        $G__13004_v$jscomp$35_vec__12985$$ = $cljs$core$count$$($c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$), $c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$ = $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$, $count__12983$$ = $G__13004_v$jscomp$35_vec__12985$$) : ($c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$ = $cljs$core$first$$($G__13002_seq__12981_seq__12981__$1$$), $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$, 
        0, null), $G__13004_v$jscomp$35_vec__12985$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$, 1, null), $f$jscomp$230$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$230$$.$cljs$core$IFn$_invoke$arity$2$($G__13004_v$jscomp$35_vec__12985$$, $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$) : $f$jscomp$230$$.call(null, $G__13004_v$jscomp$35_vec__12985$$, $G__13003_k$jscomp$149_temp__5278__auto__$jscomp$10$$), $G__13002_seq__12981_seq__12981__$1$$ = 
        $cljs$core$next$$($G__13002_seq__12981_seq__12981__$1$$), $c__8871__auto__$jscomp$1_chunk__12982_vec__12988$$ = null, $count__12983$$ = 0), $i__12984$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$443$$, $k$jscomp$150$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$150$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$444_idx$jscomp$11$$, $k$jscomp$151$$, $not_found$jscomp$39$$) {
  $coll$jscomp$444_idx$jscomp$11$$ = $cljs$core$array_index_of$$(this.$arr$, $k$jscomp$151$$);
  return -1 === $coll$jscomp$444_idx$jscomp$11$$ ? $not_found$jscomp$39$$ : this.$arr$[$coll$jscomp$444_idx$jscomp$11$$ + 1];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$PersistentArrayMapIterator$$(this.$arr$, 0, 2 * this.$cnt$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$13_h__8402__auto____$1$jscomp$13$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$13_h__8402__auto____$1$jscomp$13$$ ? $h__8402__auto__$jscomp$13_h__8402__auto____$1$jscomp$13$$ : this.$__hash$ = $h__8402__auto__$jscomp$13_h__8402__auto____$1$jscomp$13$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$449$$, $other$jscomp$76$$) {
  if (null != $other$jscomp$76$$ && ($other$jscomp$76$$.$cljs$lang$protocol_mask$partition0$$ & 1024 || $cljs$core$PROTOCOL_SENTINEL$$ === $other$jscomp$76$$.$cljs$core$IMap$$)) {
    var $alen$$ = this.$arr$.length;
    if (this.$cnt$ === $other$jscomp$76$$.$cljs$core$ICounted$_count$arity$1$(null)) {
      for (var $i$jscomp$205$$ = 0;;) {
        if ($i$jscomp$205$$ < $alen$$) {
          var $v$jscomp$36$$ = $other$jscomp$76$$.$cljs$core$ILookup$_lookup$arity$3$(null, this.$arr$[$i$jscomp$205$$], $cljs$core$lookup_sentinel$$);
          if ($v$jscomp$36$$ !== $cljs$core$lookup_sentinel$$) {
            if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(this.$arr$[$i$jscomp$205$$ + 1], $v$jscomp$36$$)) {
              $i$jscomp$205$$ += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return $cljs$core$equiv_map$$(this, $other$jscomp$76$$);
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientArrayMap$$({}, this.$arr$.length, $cljs$core$aclone$$(this.$arr$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$452$$, $f$jscomp$232$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$232$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$453$$, $f$jscomp$233$$, $start$jscomp$86$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$233$$, $start$jscomp$86$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($arr$jscomp$inline_539_coll$jscomp$455_idx$jscomp$13$$, $G__12997$jscomp$inline_289_k$jscomp$153$$, $v$jscomp$37$$) {
  $arr$jscomp$inline_539_coll$jscomp$455_idx$jscomp$13$$ = $cljs$core$array_index_of$$(this.$arr$, $G__12997$jscomp$inline_289_k$jscomp$153$$);
  if (-1 === $arr$jscomp$inline_539_coll$jscomp$455_idx$jscomp$13$$) {
    if (this.$cnt$ < $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$) {
      $arr$jscomp$inline_539_coll$jscomp$455_idx$jscomp$13$$ = this.$arr$;
      for (var $l$jscomp$inline_542$$ = $arr$jscomp$inline_539_coll$jscomp$455_idx$jscomp$13$$.length, $narr$jscomp$inline_543$$ = Array($l$jscomp$inline_542$$ + 2), $i_12972$jscomp$inline_544$$ = 0;;) {
        if ($i_12972$jscomp$inline_544$$ < $l$jscomp$inline_542$$) {
          $narr$jscomp$inline_543$$[$i_12972$jscomp$inline_544$$] = $arr$jscomp$inline_539_coll$jscomp$455_idx$jscomp$13$$[$i_12972$jscomp$inline_544$$], $i_12972$jscomp$inline_544$$ += 1;
        } else {
          break;
        }
      }
      $narr$jscomp$inline_543$$[$l$jscomp$inline_542$$] = $G__12997$jscomp$inline_289_k$jscomp$153$$;
      $narr$jscomp$inline_543$$[$l$jscomp$inline_542$$ + 1] = $v$jscomp$37$$;
      return new $cljs$core$PersistentArrayMap$$(this.$meta$, this.$cnt$ + 1, $narr$jscomp$inline_543$$, null);
    }
    return $cljs$core$_with_meta$$($cljs$core$_assoc$$($cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$PersistentHashMap$EMPTY$$, this), $G__12997$jscomp$inline_289_k$jscomp$153$$, $v$jscomp$37$$), this.$meta$);
  }
  if ($v$jscomp$37$$ === this.$arr$[$arr$jscomp$inline_539_coll$jscomp$455_idx$jscomp$13$$ + 1]) {
    return this;
  }
  $G__12997$jscomp$inline_289_k$jscomp$153$$ = $cljs$core$aclone$$(this.$arr$);
  $G__12997$jscomp$inline_289_k$jscomp$153$$[$arr$jscomp$inline_539_coll$jscomp$455_idx$jscomp$13$$ + 1] = $v$jscomp$37$$;
  return new $cljs$core$PersistentArrayMap$$(this.$meta$, this.$cnt$, $G__12997$jscomp$inline_289_k$jscomp$153$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$jscomp$456$$, $k$jscomp$154$$) {
  return -1 !== $cljs$core$array_index_of$$(this.$arr$, $k$jscomp$154$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  var $arr$jscomp$inline_291$$ = this.$arr$;
  return 0 <= $arr$jscomp$inline_291$$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$($arr$jscomp$inline_291$$, 0, null) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$458$$, $meta__$1$jscomp$9$$) {
  return new $cljs$core$PersistentArrayMap$$($meta__$1$jscomp$9$$, this.$cnt$, this.$arr$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$459$$, $entry$jscomp$2$$) {
  if ($cljs$core$vector_QMARK_$$($entry$jscomp$2$$)) {
    return this.$cljs$core$IAssociative$_assoc$arity$3$(null, $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($entry$jscomp$2$$, 0), $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($entry$jscomp$2$$, 1));
  }
  for (var $G__13017_ret$jscomp$22$$ = this, $G__13018_es$$ = $cljs$core$seq$$($entry$jscomp$2$$);;) {
    if (null == $G__13018_es$$) {
      return $G__13017_ret$jscomp$22$$;
    }
    var $e$jscomp$97$$ = $cljs$core$first$$($G__13018_es$$);
    if ($cljs$core$vector_QMARK_$$($e$jscomp$97$$)) {
      $G__13017_ret$jscomp$22$$ = $G__13017_ret$jscomp$22$$.$cljs$core$IAssociative$_assoc$arity$3$(null, $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($e$jscomp$97$$, 0), $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($e$jscomp$97$$, 1)), $G__13018_es$$ = $cljs$core$next$$($G__13018_es$$);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__13019$$ = null, $G__13019$$ = function($G__13019$$, $k$jscomp$157$$, $not_found$jscomp$41$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$157$$);
      case 3:
        return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$157$$, $not_found$jscomp$41$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13019$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13019$$, $k$jscomp$155$$) {
    return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$155$$);
  };
  $G__13019$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__13019$$, $k$jscomp$156$$, $not_found$jscomp$40$$) {
    return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$156$$, $not_found$jscomp$40$$);
  };
  return $G__13019$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$601$$, $args12980$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args12980$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$158$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$158$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$159$$, $not_found$jscomp$42$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$159$$, $not_found$jscomp$42$$);
};
var $cljs$core$PersistentArrayMap$EMPTY$$ = new $cljs$core$PersistentArrayMap$$(null, 0, [], $cljs$core$empty_unordered_hash$$), $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$ = 8;
function $cljs$core$PersistentArrayMap$createAsIfByAssoc$$($arr$jscomp$109$$) {
  for (var $ret$jscomp$25$$ = [], $i_13033$$ = 0;;) {
    if ($i_13033$$ < $arr$jscomp$109$$.length) {
      var $k_13034$$ = $arr$jscomp$109$$[$i_13033$$], $v_13035$$ = $arr$jscomp$109$$[$i_13033$$ + 1], $G__13032_13037_idx_13036$$ = $cljs$core$array_index_of$$($ret$jscomp$25$$, $k_13034$$);
      -1 === $G__13032_13037_idx_13036$$ ? ($G__13032_13037_idx_13036$$ = $ret$jscomp$25$$, $G__13032_13037_idx_13036$$.push($k_13034$$), $G__13032_13037_idx_13036$$.push($v_13035$$)) : $ret$jscomp$25$$[$G__13032_13037_idx_13036$$ + 1] = $v_13035$$;
      $i_13033$$ += 2;
    } else {
      break;
    }
  }
  return new $cljs$core$PersistentArrayMap$$(null, $ret$jscomp$25$$.length / 2, $ret$jscomp$25$$, null);
}
$cljs$core$PersistentArrayMap$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientArrayMap$$($editable_QMARK_$$, $len$jscomp$31$$, $arr$jscomp$110$$) {
  this.$editable_QMARK_$ = $editable_QMARK_$$;
  this.$len$ = $len$jscomp$31$$;
  this.$arr$ = $arr$jscomp$110$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 258;
  this.$cljs$lang$protocol_mask$partition1$$ = 56;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientArrayMap$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    return $cljs$core$quot$$(this.$len$);
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$jscomp$24$$, $k$jscomp$160$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$160$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($idx$jscomp$14_tcoll$jscomp$25$$, $k$jscomp$161$$, $not_found$jscomp$43$$) {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    return $idx$jscomp$14_tcoll$jscomp$25$$ = $cljs$core$array_index_of$$(this.$arr$, $k$jscomp$161$$), -1 === $idx$jscomp$14_tcoll$jscomp$25$$ ? $not_found$jscomp$43$$ : this.$arr$[$idx$jscomp$14_tcoll$jscomp$25$$ + 1];
  }
  throw Error("lookup after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$jscomp$26$$, $o$jscomp$92$$) {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    if (null != $o$jscomp$92$$ ? $o$jscomp$92$$.$cljs$lang$protocol_mask$partition0$$ & 2048 || $cljs$core$PROTOCOL_SENTINEL$$ === $o$jscomp$92$$.$cljs$core$IMapEntry$$ || ($o$jscomp$92$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMapEntry$$, $o$jscomp$92$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMapEntry$$, $o$jscomp$92$$)) {
      return this.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$(null, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$92$$) : $cljs$core$key$$.call(null, $o$jscomp$92$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($o$jscomp$92$$) : $cljs$core$val$$.call(null, $o$jscomp$92$$));
    }
    for (var $G__13041_es$jscomp$1$$ = $cljs$core$seq$$($o$jscomp$92$$), $G__13042_tcoll__$2$$ = this;;) {
      var $e$jscomp$98_temp__5276__auto__$jscomp$5$$ = $cljs$core$first$$($G__13041_es$jscomp$1$$);
      if ($cljs$core$truth_$$($e$jscomp$98_temp__5276__auto__$jscomp$5$$)) {
        $G__13041_es$jscomp$1$$ = $cljs$core$next$$($G__13041_es$jscomp$1$$), $G__13042_tcoll__$2$$ = $G__13042_tcoll__$2$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$(null, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$98_temp__5276__auto__$jscomp$5$$) : $cljs$core$key$$.call(null, $e$jscomp$98_temp__5276__auto__$jscomp$5$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$98_temp__5276__auto__$jscomp$5$$) : 
        $cljs$core$val$$.call(null, $e$jscomp$98_temp__5276__auto__$jscomp$5$$));
      } else {
        return $G__13042_tcoll__$2$$;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    return this.$editable_QMARK_$ = !1, new $cljs$core$PersistentArrayMap$$(null, $cljs$core$quot$$(this.$len$), this.$arr$, null);
  }
  throw Error("persistent! called twice");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($idx$jscomp$15_tcoll$jscomp$28_tcoll$jscomp$inline_295$$, $key$jscomp$76$$, $val$jscomp$66$$) {
  if ($cljs$core$truth_$$(this.$editable_QMARK_$)) {
    $idx$jscomp$15_tcoll$jscomp$28_tcoll$jscomp$inline_295$$ = $cljs$core$array_index_of$$(this.$arr$, $key$jscomp$76$$);
    if (-1 === $idx$jscomp$15_tcoll$jscomp$28_tcoll$jscomp$inline_295$$) {
      if (this.$len$ + 2 <= 2 * $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$) {
        return this.$len$ += 2, this.$arr$.push($key$jscomp$76$$), this.$arr$.push($val$jscomp$66$$), this;
      }
      $idx$jscomp$15_tcoll$jscomp$28_tcoll$jscomp$inline_295$$ = $cljs$core$array__GT_transient_hash_map$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$array__GT_transient_hash_map$$.$cljs$core$IFn$_invoke$arity$2$(this.$len$, this.$arr$) : $cljs$core$array__GT_transient_hash_map$$.call(null, this.$len$, this.$arr$);
      return $cljs$core$_assoc_BANG_$$($idx$jscomp$15_tcoll$jscomp$28_tcoll$jscomp$inline_295$$, $key$jscomp$76$$, $val$jscomp$66$$);
    }
    $val$jscomp$66$$ !== this.$arr$[$idx$jscomp$15_tcoll$jscomp$28_tcoll$jscomp$inline_295$$ + 1] && (this.$arr$[$idx$jscomp$15_tcoll$jscomp$28_tcoll$jscomp$inline_295$$ + 1] = $val$jscomp$66$$);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function $cljs$core$array__GT_transient_hash_map$$($len$jscomp$33$$, $arr$jscomp$112$$) {
  for (var $G__13044_out$jscomp$2$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashMap$EMPTY$$), $G__13045_i$jscomp$206$$ = 0;;) {
    if ($G__13045_i$jscomp$206$$ < $len$jscomp$33$$) {
      $G__13044_out$jscomp$2$$ = $cljs$core$_assoc_BANG_$$($G__13044_out$jscomp$2$$, $arr$jscomp$112$$[$G__13045_i$jscomp$206$$], $arr$jscomp$112$$[$G__13045_i$jscomp$206$$ + 1]), $G__13045_i$jscomp$206$$ += 2;
    } else {
      return $G__13044_out$jscomp$2$$;
    }
  }
}
function $cljs$core$Box$$() {
  this.$val$ = !1;
}
function $cljs$core$key_test$$($key$jscomp$78$$, $other$jscomp$77$$) {
  return $key$jscomp$78$$ === $other$jscomp$77$$ ? !0 : $cljs$core$keyword_identical_QMARK_$$($key$jscomp$78$$, $other$jscomp$77$$) ? !0 : $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($key$jscomp$78$$, $other$jscomp$77$$);
}
function $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$($G__13049_arr$jscomp$113$$, $i$jscomp$207$$, $a$jscomp$172$$) {
  $G__13049_arr$jscomp$113$$ = $cljs$core$aclone$$($G__13049_arr$jscomp$113$$);
  $G__13049_arr$jscomp$113$$[$i$jscomp$207$$] = $a$jscomp$172$$;
  return $G__13049_arr$jscomp$113$$;
}
function $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$($editable_inode$$, $edit$jscomp$5$$, $i$jscomp$210$$, $a$jscomp$174$$) {
  $editable_inode$$ = $editable_inode$$.$ensure_editable$($edit$jscomp$5$$);
  $editable_inode$$.$arr$[$i$jscomp$210$$] = $a$jscomp$174$$;
  return $editable_inode$$;
}
function $cljs$core$NodeIterator$$($arr$jscomp$117$$, $i$jscomp$213$$, $next_entry$$, $next_iter$$) {
  this.$arr$ = $arr$jscomp$117$$;
  this.$i$ = $i$jscomp$213$$;
  this.$next_entry$ = $next_entry$$;
  this.$next_iter$ = $next_iter$$;
}
$cljs$core$NodeIterator$$.prototype.advance = function() {
  for (var $len$jscomp$35$$ = this.$arr$.length;;) {
    if (this.$i$ < $len$jscomp$35$$) {
      var $JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$ = this.$arr$[this.$i$], $node_or_val$$ = this.$arr$[this.$i$ + 1];
      null != $JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$ ? $JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$ = this.$next_entry$ = new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$, $node_or_val$$], null) : null != $node_or_val$$ ? 
      ($JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$ = $cljs$core$_iterator$$($node_or_val$$), $JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$ = $JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$.$hasNext$() ? this.$next_iter$ = $JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$ : 
      !1) : $JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$ = !1;
      this.$i$ += 2;
      if ($JSCompiler_temp$jscomp$73_JSCompiler_temp$jscomp$74_found$jscomp$1_key$jscomp$79_new_iter$jscomp$inline_299$$) {
        return !0;
      }
    } else {
      return !1;
    }
  }
};
$cljs$core$NodeIterator$$.prototype.$hasNext$ = function() {
  var $or__7960__auto__$jscomp$30_or__7960__auto____$1$jscomp$9$$ = null != this.$next_entry$;
  return $or__7960__auto__$jscomp$30_or__7960__auto____$1$jscomp$9$$ ? $or__7960__auto__$jscomp$30_or__7960__auto____$1$jscomp$9$$ : ($or__7960__auto__$jscomp$30_or__7960__auto____$1$jscomp$9$$ = null != this.$next_iter$) ? $or__7960__auto__$jscomp$30_or__7960__auto____$1$jscomp$9$$ : this.advance();
};
$cljs$core$NodeIterator$$.prototype.next = function() {
  if (null != this.$next_entry$) {
    var $ret$jscomp$26$$ = this.$next_entry$;
    this.$next_entry$ = null;
    return $ret$jscomp$26$$;
  }
  if (null != this.$next_iter$) {
    return $ret$jscomp$26$$ = this.$next_iter$.next(), this.$next_iter$.$hasNext$() || (this.$next_iter$ = null), $ret$jscomp$26$$;
  }
  if (this.advance()) {
    return this.next();
  }
  throw Error("No such element");
};
$cljs$core$NodeIterator$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$BitmapIndexedNode$$($edit$jscomp$7$$, $bitmap$jscomp$1$$, $arr$jscomp$119$$) {
  this.$edit$ = $edit$jscomp$7$$;
  this.$bitmap$ = $bitmap$jscomp$1$$;
  this.$arr$ = $arr$jscomp$119$$;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$BitmapIndexedNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$jscomp$99$$) {
  if ($e$jscomp$99$$ === this.$edit$) {
    return this;
  }
  var $n$jscomp$114$$ = $cljs$core$bit_count$$(this.$bitmap$), $new_arr$jscomp$3$$ = Array(0 > $n$jscomp$114$$ ? 4 : 2 * ($n$jscomp$114$$ + 1));
  $cljs$core$array_copy$$(this.$arr$, 0, $new_arr$jscomp$3$$, 0, 2 * $n$jscomp$114$$);
  return new $cljs$core$BitmapIndexedNode$$($e$jscomp$99$$, this.$bitmap$, $new_arr$jscomp$3$$);
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(this.$arr$) : $cljs$core$create_inode_seq$$.call(null, this.$arr$);
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($shift$jscomp$7$$, $hash$jscomp$5$$, $key$jscomp$81$$, $not_found$jscomp$44$$) {
  var $bit$jscomp$4_key_or_nil$jscomp$1$$ = 1 << ($hash$jscomp$5$$ >>> $shift$jscomp$7$$ & 31);
  if (0 === (this.$bitmap$ & $bit$jscomp$4_key_or_nil$jscomp$1$$)) {
    return $not_found$jscomp$44$$;
  }
  var $idx$jscomp$18_val_or_node$jscomp$1$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$jscomp$4_key_or_nil$jscomp$1$$ - 1), $bit$jscomp$4_key_or_nil$jscomp$1$$ = this.$arr$[2 * $idx$jscomp$18_val_or_node$jscomp$1$$], $idx$jscomp$18_val_or_node$jscomp$1$$ = this.$arr$[2 * $idx$jscomp$18_val_or_node$jscomp$1$$ + 1];
  return null == $bit$jscomp$4_key_or_nil$jscomp$1$$ ? $idx$jscomp$18_val_or_node$jscomp$1$$.$inode_lookup$($shift$jscomp$7$$ + 5, $hash$jscomp$5$$, $key$jscomp$81$$, $not_found$jscomp$44$$) : $cljs$core$key_test$$($key$jscomp$81$$, $bit$jscomp$4_key_or_nil$jscomp$1$$) ? $idx$jscomp$18_val_or_node$jscomp$1$$ : $not_found$jscomp$44$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$, $G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$, $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$, $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$, $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$) {
  var $bit$jscomp$5_val_or_node$jscomp$2$$ = 1 << ($G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$ >>> $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ & 31), $idx$jscomp$19_j$jscomp$inline_561_nodes$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$jscomp$5_val_or_node$jscomp$2$$ - 1);
  if (0 === (this.$bitmap$ & $bit$jscomp$5_val_or_node$jscomp$2$$)) {
    var $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ = $cljs$core$bit_count$$(this.$bitmap$);
    if (2 * $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ < this.$arr$.length) {
      $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$ = this.$ensure_editable$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$);
      $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ = $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$.$arr$;
      $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$.$val$ = !0;
      a: {
        for ($G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$ = 2 * ($G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ - $idx$jscomp$19_j$jscomp$inline_561_nodes$$), $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$ = 2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$ + ($G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$ - 1), $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ = 
        2 * ($idx$jscomp$19_j$jscomp$inline_561_nodes$$ + 1) + ($G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$ - 1);;) {
          if (0 === $G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$) {
            break a;
          }
          $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[$G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$] = $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[$G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$];
          --$G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$;
          --$G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$;
          --$G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$;
        }
      }
      $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$] = $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$;
      $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$ + 1] = $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$;
      $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$.$bitmap$ |= $bit$jscomp$5_val_or_node$jscomp$2$$;
      return $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$;
    }
    if (16 <= $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$) {
      $idx$jscomp$19_j$jscomp$inline_561_nodes$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $idx$jscomp$19_j$jscomp$inline_561_nodes$$[$G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$ >>> $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ & 31] = $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ + 5, $G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$, $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$, 
      $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$, $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$);
      for ($G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$ = $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$ = 0;;) {
        if (32 > $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$) {
          0 !== (this.$bitmap$ >>> $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$ & 1) && ($idx$jscomp$19_j$jscomp$inline_561_nodes$$[$JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$] = null != this.$arr$[$G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$] ? $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ + 5, $cljs$core$hash$$(this.$arr$[$G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$]), 
          this.$arr$[$G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$], this.$arr$[$G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$ + 1], $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$) : this.$arr$[$G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$ + 1], $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$ += 2), $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$ += 1;
        } else {
          break;
        }
      }
      return new $cljs$core$ArrayNode$$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ + 1, $idx$jscomp$19_j$jscomp$inline_561_nodes$$);
    }
    $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ = Array(2 * ($G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ + 4));
    $cljs$core$array_copy$$(this.$arr$, 0, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$, 0, 2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$);
    $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$] = $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$;
    $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$ + 1] = $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$;
    $cljs$core$array_copy$$(this.$arr$, 2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$, 2 * ($idx$jscomp$19_j$jscomp$inline_561_nodes$$ + 1), 2 * ($G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ - $idx$jscomp$19_j$jscomp$inline_561_nodes$$));
    $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$.$val$ = !0;
    $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$ = this.$ensure_editable$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$);
    $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$.$arr$ = $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$;
    $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$.$bitmap$ |= $bit$jscomp$5_val_or_node$jscomp$2$$;
    return $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$;
  }
  $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ = this.$arr$[2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$];
  $bit$jscomp$5_val_or_node$jscomp$2$$ = this.$arr$[2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$ + 1];
  if (null == $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$) {
    return $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ = $bit$jscomp$5_val_or_node$jscomp$2$$.$inode_assoc_BANG_$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ + 5, $G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$, $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$, $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$, $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$), 
    $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$ === $bit$jscomp$5_val_or_node$jscomp$2$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, 2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$ + 1, $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$);
  }
  if ($cljs$core$key_test$$($JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$, $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$)) {
    return $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$ === $bit$jscomp$5_val_or_node$jscomp$2$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, 2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$ + 1, $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$);
  }
  $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$.$val$ = !0;
  $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$ = $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ + 5;
  $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$ = $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$ ? $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$, $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$, $bit$jscomp$5_val_or_node$jscomp$2$$, $G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$, 
  $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$, $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$) : $cljs$core$create_node$$.call(null, $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$, $G__13071$jscomp$inline_301_added_leaf_QMARK__i__$1$jscomp$inline_551$$, $G__11457$jscomp$inline_554_j__$1$jscomp$inline_552_key_or_nil$jscomp$2_n$jscomp$116$$, $bit$jscomp$5_val_or_node$jscomp$2$$, $G__11458$jscomp$inline_555_hash$jscomp$6_len$jscomp$inline_550_len__$1$jscomp$inline_553$$, 
  $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$, $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$);
  $G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$ = 2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$;
  $idx$jscomp$19_j$jscomp$inline_561_nodes$$ = 2 * $idx$jscomp$19_j$jscomp$inline_561_nodes$$ + 1;
  $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$ = this.$ensure_editable$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$);
  $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$.$arr$[$G__13086_G__13088_i$jscomp$inline_559_j_13084_val$jscomp$69$$] = null;
  $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$.$arr$[$idx$jscomp$19_j$jscomp$inline_561_nodes$$] = $JSCompiler_inline_result$jscomp$75_i_13083_key$jscomp$82$$;
  return $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_563$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$, $hash$jscomp$7$$, $i$jscomp$inline_566_i_13089_key$jscomp$83$$, $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$, $JSCompiler_temp_const$jscomp$77_added_leaf_QMARK_$jscomp$1$$) {
  var $bit$jscomp$6_val_or_node$jscomp$3$$ = 1 << ($hash$jscomp$7$$ >>> $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$ & 31), $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$jscomp$6_val_or_node$jscomp$3$$ - 1);
  if (0 === (this.$bitmap$ & $bit$jscomp$6_val_or_node$jscomp$3$$)) {
    var $JSCompiler_temp_const$jscomp$76_n$jscomp$117$$ = $cljs$core$bit_count$$(this.$bitmap$);
    if (16 <= $JSCompiler_temp_const$jscomp$76_n$jscomp$117$$) {
      $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$[$hash$jscomp$7$$ >>> $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$ & 31] = $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$ + 5, $hash$jscomp$7$$, $i$jscomp$inline_566_i_13089_key$jscomp$83$$, $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$, $JSCompiler_temp_const$jscomp$77_added_leaf_QMARK_$jscomp$1$$);
      for ($G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$ = $i$jscomp$inline_566_i_13089_key$jscomp$83$$ = 0;;) {
        if (32 > $i$jscomp$inline_566_i_13089_key$jscomp$83$$) {
          0 !== (this.$bitmap$ >>> $i$jscomp$inline_566_i_13089_key$jscomp$83$$ & 1) && ($idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$[$i$jscomp$inline_566_i_13089_key$jscomp$83$$] = null != this.$arr$[$G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$] ? $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$ + 5, $cljs$core$hash$$(this.$arr$[$G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$]), 
          this.$arr$[$G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$], this.$arr$[$G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$ + 1], $JSCompiler_temp_const$jscomp$77_added_leaf_QMARK_$jscomp$1$$) : this.$arr$[$G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$ + 1], $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$ += 2), $i$jscomp$inline_566_i_13089_key$jscomp$83$$ += 1;
        } else {
          break;
        }
      }
      return new $cljs$core$ArrayNode$$(null, $JSCompiler_temp_const$jscomp$76_n$jscomp$117$$ + 1, $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$);
    }
    $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$ = Array(2 * ($JSCompiler_temp_const$jscomp$76_n$jscomp$117$$ + 1));
    $cljs$core$array_copy$$(this.$arr$, 0, $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$, 0, 2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$);
    $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$[2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$] = $i$jscomp$inline_566_i_13089_key$jscomp$83$$;
    $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$[2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ + 1] = $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$;
    $cljs$core$array_copy$$(this.$arr$, 2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$, $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$, 2 * ($idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ + 1), 2 * ($JSCompiler_temp_const$jscomp$76_n$jscomp$117$$ - $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$));
    $JSCompiler_temp_const$jscomp$77_added_leaf_QMARK_$jscomp$1$$.$val$ = !0;
    return new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$ | $bit$jscomp$6_val_or_node$jscomp$3$$, $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$);
  }
  var $key_or_nil$jscomp$3$$ = this.$arr$[2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$], $bit$jscomp$6_val_or_node$jscomp$3$$ = this.$arr$[2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ + 1];
  if (null == $key_or_nil$jscomp$3$$) {
    return $JSCompiler_temp_const$jscomp$76_n$jscomp$117$$ = $bit$jscomp$6_val_or_node$jscomp$3$$.$inode_assoc$($G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$ + 5, $hash$jscomp$7$$, $i$jscomp$inline_566_i_13089_key$jscomp$83$$, $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$, $JSCompiler_temp_const$jscomp$77_added_leaf_QMARK_$jscomp$1$$), $JSCompiler_temp_const$jscomp$76_n$jscomp$117$$ === $bit$jscomp$6_val_or_node$jscomp$3$$ ? 
    this : new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, 2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ + 1, $JSCompiler_temp_const$jscomp$76_n$jscomp$117$$));
  }
  if ($cljs$core$key_test$$($i$jscomp$inline_566_i_13089_key$jscomp$83$$, $key_or_nil$jscomp$3$$)) {
    return $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$ === $bit$jscomp$6_val_or_node$jscomp$3$$ ? this : new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, 2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ + 1, $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$));
  }
  $JSCompiler_temp_const$jscomp$77_added_leaf_QMARK_$jscomp$1$$.$val$ = !0;
  $JSCompiler_temp_const$jscomp$77_added_leaf_QMARK_$jscomp$1$$ = this.$bitmap$;
  $JSCompiler_temp_const$jscomp$76_n$jscomp$117$$ = this.$arr$;
  $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$ += 5;
  $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$ = $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$ ? $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$($G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$, $key_or_nil$jscomp$3$$, $bit$jscomp$6_val_or_node$jscomp$3$$, $hash$jscomp$7$$, $i$jscomp$inline_566_i_13089_key$jscomp$83$$, $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$) : 
  $cljs$core$create_node$$.call(null, $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$, $key_or_nil$jscomp$3$$, $bit$jscomp$6_val_or_node$jscomp$3$$, $hash$jscomp$7$$, $i$jscomp$inline_566_i_13089_key$jscomp$83$$, $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$);
  $i$jscomp$inline_566_i_13089_key$jscomp$83$$ = 2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$;
  $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ = 2 * $idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$ + 1;
  $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$ = $cljs$core$aclone$$($JSCompiler_temp_const$jscomp$76_n$jscomp$117$$);
  $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$[$i$jscomp$inline_566_i_13089_key$jscomp$83$$] = null;
  $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$[$idx$jscomp$20_j$jscomp$inline_567_nodes$jscomp$1$$] = $G__13077$jscomp$inline_303_JSCompiler_inline_result$jscomp$78_new_arr$jscomp$5_shift$jscomp$9$$;
  return new $cljs$core$BitmapIndexedNode$$(null, $JSCompiler_temp_const$jscomp$77_added_leaf_QMARK_$jscomp$1$$, $G__13050$jscomp$inline_569_G__13092_G__13094_j_13090_val$jscomp$70$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$NodeIterator$$(this.$arr$, 0, null, null);
};
var $cljs$core$BitmapIndexedNode$EMPTY$$ = new $cljs$core$BitmapIndexedNode$$(null, 0, []);
function $cljs$core$ArrayNodeIterator$$($arr$jscomp$122$$, $i$jscomp$217$$, $next_iter$jscomp$2$$) {
  this.$arr$ = $arr$jscomp$122$$;
  this.$i$ = $i$jscomp$217$$;
  this.$next_iter$ = $next_iter$jscomp$2$$;
}
$cljs$core$ArrayNodeIterator$$.prototype.$hasNext$ = function() {
  for (var $len$jscomp$38$$ = this.$arr$.length;;) {
    if (null != this.$next_iter$ && this.$next_iter$.$hasNext$()) {
      return !0;
    }
    if (this.$i$ < $len$jscomp$38$$) {
      var $node$jscomp$46$$ = this.$arr$[this.$i$];
      this.$i$ += 1;
      null != $node$jscomp$46$$ && (this.$next_iter$ = $cljs$core$_iterator$$($node$jscomp$46$$));
    } else {
      return !1;
    }
  }
};
$cljs$core$ArrayNodeIterator$$.prototype.next = function() {
  if (this.$hasNext$()) {
    return this.$next_iter$.next();
  }
  throw Error("No such element");
};
$cljs$core$ArrayNodeIterator$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$ArrayNode$$($edit$jscomp$10$$, $cnt$jscomp$18$$, $arr$jscomp$124$$) {
  this.$edit$ = $edit$jscomp$10$$;
  this.$cnt$ = $cnt$jscomp$18$$;
  this.$arr$ = $arr$jscomp$124$$;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$jscomp$101$$) {
  return $e$jscomp$101$$ === this.$edit$ ? this : new $cljs$core$ArrayNode$$($e$jscomp$101$$, this.$cnt$, $cljs$core$aclone$$(this.$arr$));
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(this.$arr$) : $cljs$core$create_array_node_seq$$.call(null, this.$arr$);
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($shift$jscomp$13$$, $hash$jscomp$11$$, $key$jscomp$87$$, $not_found$jscomp$46$$) {
  var $node$jscomp$49$$ = this.$arr$[$hash$jscomp$11$$ >>> $shift$jscomp$13$$ & 31];
  return null != $node$jscomp$49$$ ? $node$jscomp$49$$.$inode_lookup$($shift$jscomp$13$$ + 5, $hash$jscomp$11$$, $key$jscomp$87$$, $not_found$jscomp$46$$) : $not_found$jscomp$46$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($edit__$1$jscomp$3_editable$jscomp$5$$, $n$jscomp$120_shift$jscomp$14$$, $hash$jscomp$12$$, $key$jscomp$88$$, $val$jscomp$71$$, $added_leaf_QMARK_$jscomp$2$$) {
  var $idx$jscomp$26$$ = $hash$jscomp$12$$ >>> $n$jscomp$120_shift$jscomp$14$$ & 31, $node$jscomp$50$$ = this.$arr$[$idx$jscomp$26$$];
  if (null == $node$jscomp$50$$) {
    return $edit__$1$jscomp$3_editable$jscomp$5$$ = $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$jscomp$3_editable$jscomp$5$$, $idx$jscomp$26$$, $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$jscomp$3_editable$jscomp$5$$, $n$jscomp$120_shift$jscomp$14$$ + 5, $hash$jscomp$12$$, $key$jscomp$88$$, $val$jscomp$71$$, $added_leaf_QMARK_$jscomp$2$$)), $edit__$1$jscomp$3_editable$jscomp$5$$.$cnt$ += 1, $edit__$1$jscomp$3_editable$jscomp$5$$;
  }
  $n$jscomp$120_shift$jscomp$14$$ = $node$jscomp$50$$.$inode_assoc_BANG_$($edit__$1$jscomp$3_editable$jscomp$5$$, $n$jscomp$120_shift$jscomp$14$$ + 5, $hash$jscomp$12$$, $key$jscomp$88$$, $val$jscomp$71$$, $added_leaf_QMARK_$jscomp$2$$);
  return $n$jscomp$120_shift$jscomp$14$$ === $node$jscomp$50$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$jscomp$3_editable$jscomp$5$$, $idx$jscomp$26$$, $n$jscomp$120_shift$jscomp$14$$);
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($n$jscomp$121_shift$jscomp$15$$, $hash$jscomp$13$$, $key$jscomp$89$$, $val$jscomp$72$$, $added_leaf_QMARK_$jscomp$3$$) {
  var $idx$jscomp$27$$ = $hash$jscomp$13$$ >>> $n$jscomp$121_shift$jscomp$15$$ & 31, $node$jscomp$51$$ = this.$arr$[$idx$jscomp$27$$];
  if (null == $node$jscomp$51$$) {
    return new $cljs$core$ArrayNode$$(null, this.$cnt$ + 1, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$jscomp$27$$, $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($n$jscomp$121_shift$jscomp$15$$ + 5, $hash$jscomp$13$$, $key$jscomp$89$$, $val$jscomp$72$$, $added_leaf_QMARK_$jscomp$3$$)));
  }
  $n$jscomp$121_shift$jscomp$15$$ = $node$jscomp$51$$.$inode_assoc$($n$jscomp$121_shift$jscomp$15$$ + 5, $hash$jscomp$13$$, $key$jscomp$89$$, $val$jscomp$72$$, $added_leaf_QMARK_$jscomp$3$$);
  return $n$jscomp$121_shift$jscomp$15$$ === $node$jscomp$51$$ ? this : new $cljs$core$ArrayNode$$(null, this.$cnt$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$jscomp$27$$, $n$jscomp$121_shift$jscomp$15$$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$ArrayNodeIterator$$(this.$arr$, 0, null);
};
function $cljs$core$hash_collision_node_find_index$$($arr$jscomp$126$$, $cnt$jscomp$20_lim$$, $key$jscomp$92$$) {
  $cnt$jscomp$20_lim$$ *= 2;
  for (var $i$jscomp$220$$ = 0;;) {
    if ($i$jscomp$220$$ < $cnt$jscomp$20_lim$$) {
      if ($cljs$core$key_test$$($key$jscomp$92$$, $arr$jscomp$126$$[$i$jscomp$220$$])) {
        return $i$jscomp$220$$;
      }
      $i$jscomp$220$$ += 2;
    } else {
      return -1;
    }
  }
}
function $cljs$core$HashCollisionNode$$($edit$jscomp$12$$, $collision_hash$$, $cnt$jscomp$21$$, $arr$jscomp$127$$) {
  this.$edit$ = $edit$jscomp$12$$;
  this.$collision_hash$ = $collision_hash$$;
  this.$cnt$ = $cnt$jscomp$21$$;
  this.$arr$ = $arr$jscomp$127$$;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$HashCollisionNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$jscomp$102$$) {
  if ($e$jscomp$102$$ === this.$edit$) {
    return this;
  }
  var $new_arr$jscomp$7$$ = Array(2 * (this.$cnt$ + 1));
  $cljs$core$array_copy$$(this.$arr$, 0, $new_arr$jscomp$7$$, 0, 2 * this.$cnt$);
  return new $cljs$core$HashCollisionNode$$($e$jscomp$102$$, this.$collision_hash$, this.$cnt$, $new_arr$jscomp$7$$);
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(this.$arr$) : $cljs$core$create_inode_seq$$.call(null, this.$arr$);
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($idx$jscomp$31_shift$jscomp$19$$, $hash$jscomp$17$$, $key$jscomp$94$$, $not_found$jscomp$48$$) {
  $idx$jscomp$31_shift$jscomp$19$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$jscomp$94$$);
  return 0 > $idx$jscomp$31_shift$jscomp$19$$ ? $not_found$jscomp$48$$ : $cljs$core$key_test$$($key$jscomp$94$$, this.$arr$[$idx$jscomp$31_shift$jscomp$19$$]) ? this.$arr$[$idx$jscomp$31_shift$jscomp$19$$ + 1] : $not_found$jscomp$48$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$, $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$, $hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$, $count$jscomp$inline_321_key$jscomp$95$$, $val$jscomp$73$$, $added_leaf_QMARK_$jscomp$4$$) {
  if ($hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$ === this.$collision_hash$) {
    $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $count$jscomp$inline_321_key$jscomp$95$$);
    if (-1 === $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$) {
      if (this.$arr$.length > 2 * this.$cnt$) {
        return $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$ = 2 * this.$cnt$, $hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$ = 2 * this.$cnt$ + 1, $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$ = this.$ensure_editable$($JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$), $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$.$arr$[$i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$] = 
        $count$jscomp$inline_321_key$jscomp$95$$, $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$.$arr$[$hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$] = $val$jscomp$73$$, $added_leaf_QMARK_$jscomp$4$$.$val$ = !0, $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$.$cnt$ += 1, $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$;
      }
      $hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$ = this.$arr$.length;
      $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$ = Array($hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$ + 2);
      $cljs$core$array_copy$$(this.$arr$, 0, $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$, 0, $hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$);
      $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$[$hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$] = $count$jscomp$inline_321_key$jscomp$95$$;
      $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$[$hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$ + 1] = $val$jscomp$73$$;
      $added_leaf_QMARK_$jscomp$4$$.$val$ = !0;
      $count$jscomp$inline_321_key$jscomp$95$$ = this.$cnt$ + 1;
      $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$ === this.$edit$ ? (this.$arr$ = $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$, this.$cnt$ = $count$jscomp$inline_321_key$jscomp$95$$, $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$ = this) : $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$ = new $cljs$core$HashCollisionNode$$(this.$edit$, this.$collision_hash$, $count$jscomp$inline_321_key$jscomp$95$$, 
      $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$);
      return $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$;
    }
    return this.$arr$[$i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$ + 1] === $val$jscomp$73$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$, $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$ + 1, $val$jscomp$73$$);
  }
  return (new $cljs$core$BitmapIndexedNode$$($JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$, 1 << (this.$collision_hash$ >>> $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$ & 31), [null, this, null, null])).$inode_assoc_BANG_$($JSCompiler_inline_result$jscomp$82_edit__$1$jscomp$5_editable$jscomp$inline_577$$, $i$jscomp$inline_573_idx$jscomp$32_new_arr$jscomp$8_shift$jscomp$20$$, $hash$jscomp$18_j$jscomp$inline_575_len$jscomp$40$$, $count$jscomp$inline_321_key$jscomp$95$$, 
  $val$jscomp$73$$, $added_leaf_QMARK_$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$, $hash$jscomp$19_new_arr$jscomp$9$$, $key$jscomp$96$$, $val$jscomp$74$$, $added_leaf_QMARK_$jscomp$5$$) {
  return $hash$jscomp$19_new_arr$jscomp$9$$ === this.$collision_hash$ ? ($idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$jscomp$96$$), -1 === $idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$ ? ($idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$ = 2 * this.$cnt$, $hash$jscomp$19_new_arr$jscomp$9$$ = Array($idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$ + 2), $cljs$core$array_copy$$(this.$arr$, 0, $hash$jscomp$19_new_arr$jscomp$9$$, 
  0, $idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$), $hash$jscomp$19_new_arr$jscomp$9$$[$idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$] = $key$jscomp$96$$, $hash$jscomp$19_new_arr$jscomp$9$$[$idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$ + 1] = $val$jscomp$74$$, $added_leaf_QMARK_$jscomp$5$$.$val$ = !0, new $cljs$core$HashCollisionNode$$(null, this.$collision_hash$, this.$cnt$ + 1, $hash$jscomp$19_new_arr$jscomp$9$$)) : $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(this.$arr$[$idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$ + 
  1], $val$jscomp$74$$) ? this : new $cljs$core$HashCollisionNode$$(null, this.$collision_hash$, this.$cnt$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$ + 1, $val$jscomp$74$$))) : (new $cljs$core$BitmapIndexedNode$$(null, 1 << (this.$collision_hash$ >>> $idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$ & 31), [null, this])).$inode_assoc$($idx$jscomp$33_len$jscomp$41_shift$jscomp$21$$, $hash$jscomp$19_new_arr$jscomp$9$$, $key$jscomp$96$$, 
  $val$jscomp$74$$, $added_leaf_QMARK_$jscomp$5$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$NodeIterator$$(this.$arr$, 0, null, null);
};
function $cljs$core$create_node$$($var_args$jscomp$225$$) {
  for (var $args13106$$ = [], $len__9181__auto___13109$$ = arguments.length, $i__9182__auto___13110$$ = 0;;) {
    if ($i__9182__auto___13110$$ < $len__9181__auto___13109$$) {
      $args13106$$.push(arguments[$i__9182__auto___13110$$]), $i__9182__auto___13110$$ += 1;
    } else {
      break;
    }
  }
  switch($args13106$$.length) {
    case 6:
      return $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args13106$$.length)].join(""));
  }
}
function $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$($shift$jscomp$24$$, $key1$$, $val1$$, $key2hash$$, $key2$$, $val2$$) {
  var $key1hash$$ = $cljs$core$hash$$($key1$$);
  if ($key1hash$$ === $key2hash$$) {
    return new $cljs$core$HashCollisionNode$$(null, $key1hash$$, 2, [$key1$$, $val1$$, $key2$$, $val2$$]);
  }
  var $added_leaf_QMARK_$jscomp$6$$ = new $cljs$core$Box$$;
  return $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($shift$jscomp$24$$, $key1hash$$, $key1$$, $val1$$, $added_leaf_QMARK_$jscomp$6$$).$inode_assoc$($shift$jscomp$24$$, $key2hash$$, $key2$$, $val2$$, $added_leaf_QMARK_$jscomp$6$$);
}
function $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$($edit$jscomp$14$$, $shift$jscomp$25$$, $key1$jscomp$1$$, $val1$jscomp$1$$, $key2hash$jscomp$1$$, $key2$jscomp$1$$, $val2$jscomp$1$$) {
  var $key1hash$jscomp$1$$ = $cljs$core$hash$$($key1$jscomp$1$$);
  if ($key1hash$jscomp$1$$ === $key2hash$jscomp$1$$) {
    return new $cljs$core$HashCollisionNode$$(null, $key1hash$jscomp$1$$, 2, [$key1$jscomp$1$$, $val1$jscomp$1$$, $key2$jscomp$1$$, $val2$jscomp$1$$]);
  }
  var $added_leaf_QMARK_$jscomp$7$$ = new $cljs$core$Box$$;
  return $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit$jscomp$14$$, $shift$jscomp$25$$, $key1hash$jscomp$1$$, $key1$jscomp$1$$, $val1$jscomp$1$$, $added_leaf_QMARK_$jscomp$7$$).$inode_assoc_BANG_$($edit$jscomp$14$$, $shift$jscomp$25$$, $key2hash$jscomp$1$$, $key2$jscomp$1$$, $val2$jscomp$1$$, $added_leaf_QMARK_$jscomp$7$$);
}
function $cljs$core$NodeSeq$$($meta$jscomp$38$$, $nodes$jscomp$2$$, $i$jscomp$221$$, $s$jscomp$85$$, $__hash$jscomp$25$$) {
  this.$meta$ = $meta$jscomp$38$$;
  this.$nodes$ = $nodes$jscomp$2$$;
  this.$i$ = $i$jscomp$221$$;
  this.$s$ = $s$jscomp$85$$;
  this.$__hash$ = $__hash$jscomp$25$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374860;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$NodeSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$78$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$78$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__13119$$ = null, $G__13119$$ = function($G__13119$$, $start$jscomp$88$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13119$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13119$$, $start$jscomp$88$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13119$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__13119$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13119$$, 0);
  };
  $G__13119$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13119$$, $start$jscomp$87$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13119$$, $start$jscomp$87$$);
  };
  return $G__13119$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__13120__1$$($G__13120__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13120__1$$, $cljs$core$count$$(this));
  }
  var $G__13120$$ = null, $G__13120$$ = function($G__13120$$, $start$jscomp$90$$) {
    switch(arguments.length) {
      case 1:
        return $G__13120__1$$.call(this, $G__13120$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13120$$, $start$jscomp$90$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13120$$.$cljs$core$IFn$_invoke$arity$1$ = $G__13120__1$$;
  $G__13120$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13120__1$$, $G__13120$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13120__1$$, $G__13120$$);
  };
  return $G__13120$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$14_h__8402__auto____$1$jscomp$14$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$14_h__8402__auto____$1$jscomp$14$$ ? $h__8402__auto__$jscomp$14_h__8402__auto____$1$jscomp$14$$ : this.$__hash$ = $h__8402__auto__$jscomp$14_h__8402__auto____$1$jscomp$14$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$474$$, $other$jscomp$79$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$79$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$476$$, $f$jscomp$238$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$238$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$477$$, $f$jscomp$239$$, $start$jscomp$91$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$239$$, $start$jscomp$91$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return null == this.$s$ ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.$nodes$[this.$i$], this.$nodes$[this.$i$ + 1]], null) : $cljs$core$first$$(this.$s$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $self__$jscomp$663$$ = this, $ret$jscomp$27$$ = null == $self__$jscomp$663$$.$s$ ? function() {
    var $ret$jscomp$27$$ = $self__$jscomp$663$$.$nodes$, $G__13114$$ = $self__$jscomp$663$$.$i$ + 2;
    return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($ret$jscomp$27$$, $G__13114$$, null) : $cljs$core$create_inode_seq$$.call(null, $ret$jscomp$27$$, $G__13114$$, null);
  }() : function() {
    var $ret$jscomp$27$$ = $self__$jscomp$663$$.$nodes$, $G__13117$$ = $self__$jscomp$663$$.$i$, $G__13118$$ = $cljs$core$next$$($self__$jscomp$663$$.$s$);
    return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($ret$jscomp$27$$, $G__13117$$, $G__13118$$) : $cljs$core$create_inode_seq$$.call(null, $ret$jscomp$27$$, $G__13117$$, $G__13118$$);
  }();
  return null != $ret$jscomp$27$$ ? $ret$jscomp$27$$ : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$480$$, $meta__$1$jscomp$10$$) {
  return new $cljs$core$NodeSeq$$($meta__$1$jscomp$10$$, this.$nodes$, this.$i$, this.$s$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$481$$, $o$jscomp$93$$) {
  return $cljs$core$cons$$($o$jscomp$93$$, this);
};
$cljs$core$NodeSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$create_inode_seq$$($var_args$jscomp$226$$) {
  for (var $args13121$$ = [], $len__9181__auto___13124$$ = arguments.length, $i__9182__auto___13125$$ = 0;;) {
    if ($i__9182__auto___13125$$ < $len__9181__auto___13124$$) {
      $args13121$$.push(arguments[$i__9182__auto___13125$$]), $i__9182__auto___13125$$ += 1;
    } else {
      break;
    }
  }
  switch($args13121$$.length) {
    case 1:
      return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(arguments[0]);
    case 3:
      return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args13121$$.length)].join(""));
  }
}
function $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($nodes$jscomp$4$$) {
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($nodes$jscomp$4$$, 0, null);
}
function $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($nodes$jscomp$5$$, $i$jscomp$223_j$jscomp$77$$, $len$jscomp$42_s$jscomp$87$$) {
  if (null == $len$jscomp$42_s$jscomp$87$$) {
    for ($len$jscomp$42_s$jscomp$87$$ = $nodes$jscomp$5$$.length;;) {
      if ($i$jscomp$223_j$jscomp$77$$ < $len$jscomp$42_s$jscomp$87$$) {
        if (null != $nodes$jscomp$5$$[$i$jscomp$223_j$jscomp$77$$]) {
          return new $cljs$core$NodeSeq$$(null, $nodes$jscomp$5$$, $i$jscomp$223_j$jscomp$77$$, null, null);
        }
        var $temp__5276__auto__$jscomp$6_temp__5276__auto____$1$$ = $nodes$jscomp$5$$[$i$jscomp$223_j$jscomp$77$$ + 1];
        if ($cljs$core$truth_$$($temp__5276__auto__$jscomp$6_temp__5276__auto____$1$$) && ($temp__5276__auto__$jscomp$6_temp__5276__auto____$1$$ = $temp__5276__auto__$jscomp$6_temp__5276__auto____$1$$.$inode_seq$(), $cljs$core$truth_$$($temp__5276__auto__$jscomp$6_temp__5276__auto____$1$$))) {
          return new $cljs$core$NodeSeq$$(null, $nodes$jscomp$5$$, $i$jscomp$223_j$jscomp$77$$ + 2, $temp__5276__auto__$jscomp$6_temp__5276__auto____$1$$, null);
        }
        $i$jscomp$223_j$jscomp$77$$ += 2;
      } else {
        return null;
      }
    }
  } else {
    return new $cljs$core$NodeSeq$$(null, $nodes$jscomp$5$$, $i$jscomp$223_j$jscomp$77$$, $len$jscomp$42_s$jscomp$87$$, null);
  }
}
function $cljs$core$ArrayNodeSeq$$($meta$jscomp$40$$, $nodes$jscomp$6$$, $i$jscomp$224$$, $s$jscomp$88$$, $__hash$jscomp$27$$) {
  this.$meta$ = $meta$jscomp$40$$;
  this.$nodes$ = $nodes$jscomp$6$$;
  this.$i$ = $i$jscomp$224$$;
  this.$s$ = $s$jscomp$88$$;
  this.$__hash$ = $__hash$jscomp$27$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374860;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayNodeSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$80$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$80$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__13134$$ = null, $G__13134$$ = function($G__13134$$, $start$jscomp$93$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13134$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13134$$, $start$jscomp$93$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13134$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__13134$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13134$$, 0);
  };
  $G__13134$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13134$$, $start$jscomp$92$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13134$$, $start$jscomp$92$$);
  };
  return $G__13134$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__13135__1$$($G__13135__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13135__1$$, $cljs$core$count$$(this));
  }
  var $G__13135$$ = null, $G__13135$$ = function($G__13135$$, $start$jscomp$95$$) {
    switch(arguments.length) {
      case 1:
        return $G__13135__1$$.call(this, $G__13135$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13135$$, $start$jscomp$95$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13135$$.$cljs$core$IFn$_invoke$arity$1$ = $G__13135__1$$;
  $G__13135$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13135__1$$, $G__13135$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13135__1$$, $G__13135$$);
  };
  return $G__13135$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$15_h__8402__auto____$1$jscomp$15$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$15_h__8402__auto____$1$jscomp$15$$ ? $h__8402__auto__$jscomp$15_h__8402__auto____$1$jscomp$15$$ : this.$__hash$ = $h__8402__auto__$jscomp$15_h__8402__auto____$1$jscomp$15$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$489$$, $other$jscomp$81$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$81$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$491$$, $f$jscomp$240$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$240$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$492$$, $f$jscomp$241$$, $start$jscomp$96$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$241$$, $start$jscomp$96$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return $cljs$core$first$$(this.$s$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $G__13131$jscomp$inline_324_ret$jscomp$28$$ = this.$nodes$;
  var $G__13132$jscomp$inline_325$$ = this.$i$, $G__13133$jscomp$inline_326$$ = $cljs$core$next$$(this.$s$);
  $G__13131$jscomp$inline_324_ret$jscomp$28$$ = $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(null, $G__13131$jscomp$inline_324_ret$jscomp$28$$, $G__13132$jscomp$inline_325$$, $G__13133$jscomp$inline_326$$) : $cljs$core$create_array_node_seq$$.call(null, null, $G__13131$jscomp$inline_324_ret$jscomp$28$$, $G__13132$jscomp$inline_325$$, $G__13133$jscomp$inline_326$$);
  return null != $G__13131$jscomp$inline_324_ret$jscomp$28$$ ? $G__13131$jscomp$inline_324_ret$jscomp$28$$ : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$495$$, $meta__$1$jscomp$11$$) {
  return new $cljs$core$ArrayNodeSeq$$($meta__$1$jscomp$11$$, this.$nodes$, this.$i$, this.$s$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$496$$, $o$jscomp$94$$) {
  return $cljs$core$cons$$($o$jscomp$94$$, this);
};
$cljs$core$ArrayNodeSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$create_array_node_seq$$($var_args$jscomp$227$$) {
  for (var $args13136$$ = [], $len__9181__auto___13139$$ = arguments.length, $i__9182__auto___13140$$ = 0;;) {
    if ($i__9182__auto___13140$$ < $len__9181__auto___13139$$) {
      $args13136$$.push(arguments[$i__9182__auto___13140$$]), $i__9182__auto___13140$$ += 1;
    } else {
      break;
    }
  }
  switch($args13136$$.length) {
    case 1:
      return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(arguments[0]);
    case 4:
      return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args13136$$.length)].join(""));
  }
}
function $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($nodes$jscomp$8$$) {
  return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(null, $nodes$jscomp$8$$, 0, null);
}
function $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($meta$jscomp$42$$, $nodes$jscomp$9$$, $i$jscomp$226_j$jscomp$78$$, $len$jscomp$43_s$jscomp$90$$) {
  if (null == $len$jscomp$43_s$jscomp$90$$) {
    for ($len$jscomp$43_s$jscomp$90$$ = $nodes$jscomp$9$$.length;;) {
      if ($i$jscomp$226_j$jscomp$78$$ < $len$jscomp$43_s$jscomp$90$$) {
        var $temp__5276__auto__$jscomp$7_temp__5276__auto____$1$jscomp$1$$ = $nodes$jscomp$9$$[$i$jscomp$226_j$jscomp$78$$];
        if ($cljs$core$truth_$$($temp__5276__auto__$jscomp$7_temp__5276__auto____$1$jscomp$1$$) && ($temp__5276__auto__$jscomp$7_temp__5276__auto____$1$jscomp$1$$ = $temp__5276__auto__$jscomp$7_temp__5276__auto____$1$jscomp$1$$.$inode_seq$(), $cljs$core$truth_$$($temp__5276__auto__$jscomp$7_temp__5276__auto____$1$jscomp$1$$))) {
          return new $cljs$core$ArrayNodeSeq$$($meta$jscomp$42$$, $nodes$jscomp$9$$, $i$jscomp$226_j$jscomp$78$$ + 1, $temp__5276__auto__$jscomp$7_temp__5276__auto____$1$jscomp$1$$, null);
        }
        $i$jscomp$226_j$jscomp$78$$ += 1;
      } else {
        return null;
      }
    }
  } else {
    return new $cljs$core$ArrayNodeSeq$$($meta$jscomp$42$$, $nodes$jscomp$9$$, $i$jscomp$226_j$jscomp$78$$, $len$jscomp$43_s$jscomp$90$$, null);
  }
}
function $cljs$core$HashMapIter$$($nil_val$$, $root_iter$$, $seen$jscomp$2$$) {
  this.$nil_val$ = $nil_val$$;
  this.$root_iter$ = $root_iter$$;
  this.$seen$ = $seen$jscomp$2$$;
}
$cljs$core$HashMapIter$$.prototype.$hasNext$ = function() {
  return !this.$seen$ || this.$root_iter$.$hasNext$();
};
$cljs$core$HashMapIter$$.prototype.next = function() {
  if (this.$seen$) {
    return this.$root_iter$.next();
  }
  this.$seen$ = !0;
  return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [null, this.$nil_val$], null);
};
$cljs$core$HashMapIter$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$PersistentHashMap$$($meta$jscomp$43$$, $cnt$jscomp$23$$, $root$jscomp$8$$, $has_nil_QMARK_$$, $nil_val$jscomp$2$$, $__hash$jscomp$29$$) {
  this.$meta$ = $meta$jscomp$43$$;
  this.$cnt$ = $cnt$jscomp$23$$;
  this.root = $root$jscomp$8$$;
  this.$has_nil_QMARK_$ = $has_nil_QMARK_$$;
  this.$nil_val$ = $nil_val$jscomp$2$$;
  this.$__hash$ = $__hash$jscomp$29$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 16123663;
  this.$cljs$lang$protocol_mask$partition1$$ = 8196;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentHashMap$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$82$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$82$$);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$keys$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  return new $cljs$core$ES6EntriesIterator$$($cljs$core$seq$$($cljs$core$seq$$(this)));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$vals$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.has = function($k$jscomp$164$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$jscomp$164$$);
};
$JSCompiler_prototypeAlias$$.get = function($k$jscomp$165$$, $not_found$jscomp$50$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$165$$, $not_found$jscomp$50$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$242$$) {
  for (var $G__13164_v$jscomp$38_vec__13150$$, $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$, $G__13162_seq__13146_seq__13146__$1$$ = $cljs$core$seq$$(this), $c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$ = null, $count__13148$$ = 0, $i__13149$$ = 0;;) {
    if ($i__13149$$ < $count__13148$$) {
      $G__13164_v$jscomp$38_vec__13150$$ = $c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__13149$$), $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__13164_v$jscomp$38_vec__13150$$, 0, null), $G__13164_v$jscomp$38_vec__13150$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__13164_v$jscomp$38_vec__13150$$, 1, null), $f$jscomp$242$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$242$$.$cljs$core$IFn$_invoke$arity$2$($G__13164_v$jscomp$38_vec__13150$$, 
      $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$) : $f$jscomp$242$$.call(null, $G__13164_v$jscomp$38_vec__13150$$, $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$), $i__13149$$ += 1;
    } else {
      if ($G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$ = $cljs$core$seq$$($G__13162_seq__13146_seq__13146__$1$$)) {
        $G__13162_seq__13146_seq__13146__$1$$ = $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$, $cljs$core$chunked_seq_QMARK_$$($G__13162_seq__13146_seq__13146__$1$$) ? ($c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$ = $cljs$core$_chunked_first$$($G__13162_seq__13146_seq__13146__$1$$), $G__13162_seq__13146_seq__13146__$1$$ = $cljs$core$_chunked_rest$$($G__13162_seq__13146_seq__13146__$1$$), $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$ = $c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$, 
        $G__13164_v$jscomp$38_vec__13150$$ = $cljs$core$count$$($c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$), $c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$ = $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$, $count__13148$$ = $G__13164_v$jscomp$38_vec__13150$$) : ($c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$ = $cljs$core$first$$($G__13162_seq__13146_seq__13146__$1$$), $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$, 
        0, null), $G__13164_v$jscomp$38_vec__13150$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$, 1, null), $f$jscomp$242$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$242$$.$cljs$core$IFn$_invoke$arity$2$($G__13164_v$jscomp$38_vec__13150$$, $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$) : $f$jscomp$242$$.call(null, $G__13164_v$jscomp$38_vec__13150$$, $G__13163_k$jscomp$166_temp__5278__auto__$jscomp$11$$), $G__13162_seq__13146_seq__13146__$1$$ = 
        $cljs$core$next$$($G__13162_seq__13146_seq__13146__$1$$), $c__8871__auto__$jscomp$2_chunk__13147_vec__13153$$ = null, $count__13148$$ = 0), $i__13149$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$505$$, $k$jscomp$167$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$167$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$506$$, $k$jscomp$168$$, $not_found$jscomp$51$$) {
  return null == $k$jscomp$168$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : $not_found$jscomp$51$$ : null == this.root ? $not_found$jscomp$51$$ : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$jscomp$168$$), $k$jscomp$168$$, $not_found$jscomp$51$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  var $root_iter$jscomp$2$$ = this.root ? $cljs$core$_iterator$$(this.root) : $cljs$core$nil_iter$$();
  return this.$has_nil_QMARK_$ ? new $cljs$core$HashMapIter$$(this.$nil_val$, $root_iter$jscomp$2$$, !1) : $root_iter$jscomp$2$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$16_h__8402__auto____$1$jscomp$16$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$16_h__8402__auto____$1$jscomp$16$$ ? $h__8402__auto__$jscomp$16_h__8402__auto____$1$jscomp$16$$ : this.$__hash$ = $h__8402__auto__$jscomp$16_h__8402__auto____$1$jscomp$16$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$512$$, $other$jscomp$83$$) {
  return $cljs$core$equiv_map$$(this, $other$jscomp$83$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientHashMap$$({}, this.root, this.$cnt$, this.$has_nil_QMARK_$, this.$nil_val$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($added_leaf_QMARK_$jscomp$8_coll$jscomp$516$$, $k$jscomp$170_new_root$jscomp$6$$, $v$jscomp$39$$) {
  if (null == $k$jscomp$170_new_root$jscomp$6$$) {
    return this.$has_nil_QMARK_$ && $v$jscomp$39$$ === this.$nil_val$ ? this : new $cljs$core$PersistentHashMap$$(this.$meta$, this.$has_nil_QMARK_$ ? this.$cnt$ : this.$cnt$ + 1, this.root, !0, $v$jscomp$39$$, null);
  }
  $added_leaf_QMARK_$jscomp$8_coll$jscomp$516$$ = new $cljs$core$Box$$;
  $k$jscomp$170_new_root$jscomp$6$$ = (null == this.root ? $cljs$core$BitmapIndexedNode$EMPTY$$ : this.root).$inode_assoc$(0, $cljs$core$hash$$($k$jscomp$170_new_root$jscomp$6$$), $k$jscomp$170_new_root$jscomp$6$$, $v$jscomp$39$$, $added_leaf_QMARK_$jscomp$8_coll$jscomp$516$$);
  return $k$jscomp$170_new_root$jscomp$6$$ === this.root ? this : new $cljs$core$PersistentHashMap$$(this.$meta$, $added_leaf_QMARK_$jscomp$8_coll$jscomp$516$$.$val$ ? this.$cnt$ + 1 : this.$cnt$, $k$jscomp$170_new_root$jscomp$6$$, this.$has_nil_QMARK_$, this.$nil_val$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$jscomp$517$$, $k$jscomp$171$$) {
  return null == $k$jscomp$171$$ ? this.$has_nil_QMARK_$ : null == this.root ? !1 : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$jscomp$171$$), $k$jscomp$171$$, $cljs$core$lookup_sentinel$$) !== $cljs$core$lookup_sentinel$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  if (0 < this.$cnt$) {
    var $s$jscomp$91$$ = null != this.root ? this.root.$inode_seq$() : null;
    return this.$has_nil_QMARK_$ ? $cljs$core$cons$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [null, this.$nil_val$], null), $s$jscomp$91$$) : $s$jscomp$91$$;
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$519$$, $meta__$1$jscomp$12$$) {
  return new $cljs$core$PersistentHashMap$$($meta__$1$jscomp$12$$, this.$cnt$, this.root, this.$has_nil_QMARK_$, this.$nil_val$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$520$$, $entry$jscomp$3$$) {
  if ($cljs$core$vector_QMARK_$$($entry$jscomp$3$$)) {
    return this.$cljs$core$IAssociative$_assoc$arity$3$(null, $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($entry$jscomp$3$$, 0), $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($entry$jscomp$3$$, 1));
  }
  for (var $G__13170_ret$jscomp$29$$ = this, $G__13171_es$jscomp$2$$ = $cljs$core$seq$$($entry$jscomp$3$$);;) {
    if (null == $G__13171_es$jscomp$2$$) {
      return $G__13170_ret$jscomp$29$$;
    }
    var $e$jscomp$104$$ = $cljs$core$first$$($G__13171_es$jscomp$2$$);
    if ($cljs$core$vector_QMARK_$$($e$jscomp$104$$)) {
      $G__13170_ret$jscomp$29$$ = $G__13170_ret$jscomp$29$$.$cljs$core$IAssociative$_assoc$arity$3$(null, $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($e$jscomp$104$$, 0), $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($e$jscomp$104$$, 1)), $G__13171_es$jscomp$2$$ = $cljs$core$next$$($G__13171_es$jscomp$2$$);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__13172$$ = null, $G__13172$$ = function($G__13172$$, $k$jscomp$174$$, $not_found$jscomp$53$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$174$$);
      case 3:
        return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$174$$, $not_found$jscomp$53$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13172$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13172$$, $k$jscomp$172$$) {
    return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$172$$);
  };
  $G__13172$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__13172$$, $k$jscomp$173$$, $not_found$jscomp$52$$) {
    return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$173$$, $not_found$jscomp$52$$);
  };
  return $G__13172$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$716$$, $args13145$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args13145$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$175$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$175$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$176$$, $not_found$jscomp$54$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$176$$, $not_found$jscomp$54$$);
};
var $cljs$core$PersistentHashMap$EMPTY$$ = new $cljs$core$PersistentHashMap$$(null, 0, null, !1, null, $cljs$core$empty_unordered_hash$$);
function $cljs$core$PersistentHashMap$fromArrays$$($ks$jscomp$14$$, $vs$$) {
  for (var $len$jscomp$45$$ = $ks$jscomp$14$$.length, $i$jscomp$228$$ = 0, $G__13176_out$jscomp$3$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashMap$EMPTY$$);;) {
    if ($i$jscomp$228$$ < $len$jscomp$45$$) {
      var $G__13175$$ = $i$jscomp$228$$ + 1, $G__13176_out$jscomp$3$$ = $G__13176_out$jscomp$3$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$(null, $ks$jscomp$14$$[$i$jscomp$228$$], $vs$$[$i$jscomp$228$$]), $i$jscomp$228$$ = $G__13175$$;
    } else {
      return $cljs$core$_persistent_BANG_$$($G__13176_out$jscomp$3$$);
    }
  }
}
$cljs$core$PersistentHashMap$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientHashMap$$($edit$jscomp$15$$, $root$jscomp$10$$, $count$jscomp$18$$, $has_nil_QMARK_$jscomp$2$$, $nil_val$jscomp$4$$) {
  this.$edit$ = $edit$jscomp$15$$;
  this.root = $root$jscomp$10$$;
  this.count = $count$jscomp$18$$;
  this.$has_nil_QMARK_$ = $has_nil_QMARK_$jscomp$2$$;
  this.$nil_val$ = $nil_val$jscomp$4$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 258;
  this.$cljs$lang$protocol_mask$partition1$$ = 56;
}
function $JSCompiler_StaticMethods_assoc_BANG_$$($JSCompiler_StaticMethods_assoc_BANG_$self$$, $k$jscomp$177_node$jscomp$55$$, $v$jscomp$40$$) {
  if ($JSCompiler_StaticMethods_assoc_BANG_$self$$.$edit$) {
    if (null == $k$jscomp$177_node$jscomp$55$$) {
      $JSCompiler_StaticMethods_assoc_BANG_$self$$.$nil_val$ !== $v$jscomp$40$$ && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.$nil_val$ = $v$jscomp$40$$), $JSCompiler_StaticMethods_assoc_BANG_$self$$.$has_nil_QMARK_$ || ($JSCompiler_StaticMethods_assoc_BANG_$self$$.count += 1, $JSCompiler_StaticMethods_assoc_BANG_$self$$.$has_nil_QMARK_$ = !0);
    } else {
      var $added_leaf_QMARK_$jscomp$9$$ = new $cljs$core$Box$$;
      $k$jscomp$177_node$jscomp$55$$ = (null == $JSCompiler_StaticMethods_assoc_BANG_$self$$.root ? $cljs$core$BitmapIndexedNode$EMPTY$$ : $JSCompiler_StaticMethods_assoc_BANG_$self$$.root).$inode_assoc_BANG_$($JSCompiler_StaticMethods_assoc_BANG_$self$$.$edit$, 0, $cljs$core$hash$$($k$jscomp$177_node$jscomp$55$$), $k$jscomp$177_node$jscomp$55$$, $v$jscomp$40$$, $added_leaf_QMARK_$jscomp$9$$);
      $k$jscomp$177_node$jscomp$55$$ !== $JSCompiler_StaticMethods_assoc_BANG_$self$$.root && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.root = $k$jscomp$177_node$jscomp$55$$);
      $added_leaf_QMARK_$jscomp$9$$.$val$ && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.count += 1);
    }
    return $JSCompiler_StaticMethods_assoc_BANG_$self$$;
  }
  throw Error("assoc! after persistent!");
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientHashMap$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if (this.$edit$) {
    return this.count;
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$jscomp$34$$, $k$jscomp$179$$) {
  return null == $k$jscomp$179$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : null : null == this.root ? null : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$jscomp$179$$), $k$jscomp$179$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($tcoll$jscomp$35$$, $k$jscomp$180$$, $not_found$jscomp$55$$) {
  return null == $k$jscomp$180$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : $not_found$jscomp$55$$ : null == this.root ? $not_found$jscomp$55$$ : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$jscomp$180$$), $k$jscomp$180$$, $not_found$jscomp$55$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$jscomp$36$$, $val$jscomp$75$$) {
  a: {
    if (this.$edit$) {
      if (null != $val$jscomp$75$$ ? $val$jscomp$75$$.$cljs$lang$protocol_mask$partition0$$ & 2048 || $cljs$core$PROTOCOL_SENTINEL$$ === $val$jscomp$75$$.$cljs$core$IMapEntry$$ || ($val$jscomp$75$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMapEntry$$, $val$jscomp$75$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMapEntry$$, $val$jscomp$75$$)) {
        var $G__13180$jscomp$inline_334_JSCompiler_inline_result$jscomp$83_es$jscomp$inline_330$$ = $JSCompiler_StaticMethods_assoc_BANG_$$(this, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($val$jscomp$75$$) : $cljs$core$key$$.call(null, $val$jscomp$75$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($val$jscomp$75$$) : $cljs$core$val$$.call(null, $val$jscomp$75$$));
      } else {
        $G__13180$jscomp$inline_334_JSCompiler_inline_result$jscomp$83_es$jscomp$inline_330$$ = $cljs$core$seq$$($val$jscomp$75$$);
        for (var $G__13181$jscomp$inline_335_tcoll__$1$jscomp$inline_331$$ = this;;) {
          var $e$jscomp$inline_333_temp__5276__auto__$jscomp$inline_332$$ = $cljs$core$first$$($G__13180$jscomp$inline_334_JSCompiler_inline_result$jscomp$83_es$jscomp$inline_330$$);
          if ($cljs$core$truth_$$($e$jscomp$inline_333_temp__5276__auto__$jscomp$inline_332$$)) {
            $G__13180$jscomp$inline_334_JSCompiler_inline_result$jscomp$83_es$jscomp$inline_330$$ = $cljs$core$next$$($G__13180$jscomp$inline_334_JSCompiler_inline_result$jscomp$83_es$jscomp$inline_330$$), $G__13181$jscomp$inline_335_tcoll__$1$jscomp$inline_331$$ = $JSCompiler_StaticMethods_assoc_BANG_$$($G__13181$jscomp$inline_335_tcoll__$1$jscomp$inline_331$$, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$inline_333_temp__5276__auto__$jscomp$inline_332$$) : 
            $cljs$core$key$$.call(null, $e$jscomp$inline_333_temp__5276__auto__$jscomp$inline_332$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$inline_333_temp__5276__auto__$jscomp$inline_332$$) : $cljs$core$val$$.call(null, $e$jscomp$inline_333_temp__5276__auto__$jscomp$inline_332$$));
          } else {
            $G__13180$jscomp$inline_334_JSCompiler_inline_result$jscomp$83_es$jscomp$inline_330$$ = $G__13181$jscomp$inline_335_tcoll__$1$jscomp$inline_331$$;
            break a;
          }
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
  }
  return $G__13180$jscomp$inline_334_JSCompiler_inline_result$jscomp$83_es$jscomp$inline_330$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  if (this.$edit$) {
    this.$edit$ = null;
    var $JSCompiler_inline_result$jscomp$84$$ = new $cljs$core$PersistentHashMap$$(null, this.count, this.root, this.$has_nil_QMARK_$, this.$nil_val$, null);
  } else {
    throw Error("persistent! called twice");
  }
  return $JSCompiler_inline_result$jscomp$84$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($tcoll$jscomp$38$$, $key$jscomp$99$$, $val$jscomp$76$$) {
  return $JSCompiler_StaticMethods_assoc_BANG_$$(this, $key$jscomp$99$$, $val$jscomp$76$$);
};
var $cljs$core$hash_map$$ = function $cljs$core$hash_map$$($var_args$jscomp$228$$) {
  for (var $args__9188__auto__$jscomp$3$$ = [], $len__9181__auto___13329$$ = arguments.length, $i__9182__auto___13330$$ = 0;;) {
    if ($i__9182__auto___13330$$ < $len__9181__auto___13329$$) {
      $args__9188__auto__$jscomp$3$$.push(arguments[$i__9182__auto___13330$$]), $i__9182__auto___13330$$ += 1;
    } else {
      break;
    }
  }
  return $cljs$core$hash_map$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < $args__9188__auto__$jscomp$3$$.length ? new $cljs$core$IndexedSeq$$($args__9188__auto__$jscomp$3$$.slice(0), 0, null) : null);
};
$cljs$core$hash_map$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__13332_keyvals$jscomp$1$$) {
  for (var $in$$jscomp$2_val$jscomp$inline_341$$ = $cljs$core$seq$$($G__13332_keyvals$jscomp$1$$), $G__13333_out$jscomp$4$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashMap$EMPTY$$);;) {
    if ($in$$jscomp$2_val$jscomp$inline_341$$) {
      $G__13332_keyvals$jscomp$1$$ = $cljs$core$next$$($cljs$core$next$$($in$$jscomp$2_val$jscomp$inline_341$$));
      var $key$jscomp$inline_340$$ = $cljs$core$first$$($in$$jscomp$2_val$jscomp$inline_341$$), $in$$jscomp$2_val$jscomp$inline_341$$ = $cljs$core$second$$($in$$jscomp$2_val$jscomp$inline_341$$), $G__13333_out$jscomp$4$$ = $cljs$core$_assoc_BANG_$$($G__13333_out$jscomp$4$$, $key$jscomp$inline_340$$, $in$$jscomp$2_val$jscomp$inline_341$$), $in$$jscomp$2_val$jscomp$inline_341$$ = $G__13332_keyvals$jscomp$1$$;
    } else {
      return $cljs$core$_persistent_BANG_$$($G__13333_out$jscomp$4$$);
    }
  }
};
$cljs$core$hash_map$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$hash_map$$.$cljs$lang$applyTo$ = function($seq13328$$) {
  return $cljs$core$hash_map$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq13328$$));
};
function $cljs$core$KeySeq$$($mseq$$, $_meta$jscomp$7$$) {
  this.$mseq$ = $mseq$$;
  this.$_meta$ = $_meta$jscomp$7$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$KeySeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$90$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$90$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__13360$$ = null, $G__13360$$ = function($G__13360$$, $start$jscomp$113$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13360$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13360$$, $start$jscomp$113$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13360$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__13360$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13360$$, 0);
  };
  $G__13360$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13360$$, $start$jscomp$112$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13360$$, $start$jscomp$112$$);
  };
  return $G__13360$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__13361__1$$($G__13361__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13361__1$$, $cljs$core$count$$(this));
  }
  var $G__13361$$ = null, $G__13361$$ = function($G__13361$$, $start$jscomp$115$$) {
    switch(arguments.length) {
      case 1:
        return $G__13361__1$$.call(this, $G__13361$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13361$$, $start$jscomp$115$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13361$$.$cljs$core$IFn$_invoke$arity$1$ = $G__13361__1$$;
  $G__13361$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13361__1$$, $G__13361$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13361__1$$, $G__13361$$);
  };
  return $G__13361$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  var $nseq$$ = (null != this.$mseq$ ? this.$mseq$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === this.$mseq$.$cljs$core$INext$$ || (this.$mseq$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$next$$(this.$mseq$);
  return null == $nseq$$ ? null : new $cljs$core$KeySeq$$($nseq$$, this.$_meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$592$$, $other$jscomp$91$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$91$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$594$$, $f$jscomp$255$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$255$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$595$$, $f$jscomp$256$$, $start$jscomp$116$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$256$$, $start$jscomp$116$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$mseq$.$cljs$core$ISeq$_first$arity$1$(null).$cljs$core$IMapEntry$_key$arity$1$(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $nseq$jscomp$1$$ = (null != this.$mseq$ ? this.$mseq$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === this.$mseq$.$cljs$core$INext$$ || (this.$mseq$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$next$$(this.$mseq$);
  return null != $nseq$jscomp$1$$ ? new $cljs$core$KeySeq$$($nseq$jscomp$1$$, this.$_meta$) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$599$$, $new_meta$jscomp$6$$) {
  return new $cljs$core$KeySeq$$(this.$mseq$, $new_meta$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$600$$, $o$jscomp$99$$) {
  return $cljs$core$cons$$($o$jscomp$99$$, this);
};
$cljs$core$KeySeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$keys$$($hash_map_temp__5278__auto__$jscomp$13$$) {
  return ($hash_map_temp__5278__auto__$jscomp$13$$ = $cljs$core$seq$$($hash_map_temp__5278__auto__$jscomp$13$$)) ? new $cljs$core$KeySeq$$($hash_map_temp__5278__auto__$jscomp$13$$, null) : null;
}
function $cljs$core$key$$($map_entry$$) {
  return $cljs$core$_key$$($map_entry$$);
}
function $cljs$core$ValSeq$$($mseq$jscomp$3$$, $_meta$jscomp$9$$) {
  this.$mseq$ = $mseq$jscomp$3$$;
  this.$_meta$ = $_meta$jscomp$9$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ValSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$92$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$92$$);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__13364$$ = null, $G__13364$$ = function($G__13364$$, $start$jscomp$118$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13364$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13364$$, $start$jscomp$118$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13364$$.$cljs$core$IFn$_invoke$arity$1$ = function($G__13364$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13364$$, 0);
  };
  $G__13364$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13364$$, $start$jscomp$117$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13364$$, $start$jscomp$117$$);
  };
  return $G__13364$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__13365__1$$($G__13365__1$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13365__1$$, $cljs$core$count$$(this));
  }
  var $G__13365$$ = null, $G__13365$$ = function($G__13365$$, $start$jscomp$120$$) {
    switch(arguments.length) {
      case 1:
        return $G__13365__1$$.call(this, $G__13365$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13365$$, $start$jscomp$120$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13365$$.$cljs$core$IFn$_invoke$arity$1$ = $G__13365__1$$;
  $G__13365$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13365__1$$, $G__13365$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $G__13365__1$$, $G__13365$$);
  };
  return $G__13365$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  var $nseq$jscomp$2$$ = (null != this.$mseq$ ? this.$mseq$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === this.$mseq$.$cljs$core$INext$$ || (this.$mseq$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$next$$(this.$mseq$);
  return null == $nseq$jscomp$2$$ ? null : new $cljs$core$ValSeq$$($nseq$jscomp$2$$, this.$_meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$609$$, $other$jscomp$93$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$93$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$611$$, $f$jscomp$257$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$257$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$612$$, $f$jscomp$258$$, $start$jscomp$121$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$258$$, $start$jscomp$121$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$mseq$.$cljs$core$ISeq$_first$arity$1$(null).$cljs$core$IMapEntry$_val$arity$1$(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $nseq$jscomp$3$$ = (null != this.$mseq$ ? this.$mseq$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === this.$mseq$.$cljs$core$INext$$ || (this.$mseq$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$(null) : $cljs$core$next$$(this.$mseq$);
  return null != $nseq$jscomp$3$$ ? new $cljs$core$ValSeq$$($nseq$jscomp$3$$, this.$_meta$) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$616$$, $new_meta$jscomp$7$$) {
  return new $cljs$core$ValSeq$$(this.$mseq$, $new_meta$jscomp$7$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$617$$, $o$jscomp$100$$) {
  return $cljs$core$cons$$($o$jscomp$100$$, this);
};
$cljs$core$ValSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$vals$$($hash_map$jscomp$1_temp__5278__auto__$jscomp$14$$) {
  return ($hash_map$jscomp$1_temp__5278__auto__$jscomp$14$$ = $cljs$core$seq$$($hash_map$jscomp$1_temp__5278__auto__$jscomp$14$$)) ? new $cljs$core$ValSeq$$($hash_map$jscomp$1_temp__5278__auto__$jscomp$14$$, null) : null;
}
function $cljs$core$val$$($map_entry$jscomp$1$$) {
  return $cljs$core$_val$$($map_entry$jscomp$1$$);
}
function $cljs$core$HashSetIter$$($iter$jscomp$6$$) {
  this.$iter$ = $iter$jscomp$6$$;
}
$cljs$core$HashSetIter$$.prototype.$hasNext$ = function() {
  return this.$iter$.$hasNext$();
};
$cljs$core$HashSetIter$$.prototype.next = function() {
  if (this.$iter$.$hasNext$()) {
    return this.$iter$.next().$tail$[0];
  }
  throw Error("No such element");
};
$cljs$core$HashSetIter$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$PersistentHashSet$$($meta$jscomp$51$$, $hash_map$jscomp$2$$, $__hash$jscomp$39$$) {
  this.$meta$ = $meta$jscomp$51$$;
  this.$hash_map$ = $hash_map$jscomp$2$$;
  this.$__hash$ = $__hash$jscomp$39$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 15077647;
  this.$cljs$lang$protocol_mask$partition1$$ = 8196;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentHashSet$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$94$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$94$$);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$seq$$(this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  return new $cljs$core$ES6SetEntriesIterator$$($cljs$core$seq$$($cljs$core$seq$$(this)));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$seq$$(this));
};
$JSCompiler_prototypeAlias$$.has = function($k$jscomp$221$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$jscomp$221$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$260$$) {
  for (var $G__13399_v$jscomp$50_vec__13387$$, $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$, $G__13397_seq__13383_seq__13383__$1$$ = $cljs$core$seq$$(this), $c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$ = null, $count__13385$$ = 0, $i__13386$$ = 0;;) {
    if ($i__13386$$ < $count__13385$$) {
      $G__13399_v$jscomp$50_vec__13387$$ = $c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__13386$$), $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__13399_v$jscomp$50_vec__13387$$, 0, null), $G__13399_v$jscomp$50_vec__13387$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__13399_v$jscomp$50_vec__13387$$, 1, null), $f$jscomp$260$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$260$$.$cljs$core$IFn$_invoke$arity$2$($G__13399_v$jscomp$50_vec__13387$$, 
      $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$) : $f$jscomp$260$$.call(null, $G__13399_v$jscomp$50_vec__13387$$, $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$), $i__13386$$ += 1;
    } else {
      if ($G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$ = $cljs$core$seq$$($G__13397_seq__13383_seq__13383__$1$$)) {
        $G__13397_seq__13383_seq__13383__$1$$ = $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$, $cljs$core$chunked_seq_QMARK_$$($G__13397_seq__13383_seq__13383__$1$$) ? ($c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$ = $cljs$core$_chunked_first$$($G__13397_seq__13383_seq__13383__$1$$), $G__13397_seq__13383_seq__13383__$1$$ = $cljs$core$_chunked_rest$$($G__13397_seq__13383_seq__13383__$1$$), $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$ = $c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$, 
        $G__13399_v$jscomp$50_vec__13387$$ = $cljs$core$count$$($c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$), $c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$ = $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$, $count__13385$$ = $G__13399_v$jscomp$50_vec__13387$$) : ($c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$ = $cljs$core$first$$($G__13397_seq__13383_seq__13383__$1$$), $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$, 
        0, null), $G__13399_v$jscomp$50_vec__13387$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$, 1, null), $f$jscomp$260$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$260$$.$cljs$core$IFn$_invoke$arity$2$($G__13399_v$jscomp$50_vec__13387$$, $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$) : $f$jscomp$260$$.call(null, $G__13399_v$jscomp$50_vec__13387$$, $G__13398_k$jscomp$222_temp__5278__auto__$jscomp$15$$), $G__13397_seq__13383_seq__13383__$1$$ = 
        $cljs$core$next$$($G__13397_seq__13383_seq__13383__$1$$), $c__8871__auto__$jscomp$4_chunk__13384_vec__13390$$ = null, $count__13385$$ = 0), $i__13386$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$624$$, $v$jscomp$51$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $v$jscomp$51$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$625$$, $v$jscomp$52$$, $not_found$jscomp$71$$) {
  return $cljs$core$_contains_key_QMARK_$$(this.$hash_map$, $v$jscomp$52$$) ? $v$jscomp$52$$ : $not_found$jscomp$71$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$HashSetIter$$($cljs$core$_iterator$$(this.$hash_map$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return $cljs$core$_count$$(this.$hash_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__8402__auto__$jscomp$21_h__8402__auto____$1$jscomp$21$$ = this.$__hash$;
  return null != $h__8402__auto__$jscomp$21_h__8402__auto____$1$jscomp$21$$ ? $h__8402__auto__$jscomp$21_h__8402__auto____$1$jscomp$21$$ : this.$__hash$ = $h__8402__auto__$jscomp$21_h__8402__auto____$1$jscomp$21$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$630$$, $other$jscomp$95$$) {
  return $cljs$core$set_QMARK_$$($other$jscomp$95$$) && $cljs$core$count$$(this) === $cljs$core$count$$($other$jscomp$95$$) && $cljs$core$every_QMARK_$$(function($coll$jscomp$630$$) {
    return function($other$jscomp$95$$) {
      return $cljs$core$contains_QMARK_$$($coll$jscomp$630$$, $other$jscomp$95$$);
    };
  }(this), $other$jscomp$95$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientHashSet$$($cljs$core$_as_transient$$(this.$hash_map$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return $cljs$core$keys$$(this.$hash_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$635$$, $meta__$1$jscomp$15$$) {
  return new $cljs$core$PersistentHashSet$$($meta__$1$jscomp$15$$, this.$hash_map$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$636$$, $o$jscomp$101$$) {
  return new $cljs$core$PersistentHashSet$$(this.$meta$, $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$hash_map$, $o$jscomp$101$$, null), null);
};
$JSCompiler_prototypeAlias$$.call = function() {
  var $G__13405$$ = null, $G__13405$$ = function($G__13405$$, $k$jscomp$225$$, $not_found$jscomp$73$$) {
    switch(arguments.length) {
      case 2:
        return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$225$$);
      case 3:
        return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$225$$, $not_found$jscomp$73$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13405$$.$cljs$core$IFn$_invoke$arity$2$ = function($G__13405$$, $k$jscomp$223$$) {
    return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$223$$);
  };
  $G__13405$$.$cljs$core$IFn$_invoke$arity$3$ = function($G__13405$$, $k$jscomp$224$$, $not_found$jscomp$72$$) {
    return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$224$$, $not_found$jscomp$72$$);
  };
  return $G__13405$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$931$$, $args13382$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args13382$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$226$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$226$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$227$$, $not_found$jscomp$74$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$227$$, $not_found$jscomp$74$$);
};
var $cljs$core$PersistentHashSet$EMPTY$$ = new $cljs$core$PersistentHashSet$$(null, $cljs$core$PersistentArrayMap$EMPTY$$, $cljs$core$empty_unordered_hash$$);
$cljs$core$PersistentHashSet$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientHashSet$$($transient_map$$) {
  this.$transient_map$ = $transient_map$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 136;
  this.$cljs$lang$protocol_mask$partition0$$ = 259;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientHashSet$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$jscomp$40$$, $o$jscomp$102$$) {
  this.$transient_map$ = $cljs$core$_assoc_BANG_$$(this.$transient_map$, $o$jscomp$102$$, null);
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  return new $cljs$core$PersistentHashSet$$(null, $cljs$core$_persistent_BANG_$$(this.$transient_map$), null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return $cljs$core$count$$(this.$transient_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$jscomp$44$$, $v$jscomp$55$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $v$jscomp$55$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($tcoll$jscomp$45$$, $v$jscomp$56$$, $not_found$jscomp$75$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $v$jscomp$56$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? $not_found$jscomp$75$$ : $v$jscomp$56$$;
};
$JSCompiler_prototypeAlias$$.call = function() {
  function $G__13417__3$$($G__13417__3$$, $G__13417__2$$, $G__13417$$) {
    return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $G__13417__2$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? $G__13417$$ : $G__13417__2$$;
  }
  function $G__13417__2$$($G__13417__3$$, $G__13417__2$$) {
    return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $G__13417__2$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? null : $G__13417__2$$;
  }
  var $G__13417$$ = null, $G__13417$$ = function($G__13417$$, $k$jscomp$230$$, $not_found$jscomp$77$$) {
    switch(arguments.length) {
      case 2:
        return $G__13417__2$$.call(this, 0, $k$jscomp$230$$);
      case 3:
        return $G__13417__3$$.call(this, 0, $k$jscomp$230$$, $not_found$jscomp$77$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__13417$$.$cljs$core$IFn$_invoke$arity$2$ = $G__13417__2$$;
  $G__13417$$.$cljs$core$IFn$_invoke$arity$3$ = $G__13417__3$$;
  return $G__13417$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$943$$, $args13416$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args13416$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$231$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $k$jscomp$231$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? null : $k$jscomp$231$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$232$$, $not_found$jscomp$78$$) {
  return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(this.$transient_map$, $k$jscomp$232$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? $not_found$jscomp$78$$ : $k$jscomp$232$$;
};
function $cljs$core$name$$($x$jscomp$533$$) {
  if (null != $x$jscomp$533$$ && ($x$jscomp$533$$.$cljs$lang$protocol_mask$partition1$$ & 4096 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$533$$.$cljs$core$INamed$$)) {
    return $x$jscomp$533$$.$cljs$core$INamed$_name$arity$1$(null);
  }
  if ("string" === typeof $x$jscomp$533$$) {
    return $x$jscomp$533$$;
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Doesn't support name: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$533$$)].join(""));
}
function $cljs$core$zipmap$$($keys$jscomp$9$$, $vals$jscomp$4$$) {
  for (var $G__13497_map$jscomp$1$$ = $cljs$core$_as_transient$$($cljs$core$PersistentArrayMap$EMPTY$$), $G__13498_ks$jscomp$16$$ = $cljs$core$seq$$($keys$jscomp$9$$), $G__13499_vs$jscomp$1$$ = $cljs$core$seq$$($vals$jscomp$4$$);;) {
    if ($G__13498_ks$jscomp$16$$ && $G__13499_vs$jscomp$1$$) {
      var $key$jscomp$inline_344$$ = $cljs$core$first$$($G__13498_ks$jscomp$16$$), $val$jscomp$inline_345$$ = $cljs$core$first$$($G__13499_vs$jscomp$1$$), $G__13497_map$jscomp$1$$ = $cljs$core$_assoc_BANG_$$($G__13497_map$jscomp$1$$, $key$jscomp$inline_344$$, $val$jscomp$inline_345$$), $G__13498_ks$jscomp$16$$ = $cljs$core$next$$($G__13498_ks$jscomp$16$$), $G__13499_vs$jscomp$1$$ = $cljs$core$next$$($G__13499_vs$jscomp$1$$);
    } else {
      return $cljs$core$_persistent_BANG_$$($G__13497_map$jscomp$1$$);
    }
  }
}
function $cljs$core$partition_all$cljs$0core$0IFn$0_invoke$0arity$03$$($n$jscomp$135$$, $step$jscomp$10$$, $coll$jscomp$671$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $temp__5278__auto__$jscomp$18$$ = $cljs$core$seq$$($coll$jscomp$671$$);
    return $temp__5278__auto__$jscomp$18$$ ? $cljs$core$cons$$($cljs$core$take$$.$cljs$core$IFn$_invoke$arity$2$($n$jscomp$135$$, $temp__5278__auto__$jscomp$18$$), $cljs$core$partition_all$cljs$0core$0IFn$0_invoke$0arity$03$$($n$jscomp$135$$, $step$jscomp$10$$, $cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$($step$jscomp$10$$, $temp__5278__auto__$jscomp$18$$))) : null;
  }, null, null);
}
function $cljs$core$pr_sequential_writer$$($writer$jscomp$6$$, $print_one$$, $G__13695_13703_G__13706_begin$jscomp$3$$, $sep$jscomp$2$$, $end$jscomp$27$$, $opts$jscomp$1$$, $G__13696_13704_coll$jscomp$688$$) {
  var $_STAR_print_level_STAR_13690$$ = $cljs$core$_STAR_print_level_STAR_$$;
  $cljs$core$_STAR_print_level_STAR_$$ = null == $cljs$core$_STAR_print_level_STAR_$$ ? null : $cljs$core$_STAR_print_level_STAR_$$ - 1;
  try {
    if (null != $cljs$core$_STAR_print_level_STAR_$$ && 0 > $cljs$core$_STAR_print_level_STAR_$$) {
      return $cljs$core$_write$$($writer$jscomp$6$$, "#");
    }
    $cljs$core$_write$$($writer$jscomp$6$$, $G__13695_13703_G__13706_begin$jscomp$3$$);
    if (0 === $cljs$core$cst$0kw$0print_DASH_length$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$1$$)) {
      $cljs$core$seq$$($G__13696_13704_coll$jscomp$688$$) && $cljs$core$_write$$($writer$jscomp$6$$, function() {
        var $writer$jscomp$6$$ = $cljs$core$cst$0kw$0more_DASH_marker$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$1$$);
        return $cljs$core$truth_$$($writer$jscomp$6$$) ? $writer$jscomp$6$$ : "...";
      }());
    } else {
      if ($cljs$core$seq$$($G__13696_13704_coll$jscomp$688$$)) {
        var $G__13691_13697$$ = $cljs$core$first$$($G__13696_13704_coll$jscomp$688$$);
        $print_one$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$$.$cljs$core$IFn$_invoke$arity$3$($G__13691_13697$$, $writer$jscomp$6$$, $opts$jscomp$1$$) : $print_one$$.call(null, $G__13691_13697$$, $writer$jscomp$6$$, $opts$jscomp$1$$);
      }
      for (var $coll_13700__$1$$ = $cljs$core$next$$($G__13696_13704_coll$jscomp$688$$), $n_13701$$ = $cljs$core$cst$0kw$0print_DASH_length$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$1$$) - 1;;) {
        if (!$coll_13700__$1$$ || null != $n_13701$$ && 0 === $n_13701$$) {
          $cljs$core$seq$$($coll_13700__$1$$) && 0 === $n_13701$$ && ($cljs$core$_write$$($writer$jscomp$6$$, $sep$jscomp$2$$), $cljs$core$_write$$($writer$jscomp$6$$, function() {
            var $writer$jscomp$6$$ = $cljs$core$cst$0kw$0more_DASH_marker$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$1$$);
            return $cljs$core$truth_$$($writer$jscomp$6$$) ? $writer$jscomp$6$$ : "...";
          }()));
          break;
        } else {
          $cljs$core$_write$$($writer$jscomp$6$$, $sep$jscomp$2$$);
          var $G__13694_13702$$ = $cljs$core$first$$($coll_13700__$1$$);
          $G__13695_13703_G__13706_begin$jscomp$3$$ = $writer$jscomp$6$$;
          $G__13696_13704_coll$jscomp$688$$ = $opts$jscomp$1$$;
          $print_one$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$$.$cljs$core$IFn$_invoke$arity$3$($G__13694_13702$$, $G__13695_13703_G__13706_begin$jscomp$3$$, $G__13696_13704_coll$jscomp$688$$) : $print_one$$.call(null, $G__13694_13702$$, $G__13695_13703_G__13706_begin$jscomp$3$$, $G__13696_13704_coll$jscomp$688$$);
          var $G__13705$$ = $cljs$core$next$$($coll_13700__$1$$);
          $G__13695_13703_G__13706_begin$jscomp$3$$ = $n_13701$$ - 1;
          $coll_13700__$1$$ = $G__13705$$;
          $n_13701$$ = $G__13695_13703_G__13706_begin$jscomp$3$$;
        }
      }
    }
    return $cljs$core$_write$$($writer$jscomp$6$$, $end$jscomp$27$$);
  } finally {
    $cljs$core$_STAR_print_level_STAR_$$ = $_STAR_print_level_STAR_13690$$;
  }
}
function $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$7$$, $ss$jscomp$5$$) {
  for (var $G__13721_s$jscomp$109$$, $c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$ = $cljs$core$seq$$($ss$jscomp$5$$), $G__13720_chunk__13710_seq__13709__$1$$ = null, $G__13722_count__13711$$ = 0, $i__13712$$ = 0;;) {
    if ($i__13712$$ < $G__13722_count__13711$$) {
      $G__13721_s$jscomp$109$$ = $G__13720_chunk__13710_seq__13709__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__13712$$), $cljs$core$_write$$($writer$jscomp$7$$, $G__13721_s$jscomp$109$$), $i__13712$$ += 1;
    } else {
      if ($c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$ = $cljs$core$seq$$($c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$)) {
        $G__13720_chunk__13710_seq__13709__$1$$ = $c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$, $cljs$core$chunked_seq_QMARK_$$($G__13720_chunk__13710_seq__13709__$1$$) ? ($c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$ = $cljs$core$_chunked_first$$($G__13720_chunk__13710_seq__13709__$1$$), $G__13720_chunk__13710_seq__13709__$1$$ = $cljs$core$_chunked_rest$$($G__13720_chunk__13710_seq__13709__$1$$), $G__13721_s$jscomp$109$$ = $c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$, 
        $G__13722_count__13711$$ = $cljs$core$count$$($c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$), $c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$ = $G__13720_chunk__13710_seq__13709__$1$$, $G__13720_chunk__13710_seq__13709__$1$$ = $G__13721_s$jscomp$109$$) : ($G__13721_s$jscomp$109$$ = $cljs$core$first$$($G__13720_chunk__13710_seq__13709__$1$$), $cljs$core$_write$$($writer$jscomp$7$$, $G__13721_s$jscomp$109$$), $c__8871__auto__$jscomp$6_seq__13709_temp__5278__auto__$jscomp$28$$ = 
        $cljs$core$next$$($G__13720_chunk__13710_seq__13709__$1$$), $G__13720_chunk__13710_seq__13709__$1$$ = null, $G__13722_count__13711$$ = 0), $i__13712$$ = 0;
      } else {
        return null;
      }
    }
  }
}
var $cljs$core$char_escapes$$ = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function $cljs$core$quote_string$$($s$jscomp$110$$) {
  return [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$('"'), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($s$jscomp$110$$.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function($s$jscomp$110$$) {
    return $cljs$core$char_escapes$$[$s$jscomp$110$$];
  })), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$('"')].join("");
}
function $cljs$core$print_meta_QMARK_$$($opts$jscomp$2$$, $obj$jscomp$90$$) {
  var $and__7948__auto__$jscomp$28_and__7948__auto____$1$jscomp$12$$ = $cljs$core$boolean$0$$($cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($opts$jscomp$2$$, $cljs$core$cst$0kw$0meta$$));
  return $and__7948__auto__$jscomp$28_and__7948__auto____$1$jscomp$12$$ ? ($and__7948__auto__$jscomp$28_and__7948__auto____$1$jscomp$12$$ = null != $obj$jscomp$90$$ ? $obj$jscomp$90$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $cljs$core$PROTOCOL_SENTINEL$$ === $obj$jscomp$90$$.$cljs$core$IMeta$$ ? !0 : !1 : !1) ? null != $cljs$core$meta$$($obj$jscomp$90$$) : $and__7948__auto__$jscomp$28_and__7948__auto____$1$jscomp$12$$ : $and__7948__auto__$jscomp$28_and__7948__auto____$1$jscomp$12$$;
}
function $cljs$core$pr_writer_impl$$($obj$jscomp$91$$, $writer$jscomp$8$$, $name__$1$jscomp$1_normalize_opts$jscomp$3$$) {
  if (null == $obj$jscomp$91$$) {
    return $cljs$core$_write$$($writer$jscomp$8$$, "nil");
  }
  if ($cljs$core$print_meta_QMARK_$$($name__$1$jscomp$1_normalize_opts$jscomp$3$$, $obj$jscomp$91$$)) {
    $cljs$core$_write$$($writer$jscomp$8$$, "^");
    var $G__13744_13752_G__13748$$ = $cljs$core$meta$$($obj$jscomp$91$$);
    $cljs$core$pr_writer$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$pr_writer$$.$cljs$core$IFn$_invoke$arity$3$($G__13744_13752_G__13748$$, $writer$jscomp$8$$, $name__$1$jscomp$1_normalize_opts$jscomp$3$$) : $cljs$core$pr_writer$$.call(null, $G__13744_13752_G__13748$$, $writer$jscomp$8$$, $name__$1$jscomp$1_normalize_opts$jscomp$3$$);
    $cljs$core$_write$$($writer$jscomp$8$$, " ");
  }
  if ($obj$jscomp$91$$.$cljs$lang$type$) {
    return $obj$jscomp$91$$.$cljs$lang$ctorPrWriter$($obj$jscomp$91$$, $writer$jscomp$8$$, $name__$1$jscomp$1_normalize_opts$jscomp$3$$);
  }
  if (null != $obj$jscomp$91$$ && ($obj$jscomp$91$$.$cljs$lang$protocol_mask$partition0$$ & 2147483648 || $cljs$core$PROTOCOL_SENTINEL$$ === $obj$jscomp$91$$.$cljs$core$IPrintWithWriter$$)) {
    return $obj$jscomp$91$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$(null, $writer$jscomp$8$$, $name__$1$jscomp$1_normalize_opts$jscomp$3$$);
  }
  if (!0 === $obj$jscomp$91$$ || !1 === $obj$jscomp$91$$ || "number" === typeof $obj$jscomp$91$$) {
    return $cljs$core$_write$$($writer$jscomp$8$$, "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$91$$));
  }
  if (null != $obj$jscomp$91$$ && $obj$jscomp$91$$.constructor === Object) {
    return $cljs$core$_write$$($writer$jscomp$8$$, "#js "), $G__13744_13752_G__13748$$ = $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($writer$jscomp$8$$) {
      return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($writer$jscomp$8$$), $obj$jscomp$91$$[$writer$jscomp$8$$]], null);
    }, $cljs$core$js_keys$$($obj$jscomp$91$$)), $cljs$core$print_map$$.$cljs$core$IFn$_invoke$arity$4$ ? $cljs$core$print_map$$.$cljs$core$IFn$_invoke$arity$4$($G__13744_13752_G__13748$$, $cljs$core$pr_writer$$, $writer$jscomp$8$$, $name__$1$jscomp$1_normalize_opts$jscomp$3$$) : $cljs$core$print_map$$.call(null, $G__13744_13752_G__13748$$, $cljs$core$pr_writer$$, $writer$jscomp$8$$, $name__$1$jscomp$1_normalize_opts$jscomp$3$$);
  }
  if ($cljs$core$array_QMARK_$$($obj$jscomp$91$$)) {
    return $cljs$core$pr_sequential_writer$$($writer$jscomp$8$$, $cljs$core$pr_writer$$, "#js [", " ", "]", $name__$1$jscomp$1_normalize_opts$jscomp$3$$, $obj$jscomp$91$$);
  }
  if ("string" == typeof $obj$jscomp$91$$) {
    return $cljs$core$truth_$$($cljs$core$cst$0kw$0readably$$.$cljs$core$IFn$_invoke$arity$1$($name__$1$jscomp$1_normalize_opts$jscomp$3$$)) ? $cljs$core$_write$$($writer$jscomp$8$$, $cljs$core$quote_string$$($obj$jscomp$91$$)) : $cljs$core$_write$$($writer$jscomp$8$$, $obj$jscomp$91$$);
  }
  if ($goog$isFunction$$($obj$jscomp$91$$)) {
    var $name$jscomp$85$$ = $obj$jscomp$91$$.name;
    $name__$1$jscomp$1_normalize_opts$jscomp$3$$ = $cljs$core$truth_$$(function() {
      var $obj$jscomp$91$$ = null == $name$jscomp$85$$;
      return $obj$jscomp$91$$ ? $obj$jscomp$91$$ : /^[\s\xa0]*$/.test($name$jscomp$85$$);
    }()) ? "Function" : $name$jscomp$85$$;
    return $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$8$$, $cljs$core$array_seq$$(["#object[", $name__$1$jscomp$1_normalize_opts$jscomp$3$$, ' "', "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$91$$), '"]'], 0));
  }
  if ($obj$jscomp$91$$ instanceof Date) {
    return $name__$1$jscomp$1_normalize_opts$jscomp$3$$ = function($obj$jscomp$91$$, $writer$jscomp$8$$) {
      for (var $name__$1$jscomp$1_normalize_opts$jscomp$3$$ = "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$91$$);;) {
        if ($cljs$core$count$$($name__$1$jscomp$1_normalize_opts$jscomp$3$$) < $writer$jscomp$8$$) {
          $name__$1$jscomp$1_normalize_opts$jscomp$3$$ = [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("0"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($name__$1$jscomp$1_normalize_opts$jscomp$3$$)].join("");
        } else {
          return $name__$1$jscomp$1_normalize_opts$jscomp$3$$;
        }
      }
    }, $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$8$$, $cljs$core$array_seq$$(['#inst "', "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$91$$.getUTCFullYear()), "-", $name__$1$jscomp$1_normalize_opts$jscomp$3$$($obj$jscomp$91$$.getUTCMonth() + 1, 2), "-", $name__$1$jscomp$1_normalize_opts$jscomp$3$$($obj$jscomp$91$$.getUTCDate(), 2), "T", $name__$1$jscomp$1_normalize_opts$jscomp$3$$($obj$jscomp$91$$.getUTCHours(), 2), ":", $name__$1$jscomp$1_normalize_opts$jscomp$3$$($obj$jscomp$91$$.getUTCMinutes(), 
    2), ":", $name__$1$jscomp$1_normalize_opts$jscomp$3$$($obj$jscomp$91$$.getUTCSeconds(), 2), ".", $name__$1$jscomp$1_normalize_opts$jscomp$3$$($obj$jscomp$91$$.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
  }
  if ($obj$jscomp$91$$ instanceof RegExp) {
    return $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$8$$, $cljs$core$array_seq$$(['#"', $obj$jscomp$91$$.source, '"'], 0));
  }
  if ($cljs$core$truth_$$($obj$jscomp$91$$.constructor.$cljs$lang$ctorStr$)) {
    return $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$8$$, $cljs$core$array_seq$$(["#object[", $obj$jscomp$91$$.constructor.$cljs$lang$ctorStr$.replace(RegExp("/", "g"), "."), "]"], 0));
  }
  $name$jscomp$85$$ = $obj$jscomp$91$$.constructor.name;
  $name__$1$jscomp$1_normalize_opts$jscomp$3$$ = $cljs$core$truth_$$(function() {
    var $obj$jscomp$91$$ = null == $name$jscomp$85$$;
    return $obj$jscomp$91$$ ? $obj$jscomp$91$$ : /^[\s\xa0]*$/.test($name$jscomp$85$$);
  }()) ? "Object" : $name$jscomp$85$$;
  return $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$8$$, $cljs$core$array_seq$$(["#object[", $name__$1$jscomp$1_normalize_opts$jscomp$3$$, " ", "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$91$$), "]"], 0));
}
function $cljs$core$pr_writer$$($obj$jscomp$92$$, $writer$jscomp$9$$, $G__13761_opts$jscomp$4$$) {
  var $temp__5276__auto__$jscomp$13$$ = $cljs$core$cst$0kw$0alt_DASH_impl$$.$cljs$core$IFn$_invoke$arity$1$($G__13761_opts$jscomp$4$$);
  return $cljs$core$truth_$$($temp__5276__auto__$jscomp$13$$) ? ($G__13761_opts$jscomp$4$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__13761_opts$jscomp$4$$, $cljs$core$cst$0kw$0fallback_DASH_impl$$, $cljs$core$pr_writer_impl$$), $temp__5276__auto__$jscomp$13$$.$cljs$core$IFn$_invoke$arity$3$ ? $temp__5276__auto__$jscomp$13$$.$cljs$core$IFn$_invoke$arity$3$($obj$jscomp$92$$, $writer$jscomp$9$$, $G__13761_opts$jscomp$4$$) : $temp__5276__auto__$jscomp$13$$.call(null, $obj$jscomp$92$$, 
  $writer$jscomp$9$$, $G__13761_opts$jscomp$4$$)) : $cljs$core$pr_writer_impl$$($obj$jscomp$92$$, $writer$jscomp$9$$, $G__13761_opts$jscomp$4$$);
}
function $cljs$core$pr_sb_with_opts$$($objs$jscomp$1$$, $opts$jscomp$6$$) {
  var $sb$jscomp$6$$ = new $goog$string$StringBuffer$$;
  a: {
    var $writer$jscomp$inline_348$$ = new $cljs$core$StringBufferWriter$$($sb$jscomp$6$$);
    $cljs$core$pr_writer$$($cljs$core$first$$($objs$jscomp$1$$), $writer$jscomp$inline_348$$, $opts$jscomp$6$$);
    for (var $c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$ = $cljs$core$seq$$($cljs$core$next$$($objs$jscomp$1$$)), $G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$ = null, $G__13776$jscomp$inline_360_count__13768$jscomp$inline_353$$ = 0, $i__13769$jscomp$inline_354$$ = 0;;) {
      if ($i__13769$jscomp$inline_354$$ < $G__13776$jscomp$inline_360_count__13768$jscomp$inline_353$$) {
        var $G__13775$jscomp$inline_359_obj$jscomp$inline_350$$ = $G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__13769$jscomp$inline_354$$);
        $cljs$core$_write$$($writer$jscomp$inline_348$$, " ");
        $cljs$core$pr_writer$$($G__13775$jscomp$inline_359_obj$jscomp$inline_350$$, $writer$jscomp$inline_348$$, $opts$jscomp$6$$);
        $i__13769$jscomp$inline_354$$ += 1;
      } else {
        if ($c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$ = $cljs$core$seq$$($c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$)) {
          $G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$ = $c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$, $cljs$core$chunked_seq_QMARK_$$($G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$) ? ($c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$ = $cljs$core$_chunked_first$$($G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$), 
          $G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$ = $cljs$core$_chunked_rest$$($G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$), $G__13775$jscomp$inline_359_obj$jscomp$inline_350$$ = $c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$, $G__13776$jscomp$inline_360_count__13768$jscomp$inline_353$$ = $cljs$core$count$$($c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$), 
          $c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$ = $G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$, $G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$ = $G__13775$jscomp$inline_359_obj$jscomp$inline_350$$) : ($G__13775$jscomp$inline_359_obj$jscomp$inline_350$$ = $cljs$core$first$$($G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$), 
          $cljs$core$_write$$($writer$jscomp$inline_348$$, " "), $cljs$core$pr_writer$$($G__13775$jscomp$inline_359_obj$jscomp$inline_350$$, $writer$jscomp$inline_348$$, $opts$jscomp$6$$), $c__8871__auto__$jscomp$inline_357_seq__13766$jscomp$inline_351_temp__5278__auto__$jscomp$inline_355$$ = $cljs$core$next$$($G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$), $G__13774$jscomp$inline_358_chunk__13767$jscomp$inline_352_seq__13766__$1$jscomp$inline_356$$ = 
          null, $G__13776$jscomp$inline_360_count__13768$jscomp$inline_353$$ = 0), $i__13769$jscomp$inline_354$$ = 0;
        } else {
          break a;
        }
      }
    }
  }
  return $sb$jscomp$6$$;
}
function $cljs$core$pr_str_with_opts$$($objs$jscomp$2$$) {
  var $opts$jscomp$7$$ = $cljs$core$pr_opts$$();
  return $cljs$core$empty_QMARK_$$($objs$jscomp$2$$) ? "" : "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$pr_sb_with_opts$$($objs$jscomp$2$$, $opts$jscomp$7$$));
}
function $cljs$core$print_prefix_map$$($prefix$jscomp$5$$, $m$jscomp$68$$, $print_one$jscomp$1$$, $writer$jscomp$12$$, $opts$jscomp$11$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$12$$, function($prefix$jscomp$5$$, $m$jscomp$68$$, $writer$jscomp$12$$) {
    var $opts$jscomp$11$$ = $cljs$core$_key$$($prefix$jscomp$5$$);
    $print_one$jscomp$1$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$jscomp$1$$.$cljs$core$IFn$_invoke$arity$3$($opts$jscomp$11$$, $m$jscomp$68$$, $writer$jscomp$12$$) : $print_one$jscomp$1$$.call(null, $opts$jscomp$11$$, $m$jscomp$68$$, $writer$jscomp$12$$);
    $cljs$core$_write$$($m$jscomp$68$$, " ");
    $prefix$jscomp$5$$ = $cljs$core$_val$$($prefix$jscomp$5$$);
    return $print_one$jscomp$1$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$jscomp$1$$.$cljs$core$IFn$_invoke$arity$3$($prefix$jscomp$5$$, $m$jscomp$68$$, $writer$jscomp$12$$) : $print_one$jscomp$1$$.call(null, $prefix$jscomp$5$$, $m$jscomp$68$$, $writer$jscomp$12$$);
  }, [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($prefix$jscomp$5$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("{")].join(""), ", ", "}", $opts$jscomp$11$$, $cljs$core$seq$$($m$jscomp$68$$));
}
function $cljs$core$print_map$$($m$jscomp$69$$, $print_one$jscomp$2$$, $writer$jscomp$13$$, $opts$jscomp$12$$) {
  var $ns$jscomp$10$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$(null, 0, null), $lift_map$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$(null, 1, null);
  return $cljs$core$truth_$$($ns$jscomp$10$$) ? $cljs$core$print_prefix_map$$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("#:"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$10$$)].join(""), $lift_map$$, $print_one$jscomp$2$$, $writer$jscomp$13$$, $opts$jscomp$12$$) : $cljs$core$print_prefix_map$$(null, $m$jscomp$69$$, $print_one$jscomp$2$$, $writer$jscomp$13$$, $opts$jscomp$12$$);
}
$cljs$core$Volatile$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$Volatile$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($a$jscomp$180$$, $writer$jscomp$14$$, $opts$jscomp$13$$) {
  $cljs$core$_write$$($writer$jscomp$14$$, "#object [cljs.core.Volatile ");
  $cljs$core$pr_writer$$(new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$cst$0kw$0val$$, this.state], null), $writer$jscomp$14$$, $opts$jscomp$13$$);
  return $cljs$core$_write$$($writer$jscomp$14$$, "]");
};
$cljs$core$IndexedSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$IndexedSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$689$$, $writer$jscomp$16$$, $opts$jscomp$15$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$16$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$15$$, this);
};
$cljs$core$LazySeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$LazySeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$690$$, $writer$jscomp$17$$, $opts$jscomp$16$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$17$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$16$$, this);
};
$cljs$core$NodeSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$NodeSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$692$$, $writer$jscomp$19$$, $opts$jscomp$18$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$19$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$18$$, this);
};
$cljs$core$PersistentArrayMapSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentArrayMapSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$694$$, $writer$jscomp$21$$, $opts$jscomp$20$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$21$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$20$$, this);
};
$cljs$core$ChunkedSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ChunkedSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$697$$, $writer$jscomp$24$$, $opts$jscomp$23$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$24$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$23$$, this);
};
$cljs$core$Cons$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$Cons$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$699$$, $writer$jscomp$26$$, $opts$jscomp$25$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$26$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$25$$, this);
};
$cljs$core$PersistentHashMap$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentHashMap$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$701$$, $writer$jscomp$28$$, $opts$jscomp$27$$) {
  return $cljs$core$print_map$$(this, $cljs$core$pr_writer$$, $writer$jscomp$28$$, $opts$jscomp$27$$);
};
$cljs$core$ArrayNodeSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ArrayNodeSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$702$$, $writer$jscomp$29$$, $opts$jscomp$28$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$29$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$28$$, this);
};
$cljs$core$Subvec$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$Subvec$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$703$$, $writer$jscomp$30$$, $opts$jscomp$29$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$30$$, $cljs$core$pr_writer$$, "[", " ", "]", $opts$jscomp$29$$, this);
};
$cljs$core$PersistentHashSet$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentHashSet$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$705$$, $writer$jscomp$32$$, $opts$jscomp$31$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$32$$, $cljs$core$pr_writer$$, "#{", " ", "}", $opts$jscomp$31$$, this);
};
$cljs$core$ChunkedCons$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ChunkedCons$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$706$$, $writer$jscomp$33$$, $opts$jscomp$32$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$33$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$32$$, this);
};
$cljs$core$Atom$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$Atom$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($a$jscomp$182$$, $writer$jscomp$34$$, $opts$jscomp$33$$) {
  $cljs$core$_write$$($writer$jscomp$34$$, "#object [cljs.core.Atom ");
  $cljs$core$pr_writer$$(new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$core$cst$0kw$0val$$, this.state], null), $writer$jscomp$34$$, $opts$jscomp$33$$);
  return $cljs$core$_write$$($writer$jscomp$34$$, "]");
};
$cljs$core$ValSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ValSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$707$$, $writer$jscomp$35$$, $opts$jscomp$34$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$35$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$34$$, this);
};
$cljs$core$PersistentVector$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentVector$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$709$$, $writer$jscomp$37$$, $opts$jscomp$36$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$37$$, $cljs$core$pr_writer$$, "[", " ", "]", $opts$jscomp$36$$, this);
};
$cljs$core$EmptyList$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$EmptyList$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$711$$, $writer$jscomp$39$$) {
  return $cljs$core$_write$$($writer$jscomp$39$$, "()");
};
$cljs$core$PersistentArrayMap$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentArrayMap$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$713$$, $writer$jscomp$41$$, $opts$jscomp$40$$) {
  return $cljs$core$print_map$$(this, $cljs$core$pr_writer$$, $writer$jscomp$41$$, $opts$jscomp$40$$);
};
$cljs$core$KeySeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$KeySeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$716$$, $writer$jscomp$44$$, $opts$jscomp$43$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$44$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$43$$, this);
};
$cljs$core$List$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$List$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$717$$, $writer$jscomp$45$$, $opts$jscomp$44$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$45$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$44$$, this);
};
function $cljs$core$Delay$$($f$jscomp$275$$, $value$jscomp$100$$) {
  this.$f$ = $f$jscomp$275$$;
  this.value = $value$jscomp$100$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32768;
  this.$cljs$lang$protocol_mask$partition1$$ = 1;
}
$cljs$core$Delay$$.prototype.$cljs$core$IDeref$_deref$arity$1$ = function() {
  $cljs$core$truth_$$(this.$f$) && (this.value = this.$f$.$cljs$core$IFn$_invoke$arity$0$ ? this.$f$.$cljs$core$IFn$_invoke$arity$0$() : this.$f$.call(null), this.$f$ = null);
  return this.value;
};
var $cljs$core$_global_hierarchy$$ = null;
function $cljs$core$get_global_hierarchy$$() {
  if (null == $cljs$core$_global_hierarchy$$) {
    var $G__14070$jscomp$inline_363$$ = new $cljs$core$PersistentArrayMap$$(null, 3, [$cljs$core$cst$0kw$0parents$$, $cljs$core$PersistentArrayMap$EMPTY$$, $cljs$core$cst$0kw$0descendants$$, $cljs$core$PersistentArrayMap$EMPTY$$, $cljs$core$cst$0kw$0ancestors$$, $cljs$core$PersistentArrayMap$EMPTY$$], null);
    $cljs$core$_global_hierarchy$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($G__14070$jscomp$inline_363$$) : $cljs$core$atom$$.call(null, $G__14070$jscomp$inline_363$$);
  }
  return $cljs$core$_global_hierarchy$$;
}
function $cljs$core$isa_QMARK_$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$85$$, $child$jscomp$3$$, $parent$jscomp$9$$) {
  var $G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($child$jscomp$3$$, $parent$jscomp$9$$);
  if (!$G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ && !($G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ = $cljs$core$contains_QMARK_$$($cljs$core$cst$0kw$0ancestors$$.$cljs$core$IFn$_invoke$arity$1$($h$jscomp$85$$).call(null, $child$jscomp$3$$), 
  $parent$jscomp$9$$)) && ($G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ = $cljs$core$vector_QMARK_$$($parent$jscomp$9$$)) && ($G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ = $cljs$core$vector_QMARK_$$($child$jscomp$3$$))) {
    if ($G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ = $cljs$core$count$$($parent$jscomp$9$$) === $cljs$core$count$$($child$jscomp$3$$)) {
      for (var $G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ = !0, $G__14085_i$jscomp$236$$ = 0;;) {
        if ($G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ && $G__14085_i$jscomp$236$$ !== $cljs$core$count$$($parent$jscomp$9$$)) {
          $G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$ = $cljs$core$isa_QMARK_$cljs$0core$0IFn$0_invoke$0arity$03$$($h$jscomp$85$$, $child$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $child$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($G__14085_i$jscomp$236$$) : $child$jscomp$3$$.call(null, $G__14085_i$jscomp$236$$), $parent$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$ ? 
          $parent$jscomp$9$$.$cljs$core$IFn$_invoke$arity$1$($G__14085_i$jscomp$236$$) : $parent$jscomp$9$$.call(null, $G__14085_i$jscomp$236$$)), $G__14085_i$jscomp$236$$ += 1;
        } else {
          return $G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$;
        }
      }
    } else {
      return $G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$;
    }
  } else {
    return $G__14084_and__7948__auto__$jscomp$29_and__7948__auto____$1$jscomp$13_and__7948__auto____$2$jscomp$5_or__7960__auto__$jscomp$38_or__7960__auto____$1$jscomp$10_ret$jscomp$43$$;
  }
}
function $cljs$core$parents$cljs$0core$0IFn$0_invoke$0arity$01$$($coll$jscomp$inline_581_tag$jscomp$1$$) {
  var $G__14089$jscomp$inline_365_JSCompiler_inline_result$jscomp$88$$ = $cljs$core$get_global_hierarchy$$();
  $G__14089$jscomp$inline_365_JSCompiler_inline_result$jscomp$88$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($G__14089$jscomp$inline_365_JSCompiler_inline_result$jscomp$88$$) : $cljs$core$deref$$.call(null, $G__14089$jscomp$inline_365_JSCompiler_inline_result$jscomp$88$$);
  $coll$jscomp$inline_581_tag$jscomp$1$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0parents$$.$cljs$core$IFn$_invoke$arity$1$($G__14089$jscomp$inline_365_JSCompiler_inline_result$jscomp$88$$), $coll$jscomp$inline_581_tag$jscomp$1$$);
  return $cljs$core$seq$$($coll$jscomp$inline_581_tag$jscomp$1$$) ? $coll$jscomp$inline_581_tag$jscomp$1$$ : null;
}
function $cljs$core$reset_cache$$($method_cache$$, $method_table$$, $cached_hierarchy$$, $hierarchy$$) {
  $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($method_cache$$, function() {
    return $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($method_table$$) : $cljs$core$deref$$.call(null, $method_table$$);
  });
  $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($cached_hierarchy$$, function() {
    return $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($hierarchy$$) : $cljs$core$deref$$.call(null, $hierarchy$$);
  });
}
var $cljs$core$prefers_STAR_$$ = function $cljs$core$prefers_STAR_$$($x$jscomp$599$$, $y$jscomp$247$$, $prefer_table$$) {
  var $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ = ($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($prefer_table$$) : $cljs$core$deref$$.call(null, $prefer_table$$)).call(null, $x$jscomp$599$$), $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ = $cljs$core$truth_$$($cljs$core$truth_$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$) ? 
  $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$.$cljs$core$IFn$_invoke$arity$1$ ? $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$.$cljs$core$IFn$_invoke$arity$1$($y$jscomp$247$$) : $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$.call(null, $y$jscomp$247$$) : $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$) ? 
  !0 : null;
  if ($cljs$core$truth_$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$)) {
    return $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$;
  }
  $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ = function() {
    for (var $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ = $cljs$core$parents$cljs$0core$0IFn$0_invoke$0arity$01$$($y$jscomp$247$$);;) {
      if (0 < $cljs$core$count$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$)) {
        var $G__14143$jscomp$inline_369$$ = $cljs$core$first$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$);
        $cljs$core$prefers_STAR_$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$prefers_STAR_$$.$cljs$core$IFn$_invoke$arity$3$($x$jscomp$599$$, $G__14143$jscomp$inline_369$$, $prefer_table$$) : $cljs$core$prefers_STAR_$$.call(null, $x$jscomp$599$$, $G__14143$jscomp$inline_369$$, $prefer_table$$);
        $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ = $cljs$core$rest$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$);
      } else {
        return null;
      }
    }
  }();
  if ($cljs$core$truth_$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$)) {
    return $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$;
  }
  $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ = function() {
    for (var $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ = $cljs$core$parents$cljs$0core$0IFn$0_invoke$0arity$01$$($x$jscomp$599$$);;) {
      if (0 < $cljs$core$count$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$)) {
        var $G__14148$jscomp$inline_371$$ = $cljs$core$first$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$);
        $cljs$core$prefers_STAR_$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$prefers_STAR_$$.$cljs$core$IFn$_invoke$arity$3$($G__14148$jscomp$inline_371$$, $y$jscomp$247$$, $prefer_table$$) : $cljs$core$prefers_STAR_$$.call(null, $G__14148$jscomp$inline_371$$, $y$jscomp$247$$, $prefer_table$$);
        $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ = $cljs$core$rest$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$);
      } else {
        return null;
      }
    }
  }();
  return $cljs$core$truth_$$($or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$) ? $or__7960__auto__$jscomp$40_or__7960__auto____$1$jscomp$11_or__7960__auto____$2$jscomp$5_xprefs$$ : !1;
};
function $cljs$core$dominates$$($x$jscomp$600$$, $y$jscomp$248$$, $or__7960__auto__$jscomp$41_prefer_table$jscomp$1$$, $hierarchy$jscomp$1$$) {
  $or__7960__auto__$jscomp$41_prefer_table$jscomp$1$$ = $cljs$core$prefers_STAR_$$($x$jscomp$600$$, $y$jscomp$248$$, $or__7960__auto__$jscomp$41_prefer_table$jscomp$1$$);
  return $cljs$core$truth_$$($or__7960__auto__$jscomp$41_prefer_table$jscomp$1$$) ? $or__7960__auto__$jscomp$41_prefer_table$jscomp$1$$ : $cljs$core$isa_QMARK_$cljs$0core$0IFn$0_invoke$0arity$03$$($hierarchy$jscomp$1$$, $x$jscomp$600$$, $y$jscomp$248$$);
}
var $cljs$core$find_and_cache_best_method$$ = function $cljs$core$find_and_cache_best_method$$($name$jscomp$86$$, $dispatch_val$$, $hierarchy$jscomp$2$$, $method_table$jscomp$1$$, $prefer_table$jscomp$2$$, $method_cache$jscomp$1$$, $cached_hierarchy$jscomp$1$$, $default_dispatch_val$$) {
  var $best_entry$$ = $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($method_table$jscomp$1$$, $method_cache$jscomp$1$$) {
    var $cached_hierarchy$jscomp$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($method_cache$jscomp$1$$, 0, null);
    $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($method_cache$jscomp$1$$, 1, null);
    if ($cljs$core$isa_QMARK_$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($hierarchy$jscomp$2$$) : $cljs$core$deref$$.call(null, $hierarchy$jscomp$2$$), $dispatch_val$$, $cached_hierarchy$jscomp$1$$)) {
      var $default_dispatch_val$$ = ($default_dispatch_val$$ = null == $method_table$jscomp$1$$) ? $default_dispatch_val$$ : $cljs$core$dominates$$($cached_hierarchy$jscomp$1$$, $cljs$core$first$$($method_table$jscomp$1$$), $prefer_table$jscomp$2$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($hierarchy$jscomp$2$$) : $cljs$core$deref$$.call(null, $hierarchy$jscomp$2$$));
      $default_dispatch_val$$ = $cljs$core$truth_$$($default_dispatch_val$$) ? $method_cache$jscomp$1$$ : $method_table$jscomp$1$$;
      if (!$cljs$core$truth_$$($cljs$core$dominates$$($cljs$core$first$$($default_dispatch_val$$), $cached_hierarchy$jscomp$1$$, $prefer_table$jscomp$2$$, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($hierarchy$jscomp$2$$) : $cljs$core$deref$$.call(null, $hierarchy$jscomp$2$$)))) {
        throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Multiple methods in multimethod '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$86$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("' match dispatch value: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($dispatch_val$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" -\x3e "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cached_hierarchy$jscomp$1$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" and "), 
        $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$first$$($default_dispatch_val$$)), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(", and neither is preferred")].join(""));
      }
      return $default_dispatch_val$$;
    }
    return $method_table$jscomp$1$$;
  }, null, $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($method_table$jscomp$1$$) : $cljs$core$deref$$.call(null, $method_table$jscomp$1$$)), $best_entry__$1$$ = function() {
    var $name$jscomp$86$$ = ($name$jscomp$86$$ = null == $best_entry$$) ? ($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($method_table$jscomp$1$$) : $cljs$core$deref$$.call(null, $method_table$jscomp$1$$)).call(null, $default_dispatch_val$$) : $name$jscomp$86$$;
    return $cljs$core$truth_$$($name$jscomp$86$$) ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$default_dispatch_val$$, $name$jscomp$86$$], null) : $best_entry$$;
  }();
  if ($cljs$core$truth_$$($best_entry__$1$$)) {
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($cached_hierarchy$jscomp$1$$) : $cljs$core$deref$$.call(null, $cached_hierarchy$jscomp$1$$), $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($hierarchy$jscomp$2$$) : $cljs$core$deref$$.call(null, $hierarchy$jscomp$2$$))) {
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($method_cache$jscomp$1$$, $cljs$core$assoc$$, $dispatch_val$$, $cljs$core$second$$($best_entry__$1$$)), $cljs$core$second$$($best_entry__$1$$);
    }
    $cljs$core$reset_cache$$($method_cache$jscomp$1$$, $method_table$jscomp$1$$, $cached_hierarchy$jscomp$1$$, $hierarchy$jscomp$2$$);
    return $cljs$core$find_and_cache_best_method$$.$cljs$core$IFn$_invoke$arity$8$ ? $cljs$core$find_and_cache_best_method$$.$cljs$core$IFn$_invoke$arity$8$($name$jscomp$86$$, $dispatch_val$$, $hierarchy$jscomp$2$$, $method_table$jscomp$1$$, $prefer_table$jscomp$2$$, $method_cache$jscomp$1$$, $cached_hierarchy$jscomp$1$$, $default_dispatch_val$$) : $cljs$core$find_and_cache_best_method$$.call(null, $name$jscomp$86$$, $dispatch_val$$, $hierarchy$jscomp$2$$, $method_table$jscomp$1$$, $prefer_table$jscomp$2$$, 
    $method_cache$jscomp$1$$, $cached_hierarchy$jscomp$1$$, $default_dispatch_val$$);
  }
  return null;
};
function $cljs$core$throw_no_method_error$$($name$jscomp$87$$, $dispatch_val$jscomp$5$$) {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("No method in multimethod '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$87$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("' for dispatch value: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($dispatch_val$jscomp$5$$)].join(""));
}
function $cljs$core$MultiFn$$($name$jscomp$88$$, $dispatch_fn$$, $default_dispatch_val$jscomp$1$$, $hierarchy$jscomp$3$$, $method_table$jscomp$2$$, $prefer_table$jscomp$3$$, $method_cache$jscomp$2$$, $cached_hierarchy$jscomp$2$$) {
  this.name = $name$jscomp$88$$;
  this.$dispatch_fn$ = $dispatch_fn$$;
  this.$default_dispatch_val$ = $default_dispatch_val$jscomp$1$$;
  this.$hierarchy$ = $hierarchy$jscomp$3$$;
  this.$method_table$ = $method_table$jscomp$2$$;
  this.$prefer_table$ = $prefer_table$jscomp$3$$;
  this.$method_cache$ = $method_cache$jscomp$2$$;
  this.$cached_hierarchy$ = $cached_hierarchy$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 4194305;
  this.$cljs$lang$protocol_mask$partition1$$ = 4352;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$MultiFn$$.prototype;
$JSCompiler_prototypeAlias$$.call = function() {
  function $G__14162__22$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$, $G__14162__3$$, $G__14162__2$$) {
    $G__14162__22$$ = this;
    var $self__$jscomp$1038$$ = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($G__14162__22$$.$dispatch_fn$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $cljs$core$array_seq$$([$G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$, $G__14162__3$$, $G__14162__2$$], 0)), $a$jscomp$203$$ = 
    this.$cljs$core$IMultiFn$_get_method$arity$2$($self__$jscomp$1038$$);
    $cljs$core$truth_$$($a$jscomp$203$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $self__$jscomp$1038$$);
    return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($a$jscomp$203$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $cljs$core$array_seq$$([$G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$, $G__14162__3$$, $G__14162__2$$], 0));
  }
  function $G__14162__21$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$, $G__14162__3$$) {
    $G__14162__22$$ = this;
    var $self__$jscomp$1037$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$20$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$20$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$, $G__14162__3$$) : $G__14162__22$$.$dispatch_fn$.call(null, 
    $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$, $G__14162__3$$), $a$jscomp$202$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($self__$jscomp$1037$$);
    $cljs$core$truth_$$($a$jscomp$202$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $self__$jscomp$1037$$);
    return $a$jscomp$202$$.$cljs$core$IFn$_invoke$arity$20$ ? $a$jscomp$202$$.$cljs$core$IFn$_invoke$arity$20$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$, $G__14162__3$$) : $a$jscomp$202$$.call(null, $G__14162__21$$, $G__14162__20$$, 
    $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$, $G__14162__3$$);
  }
  function $G__14162__20$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$) {
    $G__14162__22$$ = this;
    var $self__$jscomp$1036$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$19$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$19$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$) : $G__14162__22$$.$dispatch_fn$.call(null, 
    $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$), $a$jscomp$201$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($self__$jscomp$1036$$);
    $cljs$core$truth_$$($a$jscomp$201$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $self__$jscomp$1036$$);
    return $a$jscomp$201$$.$cljs$core$IFn$_invoke$arity$19$ ? $a$jscomp$201$$.$cljs$core$IFn$_invoke$arity$19$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$) : $a$jscomp$201$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, 
    $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$, $G__14162$$);
  }
  function $G__14162__19$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$) {
    $G__14162__22$$ = this;
    var $self__$jscomp$1035$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$18$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$18$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$) : $G__14162__22$$.$dispatch_fn$.call(null, 
    $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$), $a$jscomp$200$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($self__$jscomp$1035$$);
    $cljs$core$truth_$$($a$jscomp$200$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $self__$jscomp$1035$$);
    return $a$jscomp$200$$.$cljs$core$IFn$_invoke$arity$18$ ? $a$jscomp$200$$.$cljs$core$IFn$_invoke$arity$18$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$) : $a$jscomp$200$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, 
    $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$, $G__14162__4$$);
  }
  function $G__14162__18$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$) {
    $G__14162__22$$ = this;
    var $self__$jscomp$1034$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$17$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$17$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, 
    $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$), $a$jscomp$199$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($self__$jscomp$1034$$);
    $cljs$core$truth_$$($a$jscomp$199$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $self__$jscomp$1034$$);
    return $a$jscomp$199$$.$cljs$core$IFn$_invoke$arity$17$ ? $a$jscomp$199$$.$cljs$core$IFn$_invoke$arity$17$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$) : $a$jscomp$199$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, 
    $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$, $G__14162__5$$);
  }
  function $G__14162__17$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$) {
    $G__14162__22$$ = this;
    var $self__$jscomp$1033$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$16$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$16$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, 
    $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$), $a$jscomp$198$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($self__$jscomp$1033$$);
    $cljs$core$truth_$$($a$jscomp$198$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $self__$jscomp$1033$$);
    return $a$jscomp$198$$.$cljs$core$IFn$_invoke$arity$16$ ? $a$jscomp$198$$.$cljs$core$IFn$_invoke$arity$16$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$) : $a$jscomp$198$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, 
    $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$, $G__14162__6$$);
  }
  function $G__14162__16$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$) {
    $G__14162__22$$ = this;
    var $G__14162__6$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$15$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$15$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, 
    $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$), $self__$jscomp$1032$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__6$$);
    $cljs$core$truth_$$($self__$jscomp$1032$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__6$$);
    return $self__$jscomp$1032$$.$cljs$core$IFn$_invoke$arity$15$ ? $self__$jscomp$1032$$.$cljs$core$IFn$_invoke$arity$15$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$) : $self__$jscomp$1032$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, 
    $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$, $G__14162__8$$);
  }
  function $G__14162__15$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$) {
    $G__14162__22$$ = this;
    var $G__14162__8$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$14$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$14$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, 
    $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$), $G__14162__6$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__8$$);
    $cljs$core$truth_$$($G__14162__6$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__8$$);
    return $G__14162__6$$.$cljs$core$IFn$_invoke$arity$14$ ? $G__14162__6$$.$cljs$core$IFn$_invoke$arity$14$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$) : $G__14162__6$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, 
    $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$, $G__14162__7$$);
  }
  function $G__14162__14$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$) {
    $G__14162__22$$ = this;
    var $G__14162__7$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$13$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$13$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, 
    $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$), $G__14162__8$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__7$$);
    $cljs$core$truth_$$($G__14162__8$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__7$$);
    return $G__14162__8$$.$cljs$core$IFn$_invoke$arity$13$ ? $G__14162__8$$.$cljs$core$IFn$_invoke$arity$13$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$) : $G__14162__8$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, 
    $G__14162__12$$, $G__14162__11$$, $G__14162__10$$, $G__14162__9$$);
  }
  function $G__14162__13$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$) {
    $G__14162__22$$ = this;
    var $G__14162__9$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$12$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$12$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, 
    $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$), $G__14162__7$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__9$$);
    $cljs$core$truth_$$($G__14162__7$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__9$$);
    return $G__14162__7$$.$cljs$core$IFn$_invoke$arity$12$ ? $G__14162__7$$.$cljs$core$IFn$_invoke$arity$12$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$, $G__14162__10$$) : $G__14162__7$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, 
    $G__14162__11$$, $G__14162__10$$);
  }
  function $G__14162__12$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$) {
    $G__14162__22$$ = this;
    var $G__14162__10$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$11$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$11$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, 
    $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$), $G__14162__9$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__10$$);
    $cljs$core$truth_$$($G__14162__9$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__10$$);
    return $G__14162__9$$.$cljs$core$IFn$_invoke$arity$11$ ? $G__14162__9$$.$cljs$core$IFn$_invoke$arity$11$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$) : $G__14162__9$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$, $G__14162__11$$);
  }
  function $G__14162__11$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$) {
    $G__14162__22$$ = this;
    var $G__14162__11$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$10$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$10$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, 
    $G__14162__13$$, $G__14162__12$$), $G__14162__10$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__11$$);
    $cljs$core$truth_$$($G__14162__10$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__11$$);
    return $G__14162__10$$.$cljs$core$IFn$_invoke$arity$10$ ? $G__14162__10$$.$cljs$core$IFn$_invoke$arity$10$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$) : $G__14162__10$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$, $G__14162__12$$);
  }
  function $G__14162__10$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$) {
    $G__14162__22$$ = this;
    var $G__14162__12$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$9$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$9$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$), 
    $G__14162__11$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__12$$);
    $cljs$core$truth_$$($G__14162__11$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__12$$);
    return $G__14162__11$$.$cljs$core$IFn$_invoke$arity$9$ ? $G__14162__11$$.$cljs$core$IFn$_invoke$arity$9$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$) : $G__14162__11$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$, $G__14162__13$$);
  }
  function $G__14162__9$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$) {
    $G__14162__22$$ = this;
    var $G__14162__13$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$8$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$8$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$), $G__14162__12$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__13$$);
    $cljs$core$truth_$$($G__14162__12$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__13$$);
    return $G__14162__12$$.$cljs$core$IFn$_invoke$arity$8$ ? $G__14162__12$$.$cljs$core$IFn$_invoke$arity$8$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$) : $G__14162__12$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$, $G__14162__14$$);
  }
  function $G__14162__8$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$) {
    $G__14162__22$$ = this;
    var $G__14162__14$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$7$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$7$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$), $G__14162__13$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__14$$);
    $cljs$core$truth_$$($G__14162__13$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__14$$);
    return $G__14162__13$$.$cljs$core$IFn$_invoke$arity$7$ ? $G__14162__13$$.$cljs$core$IFn$_invoke$arity$7$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$) : $G__14162__13$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$, $G__14162__15$$);
  }
  function $G__14162__7$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$) {
    $G__14162__22$$ = this;
    var $G__14162__15$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$6$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$6$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$), $G__14162__14$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__15$$);
    $cljs$core$truth_$$($G__14162__14$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__15$$);
    return $G__14162__14$$.$cljs$core$IFn$_invoke$arity$6$ ? $G__14162__14$$.$cljs$core$IFn$_invoke$arity$6$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$) : $G__14162__14$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$, $G__14162__16$$);
  }
  function $G__14162__6$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$) {
    $G__14162__22$$ = this;
    var $G__14162__16$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$5$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$5$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$), $G__14162__15$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__16$$);
    $cljs$core$truth_$$($G__14162__15$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__16$$);
    return $G__14162__15$$.$cljs$core$IFn$_invoke$arity$5$ ? $G__14162__15$$.$cljs$core$IFn$_invoke$arity$5$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$) : $G__14162__15$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$, $G__14162__17$$);
  }
  function $G__14162__5$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$) {
    $G__14162__22$$ = this;
    var $G__14162__17$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$4$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$4$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$), $G__14162__16$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__17$$);
    $cljs$core$truth_$$($G__14162__16$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__17$$);
    return $G__14162__16$$.$cljs$core$IFn$_invoke$arity$4$ ? $G__14162__16$$.$cljs$core$IFn$_invoke$arity$4$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$) : $G__14162__16$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$, $G__14162__18$$);
  }
  function $G__14162__4$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$) {
    $G__14162__22$$ = this;
    var $G__14162__18$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$3$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$3$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$), $G__14162__17$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__18$$);
    $cljs$core$truth_$$($G__14162__17$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__18$$);
    return $G__14162__17$$.$cljs$core$IFn$_invoke$arity$3$ ? $G__14162__17$$.$cljs$core$IFn$_invoke$arity$3$($G__14162__21$$, $G__14162__20$$, $G__14162__19$$) : $G__14162__17$$.call(null, $G__14162__21$$, $G__14162__20$$, $G__14162__19$$);
  }
  function $G__14162__3$$($G__14162__22$$, $G__14162__21$$, $G__14162__20$$) {
    $G__14162__22$$ = this;
    var $G__14162__19$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$2$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$2$($G__14162__21$$, $G__14162__20$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$, $G__14162__20$$), $G__14162__18$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__19$$);
    $cljs$core$truth_$$($G__14162__18$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__19$$);
    return $G__14162__18$$.$cljs$core$IFn$_invoke$arity$2$ ? $G__14162__18$$.$cljs$core$IFn$_invoke$arity$2$($G__14162__21$$, $G__14162__20$$) : $G__14162__18$$.call(null, $G__14162__21$$, $G__14162__20$$);
  }
  function $G__14162__2$$($G__14162__22$$, $G__14162__21$$) {
    $G__14162__22$$ = this;
    var $G__14162__20$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$1$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$1$($G__14162__21$$) : $G__14162__22$$.$dispatch_fn$.call(null, $G__14162__21$$), $G__14162__19$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__20$$);
    $cljs$core$truth_$$($G__14162__19$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__20$$);
    return $G__14162__19$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__14162__19$$.$cljs$core$IFn$_invoke$arity$1$($G__14162__21$$) : $G__14162__19$$.call(null, $G__14162__21$$);
  }
  function $G__14162__1$$($G__14162__22$$) {
    $G__14162__22$$ = this;
    var $G__14162__21$$ = $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$0$ ? $G__14162__22$$.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$0$() : $G__14162__22$$.$dispatch_fn$.call(null), $G__14162__20$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($G__14162__21$$);
    $cljs$core$truth_$$($G__14162__20$$) || $cljs$core$throw_no_method_error$$($G__14162__22$$.name, $G__14162__21$$);
    return $G__14162__20$$.$cljs$core$IFn$_invoke$arity$0$ ? $G__14162__20$$.$cljs$core$IFn$_invoke$arity$0$() : $G__14162__20$$.call(null);
  }
  var $G__14162$$ = null, $G__14162$$ = function($G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$, $o$jscomp$112$$, $p$jscomp$43$$, $q$jscomp$34$$, $r$jscomp$33$$, $s$jscomp$114$$, $t$jscomp$23$$, $rest$jscomp$13$$) {
    switch(arguments.length) {
      case 1:
        return $G__14162__1$$.call(this, $G__14162$$);
      case 2:
        return $G__14162__2$$.call(this, $G__14162$$, $a$jscomp$204$$);
      case 3:
        return $G__14162__3$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$);
      case 4:
        return $G__14162__4$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$);
      case 5:
        return $G__14162__5$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$);
      case 6:
        return $G__14162__6$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$);
      case 7:
        return $G__14162__7$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$);
      case 8:
        return $G__14162__8$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$);
      case 9:
        return $G__14162__9$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$);
      case 10:
        return $G__14162__10$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$);
      case 11:
        return $G__14162__11$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$);
      case 12:
        return $G__14162__12$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$);
      case 13:
        return $G__14162__13$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$);
      case 14:
        return $G__14162__14$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$);
      case 15:
        return $G__14162__15$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$);
      case 16:
        return $G__14162__16$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$, $o$jscomp$112$$);
      case 17:
        return $G__14162__17$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$, $o$jscomp$112$$, $p$jscomp$43$$);
      case 18:
        return $G__14162__18$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$, $o$jscomp$112$$, $p$jscomp$43$$, $q$jscomp$34$$);
      case 19:
        return $G__14162__19$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$, $o$jscomp$112$$, $p$jscomp$43$$, $q$jscomp$34$$, $r$jscomp$33$$);
      case 20:
        return $G__14162__20$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$, $o$jscomp$112$$, $p$jscomp$43$$, $q$jscomp$34$$, $r$jscomp$33$$, $s$jscomp$114$$);
      case 21:
        return $G__14162__21$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$, $o$jscomp$112$$, $p$jscomp$43$$, $q$jscomp$34$$, $r$jscomp$33$$, $s$jscomp$114$$, $t$jscomp$23$$);
      case 22:
        return $G__14162__22$$.call(this, $G__14162$$, $a$jscomp$204$$, $b$jscomp$176$$, $c$jscomp$153$$, $d$jscomp$120$$, $e$jscomp$135$$, $f$jscomp$301$$, $g$jscomp$97$$, $h$jscomp$105$$, $i$jscomp$250$$, $j$jscomp$91$$, $k$jscomp$266$$, $l$jscomp$77$$, $m$jscomp$82$$, $n$jscomp$153$$, $o$jscomp$112$$, $p$jscomp$43$$, $q$jscomp$34$$, $r$jscomp$33$$, $s$jscomp$114$$, $t$jscomp$23$$, $rest$jscomp$13$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__14162$$.$cljs$core$IFn$_invoke$arity$1$ = $G__14162__1$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$2$ = $G__14162__2$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$3$ = $G__14162__3$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$4$ = $G__14162__4$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$5$ = $G__14162__5$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$6$ = $G__14162__6$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$7$ = $G__14162__7$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$8$ = $G__14162__8$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$9$ = $G__14162__9$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$10$ = $G__14162__10$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$11$ = $G__14162__11$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$12$ = $G__14162__12$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$13$ = $G__14162__13$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$14$ = $G__14162__14$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$15$ = $G__14162__15$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$16$ = $G__14162__16$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$17$ = $G__14162__17$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$18$ = $G__14162__18$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$19$ = $G__14162__19$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$20$ = $G__14162__20$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$21$ = $G__14162__21$$;
  $G__14162$$.$cljs$core$IFn$_invoke$arity$22$ = $G__14162__22$$;
  return $G__14162$$;
}();
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$1040$$, $args14161$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args14161$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  var $dispatch_val$jscomp$28$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$0$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$0$() : this.$dispatch_fn$.call(null), $target_fn$jscomp$22$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$28$$);
  $cljs$core$truth_$$($target_fn$jscomp$22$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$28$$);
  return $target_fn$jscomp$22$$.$cljs$core$IFn$_invoke$arity$0$ ? $target_fn$jscomp$22$$.$cljs$core$IFn$_invoke$arity$0$() : $target_fn$jscomp$22$$.call(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($a$jscomp$205$$) {
  var $dispatch_val$jscomp$29$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$1$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$1$($a$jscomp$205$$) : this.$dispatch_fn$.call(null, $a$jscomp$205$$), $target_fn$jscomp$23$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$29$$);
  $cljs$core$truth_$$($target_fn$jscomp$23$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$29$$);
  return $target_fn$jscomp$23$$.$cljs$core$IFn$_invoke$arity$1$ ? $target_fn$jscomp$23$$.$cljs$core$IFn$_invoke$arity$1$($a$jscomp$205$$) : $target_fn$jscomp$23$$.call(null, $a$jscomp$205$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($a$jscomp$206$$, $b$jscomp$177$$) {
  var $dispatch_val$jscomp$30$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$2$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$2$($a$jscomp$206$$, $b$jscomp$177$$) : this.$dispatch_fn$.call(null, $a$jscomp$206$$, $b$jscomp$177$$), $target_fn$jscomp$24$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$30$$);
  $cljs$core$truth_$$($target_fn$jscomp$24$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$30$$);
  return $target_fn$jscomp$24$$.$cljs$core$IFn$_invoke$arity$2$ ? $target_fn$jscomp$24$$.$cljs$core$IFn$_invoke$arity$2$($a$jscomp$206$$, $b$jscomp$177$$) : $target_fn$jscomp$24$$.call(null, $a$jscomp$206$$, $b$jscomp$177$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$3$ = function($a$jscomp$207$$, $b$jscomp$178$$, $c$jscomp$154$$) {
  var $dispatch_val$jscomp$31$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$3$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$3$($a$jscomp$207$$, $b$jscomp$178$$, $c$jscomp$154$$) : this.$dispatch_fn$.call(null, $a$jscomp$207$$, $b$jscomp$178$$, $c$jscomp$154$$), $target_fn$jscomp$25$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$31$$);
  $cljs$core$truth_$$($target_fn$jscomp$25$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$31$$);
  return $target_fn$jscomp$25$$.$cljs$core$IFn$_invoke$arity$3$ ? $target_fn$jscomp$25$$.$cljs$core$IFn$_invoke$arity$3$($a$jscomp$207$$, $b$jscomp$178$$, $c$jscomp$154$$) : $target_fn$jscomp$25$$.call(null, $a$jscomp$207$$, $b$jscomp$178$$, $c$jscomp$154$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$4$ = function($a$jscomp$208$$, $b$jscomp$179$$, $c$jscomp$155$$, $d$jscomp$121$$) {
  var $dispatch_val$jscomp$32$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$4$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$4$($a$jscomp$208$$, $b$jscomp$179$$, $c$jscomp$155$$, $d$jscomp$121$$) : this.$dispatch_fn$.call(null, $a$jscomp$208$$, $b$jscomp$179$$, $c$jscomp$155$$, $d$jscomp$121$$), $target_fn$jscomp$26$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$32$$);
  $cljs$core$truth_$$($target_fn$jscomp$26$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$32$$);
  return $target_fn$jscomp$26$$.$cljs$core$IFn$_invoke$arity$4$ ? $target_fn$jscomp$26$$.$cljs$core$IFn$_invoke$arity$4$($a$jscomp$208$$, $b$jscomp$179$$, $c$jscomp$155$$, $d$jscomp$121$$) : $target_fn$jscomp$26$$.call(null, $a$jscomp$208$$, $b$jscomp$179$$, $c$jscomp$155$$, $d$jscomp$121$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$5$ = function($a$jscomp$209$$, $b$jscomp$180$$, $c$jscomp$156$$, $d$jscomp$122$$, $e$jscomp$136$$) {
  var $dispatch_val$jscomp$33$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$5$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$5$($a$jscomp$209$$, $b$jscomp$180$$, $c$jscomp$156$$, $d$jscomp$122$$, $e$jscomp$136$$) : this.$dispatch_fn$.call(null, $a$jscomp$209$$, $b$jscomp$180$$, $c$jscomp$156$$, $d$jscomp$122$$, $e$jscomp$136$$), $target_fn$jscomp$27$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$33$$);
  $cljs$core$truth_$$($target_fn$jscomp$27$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$33$$);
  return $target_fn$jscomp$27$$.$cljs$core$IFn$_invoke$arity$5$ ? $target_fn$jscomp$27$$.$cljs$core$IFn$_invoke$arity$5$($a$jscomp$209$$, $b$jscomp$180$$, $c$jscomp$156$$, $d$jscomp$122$$, $e$jscomp$136$$) : $target_fn$jscomp$27$$.call(null, $a$jscomp$209$$, $b$jscomp$180$$, $c$jscomp$156$$, $d$jscomp$122$$, $e$jscomp$136$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$6$ = function($a$jscomp$210$$, $b$jscomp$181$$, $c$jscomp$157$$, $d$jscomp$123$$, $e$jscomp$137$$, $f$jscomp$302$$) {
  var $dispatch_val$jscomp$34$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$6$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$6$($a$jscomp$210$$, $b$jscomp$181$$, $c$jscomp$157$$, $d$jscomp$123$$, $e$jscomp$137$$, $f$jscomp$302$$) : this.$dispatch_fn$.call(null, $a$jscomp$210$$, $b$jscomp$181$$, $c$jscomp$157$$, $d$jscomp$123$$, $e$jscomp$137$$, $f$jscomp$302$$), $target_fn$jscomp$28$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$34$$);
  $cljs$core$truth_$$($target_fn$jscomp$28$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$34$$);
  return $target_fn$jscomp$28$$.$cljs$core$IFn$_invoke$arity$6$ ? $target_fn$jscomp$28$$.$cljs$core$IFn$_invoke$arity$6$($a$jscomp$210$$, $b$jscomp$181$$, $c$jscomp$157$$, $d$jscomp$123$$, $e$jscomp$137$$, $f$jscomp$302$$) : $target_fn$jscomp$28$$.call(null, $a$jscomp$210$$, $b$jscomp$181$$, $c$jscomp$157$$, $d$jscomp$123$$, $e$jscomp$137$$, $f$jscomp$302$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$7$ = function($a$jscomp$211$$, $b$jscomp$182$$, $c$jscomp$158$$, $d$jscomp$124$$, $e$jscomp$138$$, $f$jscomp$303$$, $g$jscomp$98$$) {
  var $dispatch_val$jscomp$35$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$7$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$7$($a$jscomp$211$$, $b$jscomp$182$$, $c$jscomp$158$$, $d$jscomp$124$$, $e$jscomp$138$$, $f$jscomp$303$$, $g$jscomp$98$$) : this.$dispatch_fn$.call(null, $a$jscomp$211$$, $b$jscomp$182$$, $c$jscomp$158$$, $d$jscomp$124$$, $e$jscomp$138$$, $f$jscomp$303$$, $g$jscomp$98$$), $target_fn$jscomp$29$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$35$$);
  $cljs$core$truth_$$($target_fn$jscomp$29$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$35$$);
  return $target_fn$jscomp$29$$.$cljs$core$IFn$_invoke$arity$7$ ? $target_fn$jscomp$29$$.$cljs$core$IFn$_invoke$arity$7$($a$jscomp$211$$, $b$jscomp$182$$, $c$jscomp$158$$, $d$jscomp$124$$, $e$jscomp$138$$, $f$jscomp$303$$, $g$jscomp$98$$) : $target_fn$jscomp$29$$.call(null, $a$jscomp$211$$, $b$jscomp$182$$, $c$jscomp$158$$, $d$jscomp$124$$, $e$jscomp$138$$, $f$jscomp$303$$, $g$jscomp$98$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$8$ = function($a$jscomp$212$$, $b$jscomp$183$$, $c$jscomp$159$$, $d$jscomp$125$$, $e$jscomp$139$$, $f$jscomp$304$$, $g$jscomp$99$$, $h$jscomp$106$$) {
  var $dispatch_val$jscomp$36$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$8$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$8$($a$jscomp$212$$, $b$jscomp$183$$, $c$jscomp$159$$, $d$jscomp$125$$, $e$jscomp$139$$, $f$jscomp$304$$, $g$jscomp$99$$, $h$jscomp$106$$) : this.$dispatch_fn$.call(null, $a$jscomp$212$$, $b$jscomp$183$$, $c$jscomp$159$$, $d$jscomp$125$$, $e$jscomp$139$$, $f$jscomp$304$$, $g$jscomp$99$$, $h$jscomp$106$$), $target_fn$jscomp$30$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$36$$);
  $cljs$core$truth_$$($target_fn$jscomp$30$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$36$$);
  return $target_fn$jscomp$30$$.$cljs$core$IFn$_invoke$arity$8$ ? $target_fn$jscomp$30$$.$cljs$core$IFn$_invoke$arity$8$($a$jscomp$212$$, $b$jscomp$183$$, $c$jscomp$159$$, $d$jscomp$125$$, $e$jscomp$139$$, $f$jscomp$304$$, $g$jscomp$99$$, $h$jscomp$106$$) : $target_fn$jscomp$30$$.call(null, $a$jscomp$212$$, $b$jscomp$183$$, $c$jscomp$159$$, $d$jscomp$125$$, $e$jscomp$139$$, $f$jscomp$304$$, $g$jscomp$99$$, $h$jscomp$106$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$9$ = function($a$jscomp$213$$, $b$jscomp$184$$, $c$jscomp$160$$, $d$jscomp$126$$, $e$jscomp$140$$, $f$jscomp$305$$, $g$jscomp$100$$, $h$jscomp$107$$, $i$jscomp$251$$) {
  var $dispatch_val$jscomp$37$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$9$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$9$($a$jscomp$213$$, $b$jscomp$184$$, $c$jscomp$160$$, $d$jscomp$126$$, $e$jscomp$140$$, $f$jscomp$305$$, $g$jscomp$100$$, $h$jscomp$107$$, $i$jscomp$251$$) : this.$dispatch_fn$.call(null, $a$jscomp$213$$, $b$jscomp$184$$, $c$jscomp$160$$, $d$jscomp$126$$, $e$jscomp$140$$, $f$jscomp$305$$, $g$jscomp$100$$, $h$jscomp$107$$, $i$jscomp$251$$), $target_fn$jscomp$31$$ = 
  this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$37$$);
  $cljs$core$truth_$$($target_fn$jscomp$31$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$37$$);
  return $target_fn$jscomp$31$$.$cljs$core$IFn$_invoke$arity$9$ ? $target_fn$jscomp$31$$.$cljs$core$IFn$_invoke$arity$9$($a$jscomp$213$$, $b$jscomp$184$$, $c$jscomp$160$$, $d$jscomp$126$$, $e$jscomp$140$$, $f$jscomp$305$$, $g$jscomp$100$$, $h$jscomp$107$$, $i$jscomp$251$$) : $target_fn$jscomp$31$$.call(null, $a$jscomp$213$$, $b$jscomp$184$$, $c$jscomp$160$$, $d$jscomp$126$$, $e$jscomp$140$$, $f$jscomp$305$$, $g$jscomp$100$$, $h$jscomp$107$$, $i$jscomp$251$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$10$ = function($a$jscomp$214$$, $b$jscomp$185$$, $c$jscomp$161$$, $d$jscomp$127$$, $e$jscomp$141$$, $f$jscomp$306$$, $g$jscomp$101$$, $h$jscomp$108$$, $i$jscomp$252$$, $j$jscomp$92$$) {
  var $dispatch_val$jscomp$38$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$10$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$10$($a$jscomp$214$$, $b$jscomp$185$$, $c$jscomp$161$$, $d$jscomp$127$$, $e$jscomp$141$$, $f$jscomp$306$$, $g$jscomp$101$$, $h$jscomp$108$$, $i$jscomp$252$$, $j$jscomp$92$$) : this.$dispatch_fn$.call(null, $a$jscomp$214$$, $b$jscomp$185$$, $c$jscomp$161$$, $d$jscomp$127$$, $e$jscomp$141$$, $f$jscomp$306$$, $g$jscomp$101$$, $h$jscomp$108$$, $i$jscomp$252$$, $j$jscomp$92$$), 
  $target_fn$jscomp$32$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$38$$);
  $cljs$core$truth_$$($target_fn$jscomp$32$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$38$$);
  return $target_fn$jscomp$32$$.$cljs$core$IFn$_invoke$arity$10$ ? $target_fn$jscomp$32$$.$cljs$core$IFn$_invoke$arity$10$($a$jscomp$214$$, $b$jscomp$185$$, $c$jscomp$161$$, $d$jscomp$127$$, $e$jscomp$141$$, $f$jscomp$306$$, $g$jscomp$101$$, $h$jscomp$108$$, $i$jscomp$252$$, $j$jscomp$92$$) : $target_fn$jscomp$32$$.call(null, $a$jscomp$214$$, $b$jscomp$185$$, $c$jscomp$161$$, $d$jscomp$127$$, $e$jscomp$141$$, $f$jscomp$306$$, $g$jscomp$101$$, $h$jscomp$108$$, $i$jscomp$252$$, $j$jscomp$92$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$11$ = function($a$jscomp$215$$, $b$jscomp$186$$, $c$jscomp$162$$, $d$jscomp$128$$, $e$jscomp$142$$, $f$jscomp$307$$, $g$jscomp$102$$, $h$jscomp$109$$, $i$jscomp$253$$, $j$jscomp$93$$, $k$jscomp$267$$) {
  var $dispatch_val$jscomp$39$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$11$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$11$($a$jscomp$215$$, $b$jscomp$186$$, $c$jscomp$162$$, $d$jscomp$128$$, $e$jscomp$142$$, $f$jscomp$307$$, $g$jscomp$102$$, $h$jscomp$109$$, $i$jscomp$253$$, $j$jscomp$93$$, $k$jscomp$267$$) : this.$dispatch_fn$.call(null, $a$jscomp$215$$, $b$jscomp$186$$, $c$jscomp$162$$, $d$jscomp$128$$, $e$jscomp$142$$, $f$jscomp$307$$, $g$jscomp$102$$, $h$jscomp$109$$, $i$jscomp$253$$, 
  $j$jscomp$93$$, $k$jscomp$267$$), $target_fn$jscomp$33$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$39$$);
  $cljs$core$truth_$$($target_fn$jscomp$33$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$39$$);
  return $target_fn$jscomp$33$$.$cljs$core$IFn$_invoke$arity$11$ ? $target_fn$jscomp$33$$.$cljs$core$IFn$_invoke$arity$11$($a$jscomp$215$$, $b$jscomp$186$$, $c$jscomp$162$$, $d$jscomp$128$$, $e$jscomp$142$$, $f$jscomp$307$$, $g$jscomp$102$$, $h$jscomp$109$$, $i$jscomp$253$$, $j$jscomp$93$$, $k$jscomp$267$$) : $target_fn$jscomp$33$$.call(null, $a$jscomp$215$$, $b$jscomp$186$$, $c$jscomp$162$$, $d$jscomp$128$$, $e$jscomp$142$$, $f$jscomp$307$$, $g$jscomp$102$$, $h$jscomp$109$$, $i$jscomp$253$$, $j$jscomp$93$$, 
  $k$jscomp$267$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$12$ = function($a$jscomp$216$$, $b$jscomp$187$$, $c$jscomp$163$$, $d$jscomp$129$$, $e$jscomp$143$$, $f$jscomp$308$$, $g$jscomp$103$$, $h$jscomp$110$$, $i$jscomp$254$$, $j$jscomp$94$$, $k$jscomp$268$$, $l$jscomp$78$$) {
  var $dispatch_val$jscomp$40$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$12$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$12$($a$jscomp$216$$, $b$jscomp$187$$, $c$jscomp$163$$, $d$jscomp$129$$, $e$jscomp$143$$, $f$jscomp$308$$, $g$jscomp$103$$, $h$jscomp$110$$, $i$jscomp$254$$, $j$jscomp$94$$, $k$jscomp$268$$, $l$jscomp$78$$) : this.$dispatch_fn$.call(null, $a$jscomp$216$$, $b$jscomp$187$$, $c$jscomp$163$$, $d$jscomp$129$$, $e$jscomp$143$$, $f$jscomp$308$$, $g$jscomp$103$$, $h$jscomp$110$$, 
  $i$jscomp$254$$, $j$jscomp$94$$, $k$jscomp$268$$, $l$jscomp$78$$), $target_fn$jscomp$34$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$40$$);
  $cljs$core$truth_$$($target_fn$jscomp$34$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$40$$);
  return $target_fn$jscomp$34$$.$cljs$core$IFn$_invoke$arity$12$ ? $target_fn$jscomp$34$$.$cljs$core$IFn$_invoke$arity$12$($a$jscomp$216$$, $b$jscomp$187$$, $c$jscomp$163$$, $d$jscomp$129$$, $e$jscomp$143$$, $f$jscomp$308$$, $g$jscomp$103$$, $h$jscomp$110$$, $i$jscomp$254$$, $j$jscomp$94$$, $k$jscomp$268$$, $l$jscomp$78$$) : $target_fn$jscomp$34$$.call(null, $a$jscomp$216$$, $b$jscomp$187$$, $c$jscomp$163$$, $d$jscomp$129$$, $e$jscomp$143$$, $f$jscomp$308$$, $g$jscomp$103$$, $h$jscomp$110$$, $i$jscomp$254$$, 
  $j$jscomp$94$$, $k$jscomp$268$$, $l$jscomp$78$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$13$ = function($a$jscomp$217$$, $b$jscomp$188$$, $c$jscomp$164$$, $d$jscomp$130$$, $e$jscomp$144$$, $f$jscomp$309$$, $g$jscomp$104$$, $h$jscomp$111$$, $i$jscomp$255$$, $j$jscomp$95$$, $k$jscomp$269$$, $l$jscomp$79$$, $m$jscomp$83$$) {
  var $dispatch_val$jscomp$41$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$13$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$13$($a$jscomp$217$$, $b$jscomp$188$$, $c$jscomp$164$$, $d$jscomp$130$$, $e$jscomp$144$$, $f$jscomp$309$$, $g$jscomp$104$$, $h$jscomp$111$$, $i$jscomp$255$$, $j$jscomp$95$$, $k$jscomp$269$$, $l$jscomp$79$$, $m$jscomp$83$$) : this.$dispatch_fn$.call(null, $a$jscomp$217$$, $b$jscomp$188$$, $c$jscomp$164$$, $d$jscomp$130$$, $e$jscomp$144$$, $f$jscomp$309$$, $g$jscomp$104$$, 
  $h$jscomp$111$$, $i$jscomp$255$$, $j$jscomp$95$$, $k$jscomp$269$$, $l$jscomp$79$$, $m$jscomp$83$$), $target_fn$jscomp$35$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$41$$);
  $cljs$core$truth_$$($target_fn$jscomp$35$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$41$$);
  return $target_fn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$13$ ? $target_fn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$13$($a$jscomp$217$$, $b$jscomp$188$$, $c$jscomp$164$$, $d$jscomp$130$$, $e$jscomp$144$$, $f$jscomp$309$$, $g$jscomp$104$$, $h$jscomp$111$$, $i$jscomp$255$$, $j$jscomp$95$$, $k$jscomp$269$$, $l$jscomp$79$$, $m$jscomp$83$$) : $target_fn$jscomp$35$$.call(null, $a$jscomp$217$$, $b$jscomp$188$$, $c$jscomp$164$$, $d$jscomp$130$$, $e$jscomp$144$$, $f$jscomp$309$$, $g$jscomp$104$$, $h$jscomp$111$$, 
  $i$jscomp$255$$, $j$jscomp$95$$, $k$jscomp$269$$, $l$jscomp$79$$, $m$jscomp$83$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$14$ = function($a$jscomp$218$$, $b$jscomp$189$$, $c$jscomp$165$$, $d$jscomp$131$$, $e$jscomp$145$$, $f$jscomp$310$$, $g$jscomp$105$$, $h$jscomp$112$$, $i$jscomp$256$$, $j$jscomp$96$$, $k$jscomp$270$$, $l$jscomp$80$$, $m$jscomp$84$$, $n$jscomp$154$$) {
  var $dispatch_val$jscomp$42$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$14$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$14$($a$jscomp$218$$, $b$jscomp$189$$, $c$jscomp$165$$, $d$jscomp$131$$, $e$jscomp$145$$, $f$jscomp$310$$, $g$jscomp$105$$, $h$jscomp$112$$, $i$jscomp$256$$, $j$jscomp$96$$, $k$jscomp$270$$, $l$jscomp$80$$, $m$jscomp$84$$, $n$jscomp$154$$) : this.$dispatch_fn$.call(null, $a$jscomp$218$$, $b$jscomp$189$$, $c$jscomp$165$$, $d$jscomp$131$$, $e$jscomp$145$$, $f$jscomp$310$$, 
  $g$jscomp$105$$, $h$jscomp$112$$, $i$jscomp$256$$, $j$jscomp$96$$, $k$jscomp$270$$, $l$jscomp$80$$, $m$jscomp$84$$, $n$jscomp$154$$), $target_fn$jscomp$36$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$42$$);
  $cljs$core$truth_$$($target_fn$jscomp$36$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$42$$);
  return $target_fn$jscomp$36$$.$cljs$core$IFn$_invoke$arity$14$ ? $target_fn$jscomp$36$$.$cljs$core$IFn$_invoke$arity$14$($a$jscomp$218$$, $b$jscomp$189$$, $c$jscomp$165$$, $d$jscomp$131$$, $e$jscomp$145$$, $f$jscomp$310$$, $g$jscomp$105$$, $h$jscomp$112$$, $i$jscomp$256$$, $j$jscomp$96$$, $k$jscomp$270$$, $l$jscomp$80$$, $m$jscomp$84$$, $n$jscomp$154$$) : $target_fn$jscomp$36$$.call(null, $a$jscomp$218$$, $b$jscomp$189$$, $c$jscomp$165$$, $d$jscomp$131$$, $e$jscomp$145$$, $f$jscomp$310$$, $g$jscomp$105$$, 
  $h$jscomp$112$$, $i$jscomp$256$$, $j$jscomp$96$$, $k$jscomp$270$$, $l$jscomp$80$$, $m$jscomp$84$$, $n$jscomp$154$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$15$ = function($a$jscomp$219$$, $b$jscomp$190$$, $c$jscomp$166$$, $d$jscomp$132$$, $e$jscomp$146$$, $f$jscomp$311$$, $g$jscomp$106$$, $h$jscomp$113$$, $i$jscomp$257$$, $j$jscomp$97$$, $k$jscomp$271$$, $l$jscomp$81$$, $m$jscomp$85$$, $n$jscomp$155$$, $o$jscomp$113$$) {
  var $dispatch_val$jscomp$43$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$15$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$15$($a$jscomp$219$$, $b$jscomp$190$$, $c$jscomp$166$$, $d$jscomp$132$$, $e$jscomp$146$$, $f$jscomp$311$$, $g$jscomp$106$$, $h$jscomp$113$$, $i$jscomp$257$$, $j$jscomp$97$$, $k$jscomp$271$$, $l$jscomp$81$$, $m$jscomp$85$$, $n$jscomp$155$$, $o$jscomp$113$$) : this.$dispatch_fn$.call(null, $a$jscomp$219$$, $b$jscomp$190$$, $c$jscomp$166$$, $d$jscomp$132$$, $e$jscomp$146$$, 
  $f$jscomp$311$$, $g$jscomp$106$$, $h$jscomp$113$$, $i$jscomp$257$$, $j$jscomp$97$$, $k$jscomp$271$$, $l$jscomp$81$$, $m$jscomp$85$$, $n$jscomp$155$$, $o$jscomp$113$$), $target_fn$jscomp$37$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$43$$);
  $cljs$core$truth_$$($target_fn$jscomp$37$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$43$$);
  return $target_fn$jscomp$37$$.$cljs$core$IFn$_invoke$arity$15$ ? $target_fn$jscomp$37$$.$cljs$core$IFn$_invoke$arity$15$($a$jscomp$219$$, $b$jscomp$190$$, $c$jscomp$166$$, $d$jscomp$132$$, $e$jscomp$146$$, $f$jscomp$311$$, $g$jscomp$106$$, $h$jscomp$113$$, $i$jscomp$257$$, $j$jscomp$97$$, $k$jscomp$271$$, $l$jscomp$81$$, $m$jscomp$85$$, $n$jscomp$155$$, $o$jscomp$113$$) : $target_fn$jscomp$37$$.call(null, $a$jscomp$219$$, $b$jscomp$190$$, $c$jscomp$166$$, $d$jscomp$132$$, $e$jscomp$146$$, $f$jscomp$311$$, 
  $g$jscomp$106$$, $h$jscomp$113$$, $i$jscomp$257$$, $j$jscomp$97$$, $k$jscomp$271$$, $l$jscomp$81$$, $m$jscomp$85$$, $n$jscomp$155$$, $o$jscomp$113$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$16$ = function($a$jscomp$220$$, $b$jscomp$191$$, $c$jscomp$167$$, $d$jscomp$133$$, $e$jscomp$147$$, $f$jscomp$312$$, $g$jscomp$107$$, $h$jscomp$114$$, $i$jscomp$258$$, $j$jscomp$98$$, $k$jscomp$272$$, $l$jscomp$82$$, $m$jscomp$86$$, $n$jscomp$156$$, $o$jscomp$114$$, $p$jscomp$44$$) {
  var $dispatch_val$jscomp$44$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$16$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$16$($a$jscomp$220$$, $b$jscomp$191$$, $c$jscomp$167$$, $d$jscomp$133$$, $e$jscomp$147$$, $f$jscomp$312$$, $g$jscomp$107$$, $h$jscomp$114$$, $i$jscomp$258$$, $j$jscomp$98$$, $k$jscomp$272$$, $l$jscomp$82$$, $m$jscomp$86$$, $n$jscomp$156$$, $o$jscomp$114$$, $p$jscomp$44$$) : this.$dispatch_fn$.call(null, $a$jscomp$220$$, $b$jscomp$191$$, $c$jscomp$167$$, $d$jscomp$133$$, 
  $e$jscomp$147$$, $f$jscomp$312$$, $g$jscomp$107$$, $h$jscomp$114$$, $i$jscomp$258$$, $j$jscomp$98$$, $k$jscomp$272$$, $l$jscomp$82$$, $m$jscomp$86$$, $n$jscomp$156$$, $o$jscomp$114$$, $p$jscomp$44$$), $target_fn$jscomp$38$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$44$$);
  $cljs$core$truth_$$($target_fn$jscomp$38$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$44$$);
  return $target_fn$jscomp$38$$.$cljs$core$IFn$_invoke$arity$16$ ? $target_fn$jscomp$38$$.$cljs$core$IFn$_invoke$arity$16$($a$jscomp$220$$, $b$jscomp$191$$, $c$jscomp$167$$, $d$jscomp$133$$, $e$jscomp$147$$, $f$jscomp$312$$, $g$jscomp$107$$, $h$jscomp$114$$, $i$jscomp$258$$, $j$jscomp$98$$, $k$jscomp$272$$, $l$jscomp$82$$, $m$jscomp$86$$, $n$jscomp$156$$, $o$jscomp$114$$, $p$jscomp$44$$) : $target_fn$jscomp$38$$.call(null, $a$jscomp$220$$, $b$jscomp$191$$, $c$jscomp$167$$, $d$jscomp$133$$, $e$jscomp$147$$, 
  $f$jscomp$312$$, $g$jscomp$107$$, $h$jscomp$114$$, $i$jscomp$258$$, $j$jscomp$98$$, $k$jscomp$272$$, $l$jscomp$82$$, $m$jscomp$86$$, $n$jscomp$156$$, $o$jscomp$114$$, $p$jscomp$44$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$17$ = function($a$jscomp$221$$, $b$jscomp$192$$, $c$jscomp$168$$, $d$jscomp$134$$, $e$jscomp$148$$, $f$jscomp$313$$, $g$jscomp$108$$, $h$jscomp$115$$, $i$jscomp$259$$, $j$jscomp$99$$, $k$jscomp$273$$, $l$jscomp$83$$, $m$jscomp$87$$, $n$jscomp$157$$, $o$jscomp$115$$, $p$jscomp$45$$, $q$jscomp$35$$) {
  var $dispatch_val$jscomp$45$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$17$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$17$($a$jscomp$221$$, $b$jscomp$192$$, $c$jscomp$168$$, $d$jscomp$134$$, $e$jscomp$148$$, $f$jscomp$313$$, $g$jscomp$108$$, $h$jscomp$115$$, $i$jscomp$259$$, $j$jscomp$99$$, $k$jscomp$273$$, $l$jscomp$83$$, $m$jscomp$87$$, $n$jscomp$157$$, $o$jscomp$115$$, $p$jscomp$45$$, $q$jscomp$35$$) : this.$dispatch_fn$.call(null, $a$jscomp$221$$, $b$jscomp$192$$, $c$jscomp$168$$, 
  $d$jscomp$134$$, $e$jscomp$148$$, $f$jscomp$313$$, $g$jscomp$108$$, $h$jscomp$115$$, $i$jscomp$259$$, $j$jscomp$99$$, $k$jscomp$273$$, $l$jscomp$83$$, $m$jscomp$87$$, $n$jscomp$157$$, $o$jscomp$115$$, $p$jscomp$45$$, $q$jscomp$35$$), $target_fn$jscomp$39$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$45$$);
  $cljs$core$truth_$$($target_fn$jscomp$39$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$45$$);
  return $target_fn$jscomp$39$$.$cljs$core$IFn$_invoke$arity$17$ ? $target_fn$jscomp$39$$.$cljs$core$IFn$_invoke$arity$17$($a$jscomp$221$$, $b$jscomp$192$$, $c$jscomp$168$$, $d$jscomp$134$$, $e$jscomp$148$$, $f$jscomp$313$$, $g$jscomp$108$$, $h$jscomp$115$$, $i$jscomp$259$$, $j$jscomp$99$$, $k$jscomp$273$$, $l$jscomp$83$$, $m$jscomp$87$$, $n$jscomp$157$$, $o$jscomp$115$$, $p$jscomp$45$$, $q$jscomp$35$$) : $target_fn$jscomp$39$$.call(null, $a$jscomp$221$$, $b$jscomp$192$$, $c$jscomp$168$$, $d$jscomp$134$$, 
  $e$jscomp$148$$, $f$jscomp$313$$, $g$jscomp$108$$, $h$jscomp$115$$, $i$jscomp$259$$, $j$jscomp$99$$, $k$jscomp$273$$, $l$jscomp$83$$, $m$jscomp$87$$, $n$jscomp$157$$, $o$jscomp$115$$, $p$jscomp$45$$, $q$jscomp$35$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$18$ = function($a$jscomp$222$$, $b$jscomp$193$$, $c$jscomp$169$$, $d$jscomp$135$$, $e$jscomp$149$$, $f$jscomp$314$$, $g$jscomp$109$$, $h$jscomp$116$$, $i$jscomp$260$$, $j$jscomp$100$$, $k$jscomp$274$$, $l$jscomp$84$$, $m$jscomp$88$$, $n$jscomp$158$$, $o$jscomp$116$$, $p$jscomp$46$$, $q$jscomp$36$$, $r$jscomp$34$$) {
  var $dispatch_val$jscomp$46$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$18$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$18$($a$jscomp$222$$, $b$jscomp$193$$, $c$jscomp$169$$, $d$jscomp$135$$, $e$jscomp$149$$, $f$jscomp$314$$, $g$jscomp$109$$, $h$jscomp$116$$, $i$jscomp$260$$, $j$jscomp$100$$, $k$jscomp$274$$, $l$jscomp$84$$, $m$jscomp$88$$, $n$jscomp$158$$, $o$jscomp$116$$, $p$jscomp$46$$, $q$jscomp$36$$, $r$jscomp$34$$) : this.$dispatch_fn$.call(null, $a$jscomp$222$$, $b$jscomp$193$$, 
  $c$jscomp$169$$, $d$jscomp$135$$, $e$jscomp$149$$, $f$jscomp$314$$, $g$jscomp$109$$, $h$jscomp$116$$, $i$jscomp$260$$, $j$jscomp$100$$, $k$jscomp$274$$, $l$jscomp$84$$, $m$jscomp$88$$, $n$jscomp$158$$, $o$jscomp$116$$, $p$jscomp$46$$, $q$jscomp$36$$, $r$jscomp$34$$), $target_fn$jscomp$40$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$46$$);
  $cljs$core$truth_$$($target_fn$jscomp$40$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$46$$);
  return $target_fn$jscomp$40$$.$cljs$core$IFn$_invoke$arity$18$ ? $target_fn$jscomp$40$$.$cljs$core$IFn$_invoke$arity$18$($a$jscomp$222$$, $b$jscomp$193$$, $c$jscomp$169$$, $d$jscomp$135$$, $e$jscomp$149$$, $f$jscomp$314$$, $g$jscomp$109$$, $h$jscomp$116$$, $i$jscomp$260$$, $j$jscomp$100$$, $k$jscomp$274$$, $l$jscomp$84$$, $m$jscomp$88$$, $n$jscomp$158$$, $o$jscomp$116$$, $p$jscomp$46$$, $q$jscomp$36$$, $r$jscomp$34$$) : $target_fn$jscomp$40$$.call(null, $a$jscomp$222$$, $b$jscomp$193$$, $c$jscomp$169$$, 
  $d$jscomp$135$$, $e$jscomp$149$$, $f$jscomp$314$$, $g$jscomp$109$$, $h$jscomp$116$$, $i$jscomp$260$$, $j$jscomp$100$$, $k$jscomp$274$$, $l$jscomp$84$$, $m$jscomp$88$$, $n$jscomp$158$$, $o$jscomp$116$$, $p$jscomp$46$$, $q$jscomp$36$$, $r$jscomp$34$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$19$ = function($a$jscomp$223$$, $b$jscomp$194$$, $c$jscomp$170$$, $d$jscomp$136$$, $e$jscomp$150$$, $f$jscomp$315$$, $g$jscomp$110$$, $h$jscomp$117$$, $i$jscomp$261$$, $j$jscomp$101$$, $k$jscomp$275$$, $l$jscomp$85$$, $m$jscomp$89$$, $n$jscomp$159$$, $o$jscomp$117$$, $p$jscomp$47$$, $q$jscomp$37$$, $r$jscomp$35$$, $s$jscomp$115$$) {
  var $dispatch_val$jscomp$47$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$19$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$19$($a$jscomp$223$$, $b$jscomp$194$$, $c$jscomp$170$$, $d$jscomp$136$$, $e$jscomp$150$$, $f$jscomp$315$$, $g$jscomp$110$$, $h$jscomp$117$$, $i$jscomp$261$$, $j$jscomp$101$$, $k$jscomp$275$$, $l$jscomp$85$$, $m$jscomp$89$$, $n$jscomp$159$$, $o$jscomp$117$$, $p$jscomp$47$$, $q$jscomp$37$$, $r$jscomp$35$$, $s$jscomp$115$$) : this.$dispatch_fn$.call(null, $a$jscomp$223$$, 
  $b$jscomp$194$$, $c$jscomp$170$$, $d$jscomp$136$$, $e$jscomp$150$$, $f$jscomp$315$$, $g$jscomp$110$$, $h$jscomp$117$$, $i$jscomp$261$$, $j$jscomp$101$$, $k$jscomp$275$$, $l$jscomp$85$$, $m$jscomp$89$$, $n$jscomp$159$$, $o$jscomp$117$$, $p$jscomp$47$$, $q$jscomp$37$$, $r$jscomp$35$$, $s$jscomp$115$$), $target_fn$jscomp$41$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$47$$);
  $cljs$core$truth_$$($target_fn$jscomp$41$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$47$$);
  return $target_fn$jscomp$41$$.$cljs$core$IFn$_invoke$arity$19$ ? $target_fn$jscomp$41$$.$cljs$core$IFn$_invoke$arity$19$($a$jscomp$223$$, $b$jscomp$194$$, $c$jscomp$170$$, $d$jscomp$136$$, $e$jscomp$150$$, $f$jscomp$315$$, $g$jscomp$110$$, $h$jscomp$117$$, $i$jscomp$261$$, $j$jscomp$101$$, $k$jscomp$275$$, $l$jscomp$85$$, $m$jscomp$89$$, $n$jscomp$159$$, $o$jscomp$117$$, $p$jscomp$47$$, $q$jscomp$37$$, $r$jscomp$35$$, $s$jscomp$115$$) : $target_fn$jscomp$41$$.call(null, $a$jscomp$223$$, $b$jscomp$194$$, 
  $c$jscomp$170$$, $d$jscomp$136$$, $e$jscomp$150$$, $f$jscomp$315$$, $g$jscomp$110$$, $h$jscomp$117$$, $i$jscomp$261$$, $j$jscomp$101$$, $k$jscomp$275$$, $l$jscomp$85$$, $m$jscomp$89$$, $n$jscomp$159$$, $o$jscomp$117$$, $p$jscomp$47$$, $q$jscomp$37$$, $r$jscomp$35$$, $s$jscomp$115$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$20$ = function($a$jscomp$224$$, $b$jscomp$195$$, $c$jscomp$171$$, $d$jscomp$137$$, $e$jscomp$151$$, $f$jscomp$316$$, $g$jscomp$111$$, $h$jscomp$118$$, $i$jscomp$262$$, $j$jscomp$102$$, $k$jscomp$276$$, $l$jscomp$86$$, $m$jscomp$90$$, $n$jscomp$160$$, $o$jscomp$118$$, $p$jscomp$48$$, $q$jscomp$38$$, $r$jscomp$36$$, $s$jscomp$116$$, $t$jscomp$24$$) {
  var $dispatch_val$jscomp$48$$ = this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$20$ ? this.$dispatch_fn$.$cljs$core$IFn$_invoke$arity$20$($a$jscomp$224$$, $b$jscomp$195$$, $c$jscomp$171$$, $d$jscomp$137$$, $e$jscomp$151$$, $f$jscomp$316$$, $g$jscomp$111$$, $h$jscomp$118$$, $i$jscomp$262$$, $j$jscomp$102$$, $k$jscomp$276$$, $l$jscomp$86$$, $m$jscomp$90$$, $n$jscomp$160$$, $o$jscomp$118$$, $p$jscomp$48$$, $q$jscomp$38$$, $r$jscomp$36$$, $s$jscomp$116$$, $t$jscomp$24$$) : this.$dispatch_fn$.call(null, 
  $a$jscomp$224$$, $b$jscomp$195$$, $c$jscomp$171$$, $d$jscomp$137$$, $e$jscomp$151$$, $f$jscomp$316$$, $g$jscomp$111$$, $h$jscomp$118$$, $i$jscomp$262$$, $j$jscomp$102$$, $k$jscomp$276$$, $l$jscomp$86$$, $m$jscomp$90$$, $n$jscomp$160$$, $o$jscomp$118$$, $p$jscomp$48$$, $q$jscomp$38$$, $r$jscomp$36$$, $s$jscomp$116$$, $t$jscomp$24$$), $target_fn$jscomp$42$$ = this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$48$$);
  $cljs$core$truth_$$($target_fn$jscomp$42$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$48$$);
  return $target_fn$jscomp$42$$.$cljs$core$IFn$_invoke$arity$20$ ? $target_fn$jscomp$42$$.$cljs$core$IFn$_invoke$arity$20$($a$jscomp$224$$, $b$jscomp$195$$, $c$jscomp$171$$, $d$jscomp$137$$, $e$jscomp$151$$, $f$jscomp$316$$, $g$jscomp$111$$, $h$jscomp$118$$, $i$jscomp$262$$, $j$jscomp$102$$, $k$jscomp$276$$, $l$jscomp$86$$, $m$jscomp$90$$, $n$jscomp$160$$, $o$jscomp$118$$, $p$jscomp$48$$, $q$jscomp$38$$, $r$jscomp$36$$, $s$jscomp$116$$, $t$jscomp$24$$) : $target_fn$jscomp$42$$.call(null, $a$jscomp$224$$, 
  $b$jscomp$195$$, $c$jscomp$171$$, $d$jscomp$137$$, $e$jscomp$151$$, $f$jscomp$316$$, $g$jscomp$111$$, $h$jscomp$118$$, $i$jscomp$262$$, $j$jscomp$102$$, $k$jscomp$276$$, $l$jscomp$86$$, $m$jscomp$90$$, $n$jscomp$160$$, $o$jscomp$118$$, $p$jscomp$48$$, $q$jscomp$38$$, $r$jscomp$36$$, $s$jscomp$116$$, $t$jscomp$24$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$21$ = function($a$jscomp$225$$, $b$jscomp$196$$, $c$jscomp$172$$, $d$jscomp$138$$, $e$jscomp$152$$, $f$jscomp$317$$, $g$jscomp$112$$, $h$jscomp$119$$, $i$jscomp$263$$, $j$jscomp$103$$, $k$jscomp$277$$, $l$jscomp$87$$, $m$jscomp$91$$, $n$jscomp$161$$, $o$jscomp$119$$, $p$jscomp$49$$, $q$jscomp$39$$, $r$jscomp$37$$, $s$jscomp$117$$, $t$jscomp$25$$, $rest$jscomp$14$$) {
  var $dispatch_val$jscomp$49$$ = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(this.$dispatch_fn$, $a$jscomp$225$$, $b$jscomp$196$$, $c$jscomp$172$$, $d$jscomp$138$$, $cljs$core$array_seq$$([$e$jscomp$152$$, $f$jscomp$317$$, $g$jscomp$112$$, $h$jscomp$119$$, $i$jscomp$263$$, $j$jscomp$103$$, $k$jscomp$277$$, $l$jscomp$87$$, $m$jscomp$91$$, $n$jscomp$161$$, $o$jscomp$119$$, $p$jscomp$49$$, $q$jscomp$39$$, $r$jscomp$37$$, $s$jscomp$117$$, $t$jscomp$25$$, $rest$jscomp$14$$], 0)), $target_fn$jscomp$43$$ = 
  this.$cljs$core$IMultiFn$_get_method$arity$2$($dispatch_val$jscomp$49$$);
  $cljs$core$truth_$$($target_fn$jscomp$43$$) || $cljs$core$throw_no_method_error$$(this.name, $dispatch_val$jscomp$49$$);
  return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($target_fn$jscomp$43$$, $a$jscomp$225$$, $b$jscomp$196$$, $c$jscomp$172$$, $d$jscomp$138$$, $cljs$core$array_seq$$([$e$jscomp$152$$, $f$jscomp$317$$, $g$jscomp$112$$, $h$jscomp$119$$, $i$jscomp$263$$, $j$jscomp$103$$, $k$jscomp$277$$, $l$jscomp$87$$, $m$jscomp$91$$, $n$jscomp$161$$, $o$jscomp$119$$, $p$jscomp$49$$, $q$jscomp$39$$, $r$jscomp$37$$, $s$jscomp$117$$, $t$jscomp$25$$, $rest$jscomp$14$$], 0));
};
function $JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$$($dispatch_val$jscomp$51$$, $method$jscomp$2$$) {
  var $JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$self$$ = $oops$messages$runtime_message$$;
  $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$self$$.$method_table$, $cljs$core$assoc$$, $dispatch_val$jscomp$51$$, $method$jscomp$2$$);
  $cljs$core$reset_cache$$($JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$self$$.$method_cache$, $JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$self$$.$method_table$, $JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$self$$.$cached_hierarchy$, $JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$self$$.$hierarchy$);
}
$JSCompiler_prototypeAlias$$.$cljs$core$IMultiFn$_get_method$arity$2$ = function($dispatch_val$jscomp$52$$) {
  $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$(this.$cached_hierarchy$) : $cljs$core$deref$$.call(null, this.$cached_hierarchy$), $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$(this.$hierarchy$) : $cljs$core$deref$$.call(null, this.$hierarchy$)) || $cljs$core$reset_cache$$(this.$method_cache$, this.$method_table$, this.$cached_hierarchy$, 
  this.$hierarchy$);
  var $temp__5276__auto__$jscomp$15$$ = ($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$(this.$method_cache$) : $cljs$core$deref$$.call(null, this.$method_cache$)).call(null, $dispatch_val$jscomp$52$$);
  return $cljs$core$truth_$$($temp__5276__auto__$jscomp$15$$) ? $temp__5276__auto__$jscomp$15$$ : $cljs$core$find_and_cache_best_method$$(this.name, $dispatch_val$jscomp$52$$, this.$hierarchy$, this.$method_table$, this.$prefer_table$, this.$method_cache$, this.$cached_hierarchy$, this.$default_dispatch_val$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$INamed$_name$arity$1$ = function() {
  return $cljs$core$_name$$(this.name);
};
$JSCompiler_prototypeAlias$$.$cljs$core$INamed$_namespace$arity$1$ = function() {
  return $cljs$core$_namespace$$(this.name);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return this[$goog$UID_PROPERTY_$$] || (this[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
};
function $cljs$core$UUID$$($uuid$$, $__hash$jscomp$45$$) {
  this.$uuid$ = $uuid$$;
  this.$__hash$ = $__hash$jscomp$45$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2153775104;
  this.$cljs$lang$protocol_mask$partition1$$ = 2048;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$UUID$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return this.$uuid$;
};
$JSCompiler_prototypeAlias$$.equiv = function($other$jscomp$100$$) {
  return this.$cljs$core$IEquiv$_equiv$arity$2$(null, $other$jscomp$100$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($_$jscomp$196$$, $other$jscomp$101$$) {
  return $other$jscomp$101$$ instanceof $cljs$core$UUID$$ && this.$uuid$ === $other$jscomp$101$$.$uuid$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($_$jscomp$197$$, $writer$jscomp$47$$) {
  return $cljs$core$_write$$($writer$jscomp$47$$, [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$('#uuid "'), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$uuid$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$('"')].join(""));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  null == this.$__hash$ && (this.$__hash$ = $cljs$core$hash$$(this.$uuid$));
  return this.$__hash$;
};
function $cljs$core$random_uuid$$() {
  function $hex$$() {
    return Math.floor(16 * Math.random()).toString(16);
  }
  var $rhex$$ = (8 | 3 & Math.floor(16 * Math.random())).toString(16);
  return new $cljs$core$UUID$$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), 
  $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("-"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("-"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("4"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), 
  $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("-"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($rhex$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("-"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), 
  $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$()), 
  $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($hex$$())].join(""), null);
}
;var $cljs$core$cst$0sym$0cljs$0core_SLASH_array_QMARK_$$ = new $cljs$core$Symbol$$("cljs.core", "array?", "cljs.core/array?", -1655912448, null), $cljs$core$cst$0sym$0p1__21708_SHARP_$$ = new $cljs$core$Symbol$$(null, "p1__21708#", "p1__21708#", -1163192256, null), $cljs$core$cst$0sym$0form$$ = new $cljs$core$Symbol$$(null, "form", "form", 16469056, null), $cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH__STAR_$$ = new $cljs$core$Symbol$$("cljs.spec.alpha", "*", "cljs.spec.alpha/*", -1238084288, null), 
$cljs$core$cst$0kw$0path$$ = new $cljs$core$Keyword$$(null, "path", "path", -188191168), $cljs$core$cst$0sym$0get_DASH_punch_DASH_access$$ = new $cljs$core$Symbol$$(null, "get-punch-access", "get-punch-access", 1112963648, null), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$ = new $cljs$core$Keyword$$(null, "chrome-port-post-message-called-on-disconnected-port", "chrome-port-post-message-called-on-disconnected-port", -1329006944), $cljs$core$cst$0sym$0meta12115$$ = 
new $cljs$core$Symbol$$(null, "meta12115", "meta12115", -2102749087, null), $cljs$core$cst$0sym$0unc$$ = new $cljs$core$Symbol$$(null, "unc", "unc", -465250751, null), $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$ = new $cljs$core$Keyword$$("oops.sdefs", "obj-selector", "oops.sdefs/obj-selector", 655346305), $cljs$core$cst$0kw$0p2$$ = new $cljs$core$Keyword$$(null, "p2", "p2", 905500641), $cljs$core$cst$0kw$0selector$$ = new $cljs$core$Keyword$$(null, "selector", "selector", 762528866), 
$cljs$core$cst$0kw$0ret$$ = new $cljs$core$Keyword$$(null, "ret", "ret", -468222814), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_unknown$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "unknown", "cljs.spec.alpha/unknown", 651034818), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_name$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "name", "cljs.spec.alpha/name", 205233570), $cljs$core$cst$0sym$0cljs$0core_SLASH_keyword_QMARK_$$ = new $cljs$core$Symbol$$("cljs.core", "keyword?", "cljs.core/keyword?", 
713156450, null), $cljs$core$cst$0kw$0soft_QMARK_$$ = new $cljs$core$Keyword$$(null, "soft?", "soft?", -1339668477), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_put_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$ = new $cljs$core$Keyword$$(null, "chrome-port-put-message-called-on-disconnected-port", "chrome-port-put-message-called-on-disconnected-port", 1479634211), $cljs$core$cst$0kw$0fn$$ = new $cljs$core$Keyword$$(null, "fn", "fn", -1175266204), $cljs$core$cst$0kw$0rep_PLUS_$$ = new $cljs$core$Keyword$$(null, 
"rep+", "rep+", -281382396), $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_key$$ = new $cljs$core$Keyword$$("oops.sdefs", "obj-key", "oops.sdefs/obj-key", -2004347356), $cljs$core$cst$0kw$0meta$$ = new $cljs$core$Keyword$$(null, "meta", "meta", 1499536964), $cljs$core$cst$0kw$0flavor$$ = new $cljs$core$Keyword$$(null, "flavor", "flavor", -1331636636), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$ = new $cljs$core$Keyword$$(null, "chrome-port-on-disconnect-called-on-disconnected-port", 
"chrome-port-on-disconnect-called-on-disconnected-port", -269858172), $cljs$core$cst$0kw$0unexpected_DASH_empty_DASH_selector$$ = new $cljs$core$Keyword$$(null, "unexpected-empty-selector", "unexpected-empty-selector", -572791900), $cljs$core$cst$0sym$0blockable$$ = new $cljs$core$Symbol$$(null, "blockable", "blockable", -28395259, null), $cljs$core$cst$0kw$0dup$$ = new $cljs$core$Keyword$$(null, "dup", "dup", 556298533), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_rep$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", 
"rep", "cljs.spec.alpha/rep", 1483217317), $cljs$core$cst$0sym$0cljs$0core_SLASH_partial$$ = new $cljs$core$Symbol$$("cljs.core", "partial", "cljs.core/partial", 1483172485, null), $cljs$core$cst$0kw$0key$$ = new $cljs$core$Keyword$$(null, "key", "key", -1516042587), $cljs$core$cst$0kw$0splice$$ = new $cljs$core$Keyword$$(null, "splice", "splice", 449588165), $cljs$core$cst$0sym$0forms$$ = new $cljs$core$Symbol$$(null, "forms", "forms", -608443419, null), $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_key$$ = 
new $cljs$core$Keyword$$("oops.sdefs", "obj-path-key", "oops.sdefs/obj-path-key", -1566573562), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_accept$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "accept", "cljs.spec.alpha/accept", 370988198), $cljs$core$cst$0kw$0chrome_DASH_storage_DASH_area_DASH_callback_DASH_channel_DASH_factory$$ = new $cljs$core$Keyword$$(null, "chrome-storage-area-callback-channel-factory", "chrome-storage-area-callback-channel-factory", 573191526), $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path$$ = 
new $cljs$core$Keyword$$("oops.sdefs", "obj-path", "oops.sdefs/obj-path", 692461382), $cljs$core$cst$0kw$0ks$$ = new $cljs$core$Keyword$$(null, "ks", "ks", 1900203942), $cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_and$$ = new $cljs$core$Symbol$$("cljs.spec.alpha", "and", "cljs.spec.alpha/and", -2060279705, null), $cljs$core$cst$0kw$0validator$$ = new $cljs$core$Keyword$$(null, "validator", "validator", -1966190681), $cljs$core$cst$0sym$0meta21682$$ = new $cljs$core$Symbol$$(null, "meta21682", "meta21682", 
2061571336, null), $cljs$core$cst$0kw$0default$$ = new $cljs$core$Keyword$$(null, "default", "default", -1987822328), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_with_DASH_nil$$ = new $cljs$core$Keyword$$(null, "chrome-port-post-message-called-with-nil", "chrome-port-post-message-called-with-nil", 864934312), $cljs$core$cst$0kw$0finally_DASH_block$$ = new $cljs$core$Keyword$$(null, "finally-block", "finally-block", 832982472), $cljs$core$cst$0sym$0cljs$0core_SLASH_partition_DASH_all$$ = 
new $cljs$core$Symbol$$("cljs.core", "partition-all", "cljs.core/partition-all", 1634835208, null), $cljs$core$cst$0sym$0meta14344$$ = new $cljs$core$Symbol$$(null, "meta14344", "meta14344", 877861736, null), $cljs$core$cst$0kw$0warn$$ = new $cljs$core$Keyword$$(null, "warn", "warn", -436710552), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_channel_DASH_factory$$ = new $cljs$core$Keyword$$(null, "chrome-port-channel-factory", "chrome-port-channel-factory", 393485192), $cljs$core$cst$0sym$0cljs$0core_SLASH_string_QMARK_$$ = 
new $cljs$core$Symbol$$("cljs.core", "string?", "cljs.core/string?", -2072921719, null), $cljs$core$cst$0kw$0missing_DASH_api_DASH_check_DASH_fn$$ = new $cljs$core$Keyword$$(null, "missing-api-check-fn", "missing-api-check-fn", -1196803703), $cljs$core$cst$0kw$0warning_DASH_reporting$$ = new $cljs$core$Keyword$$(null, "warning-reporting", "warning-reporting", -319054391), $cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_or$$ = new $cljs$core$Symbol$$("cljs.spec.alpha", "or", "cljs.spec.alpha/or", -831679639, 
null), $cljs$core$cst$0sym$0gfn$$ = new $cljs$core$Symbol$$(null, "gfn", "gfn", -1862918295, null), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_gfn$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "gfn", "cljs.spec.alpha/gfn", -593120375), $cljs$core$cst$0sym$0v$$ = new $cljs$core$Symbol$$(null, "v", "v", 1661996586, null), $cljs$core$cst$0kw$0native_DASH_array$$ = new $cljs$core$Keyword$$(null, "native-array", "native-array", 1549686442), $cljs$core$cst$0kw$0js_DASH_obj$$ = new $cljs$core$Keyword$$(null, 
"js-obj", "js-obj", -1298148277), $cljs$core$cst$0sym$0cpred_QMARK_$$ = new $cljs$core$Symbol$$(null, "cpred?", "cpred?", 35589515, null), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_received_DASH_nil_DASH_message$$ = new $cljs$core$Keyword$$(null, "chrome-port-received-nil-message", "chrome-port-received-nil-message", -1593119285), $cljs$core$cst$0sym$0meta21124$$ = new $cljs$core$Symbol$$(null, "meta21124", "meta21124", 1203839947, null), $cljs$core$cst$0kw$0val$$ = new $cljs$core$Keyword$$(null, 
"val", "val", 128701612), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "op", "cljs.spec.alpha/op", -1269055252), $cljs$core$cst$0kw$0recur$$ = new $cljs$core$Keyword$$(null, "recur", "recur", -437573268), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_v$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "v", "cljs.spec.alpha/v", 552625740), $cljs$core$cst$0kw$0catch_DASH_block$$ = new $cljs$core$Keyword$$(null, "catch-block", "catch-block", 1175212748), 
$cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_tuple$$ = new $cljs$core$Symbol$$("cljs.spec.alpha", "tuple", "cljs.spec.alpha/tuple", -415901908, null), $cljs$core$cst$0kw$0use_DASH_envelope$$ = new $cljs$core$Keyword$$(null, "use-envelope", "use-envelope", -2007197780), $cljs$core$cst$0sym$0pred$$ = new $cljs$core$Symbol$$(null, "pred", "pred", -727012372, null), $cljs$core$cst$0kw$0fallback_DASH_impl$$ = new $cljs$core$Keyword$$(null, "fallback-impl", "fallback-impl", -1501286995), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$ = 
new $cljs$core$Keyword$$(null, "chrome-port-on-message-called-on-disconnected-port", "chrome-port-on-message-called-on-disconnected-port", 1590595021), $cljs$core$cst$0sym$0meta21179$$ = new $cljs$core$Symbol$$(null, "meta21179", "meta21179", -1408260467, null), $cljs$core$cst$0kw$0flush_DASH_on_DASH_newline$$ = new $cljs$core$Keyword$$(null, "flush-on-newline", "flush-on-newline", -151457939), $cljs$core$cst$0kw$0string$$ = new $cljs$core$Keyword$$(null, "string", "string", -1989541586), $cljs$core$cst$0kw$0p1$$ = 
new $cljs$core$Keyword$$(null, "p1", "p1", -936759954), $cljs$core$cst$0sym$0cljs$0core_SLASH_zipmap$$ = new $cljs$core$Symbol$$("cljs.core", "zipmap", "cljs.core/zipmap", -1902130674, null), $cljs$core$cst$0sym$0meta21157$$ = new $cljs$core$Symbol$$(null, "meta21157", "meta21157", 1130584590, null), $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_mode$$ = new $cljs$core$Keyword$$("oops.sdefs", "obj-path-mode", "oops.sdefs/obj-path-mode", 1253821198), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_fn_DASH_factory$$ = 
new $cljs$core$Keyword$$(null, "chrome-port-on-message-fn-factory", "chrome-port-on-message-fn-factory", 1295000398), $cljs$core$cst$0sym$0p1__21709_SHARP_$$ = new $cljs$core$Symbol$$(null, "p1__21709#", "p1__21709#", -93068370, null), $cljs$core$cst$0kw$0error_DASH_reporting$$ = new $cljs$core$Keyword$$(null, "error-reporting", "error-reporting", 1274700782), $cljs$core$cst$0sym$0_PERCENT_$$ = new $cljs$core$Symbol$$(null, "%", "%", -950237169, null), $cljs$core$cst$0sym$0arr$$ = new $cljs$core$Symbol$$(null, 
"arr", "arr", 2115492975, null), $cljs$core$cst$0sym$0cljs$0core_SLASH_map$$ = new $cljs$core$Symbol$$("cljs.core", "map", "cljs.core/map", -338988913, null), $cljs$core$cst$0kw$0descendants$$ = new $cljs$core$Keyword$$(null, "descendants", "descendants", 1824886031), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_kvs_DASH__GT_map$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "kvs-\x3emap", "cljs.spec.alpha/kvs-\x3emap", 579713455), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$ = 
new $cljs$core$Keyword$$(null, "chrome-port-disconnect-called-on-disconnected-port", "chrome-port-disconnect-called-on-disconnected-port", -1526797777), $cljs$core$cst$0sym$0oops$0spec_SLASH_native_DASH_array_DASH_aware_DASH__STAR_$$ = new $cljs$core$Symbol$$("oops.spec", "native-array-aware-*", "oops.spec/native-array-aware-*", 1171382320, null), $cljs$core$cst$0sym$0get_DASH_dot_DASH_access$$ = new $cljs$core$Symbol$$(null, "get-dot-access", "get-dot-access", -1468450704, null), $cljs$core$cst$0kw$0ancestors$$ = 
new $cljs$core$Keyword$$(null, "ancestors", "ancestors", -776045424), $cljs$core$cst$0kw$0readably$$ = new $cljs$core$Keyword$$(null, "readably", "readably", 1129599760), $cljs$core$cst$0kw$0more_DASH_marker$$ = new $cljs$core$Keyword$$(null, "more-marker", "more-marker", -14717935), $cljs$core$cst$0sym$0cljs$0core_SLASH_let$$ = new $cljs$core$Symbol$$("cljs.core", "let", "cljs.core/let", -308701135, null), $cljs$core$cst$0sym$0re$$ = new $cljs$core$Symbol$$(null, "re", "re", 1869207729, null), $cljs$core$cst$0sym$0kps$$ = 
new $cljs$core$Symbol$$(null, "kps", "kps", -1157342767, null), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "invalid", "cljs.spec.alpha/invalid", -1220295119), $cljs$core$cst$0sym$0preds$$ = new $cljs$core$Symbol$$(null, "preds", "preds", 150921777, null), $cljs$core$cst$0sym$0get_DASH_soft_DASH_access$$ = new $cljs$core$Symbol$$(null, "get-soft-access", "get-soft-access", -1996253487, null), $cljs$core$cst$0kw$0expected_DASH_function_DASH_value$$ = 
new $cljs$core$Keyword$$(null, "expected-function-value", "expected-function-value", -1399123630), $cljs$core$cst$0sym$0fn_STAR_$$ = new $cljs$core$Symbol$$(null, "fn*", "fn*", -752876845, null), $cljs$core$cst$0sym$0val$$ = new $cljs$core$Symbol$$(null, "val", "val", 1769233139, null), $cljs$core$cst$0kw$0keyword$$ = new $cljs$core$Keyword$$(null, "keyword", "keyword", 811389747), $cljs$core$cst$0kw$0root$$ = new $cljs$core$Keyword$$(null, "root", "root", -448657453), $cljs$core$cst$0kw$0print_DASH_length$$ = 
new $cljs$core$Keyword$$(null, "print-length", "print-length", 1931866356), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_amp$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "amp", "cljs.spec.alpha/amp", 831147508), $cljs$core$cst$0kw$0id$$ = new $cljs$core$Keyword$$(null, "id", "id", -1388402092), $cljs$core$cst$0kw$0catch_DASH_exception$$ = new $cljs$core$Keyword$$(null, "catch-exception", "catch-exception", -1997306795), $cljs$core$cst$0kw$0logger$$ = new $cljs$core$Keyword$$(null, "logger", "logger", 
-220675947), $cljs$core$cst$0sym$0meta21281$$ = new $cljs$core$Symbol$$(null, "meta21281", "meta21281", -2118032075, null), $cljs$core$cst$0kw$0parents$$ = new $cljs$core$Keyword$$(null, "parents", "parents", -2027538891), $cljs$core$cst$0sym$0cnt$$ = new $cljs$core$Symbol$$(null, "cnt", "cnt", 1924510325, null), $cljs$core$cst$0kw$0event_DASH_listener_DASH_factory$$ = new $cljs$core$Keyword$$(null, "event-listener-factory", "event-listener-factory", -1976310091), $cljs$core$cst$0kw$0callback_DASH_fn_DASH_factory$$ = 
new $cljs$core$Keyword$$(null, "callback-fn-factory", "callback-fn-factory", 2078895029), $cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_valid_QMARK_$$ = new $cljs$core$Symbol$$("cljs.spec.alpha", "valid?", "cljs.spec.alpha/valid?", -142132235, null), $cljs$core$cst$0sym$0k$$ = new $cljs$core$Symbol$$(null, "k", "k", -505765866, null), $cljs$core$cst$0kw$0prev$$ = new $cljs$core$Keyword$$(null, "prev", "prev", -1597069226), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_k$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", 
"k", "cljs.spec.alpha/k", -1602615178), $cljs$core$cst$0sym$0cljs$0core_SLASH_fn$$ = new $cljs$core$Symbol$$("cljs.core", "fn", "cljs.core/fn", -1065745098, null), $cljs$core$cst$0kw$0child_DASH_factory$$ = new $cljs$core$Keyword$$(null, "child-factory", "child-factory", -1019029066), $cljs$core$cst$0kw$0continue_DASH_block$$ = new $cljs$core$Keyword$$(null, "continue-block", "continue-block", -1852047850), $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_item$$ = new $cljs$core$Keyword$$("oops.sdefs", 
"obj-path-item", "oops.sdefs/obj-path-item", -77633674), $cljs$core$cst$0kw$0invalid_DASH_selector$$ = new $cljs$core$Keyword$$(null, "invalid-selector", "invalid-selector", 1262807990), $cljs$core$cst$0kw$0unexpected_DASH_punching_DASH_selector$$ = new $cljs$core$Keyword$$(null, "unexpected-punching-selector", "unexpected-punching-selector", -1934135338), $cljs$core$cst$0kw$0throw$$ = new $cljs$core$Keyword$$(null, "throw", "throw", -1044625833), $cljs$core$cst$0sym$0cljs$0core_SLASH_vec$$ = new $cljs$core$Symbol$$("cljs.core", 
"vec", "cljs.core/vec", 307622519, null), $cljs$core$cst$0kw$0throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites$$ = new $cljs$core$Keyword$$(null, "throw-errors-from-macro-call-sites", "throw-errors-from-macro-call-sites", -1338743049), $cljs$core$cst$0kw$0chrome_DASH_storage_DASH_area_DASH_callback_DASH_fn_DASH_factory$$ = new $cljs$core$Keyword$$(null, "chrome-storage-area-callback-fn-factory", "chrome-storage-area-callback-fn-factory", 575077111), $cljs$core$cst$0kw$0error$$ = new $cljs$core$Keyword$$(null, 
"error", "error", -978969032), $cljs$core$cst$0kw$0regex$$ = new $cljs$core$Keyword$$(null, "regex", "regex", 939488856), $cljs$core$cst$0kw$0callback_DASH_error_DASH_reporter$$ = new $cljs$core$Keyword$$(null, "callback-error-reporter", "callback-error-reporter", -2104016040), $cljs$core$cst$0sym$0keys$$ = new $cljs$core$Symbol$$(null, "keys", "keys", -1586012071, null), $cljs$core$cst$0kw$0console$$ = new $cljs$core$Keyword$$(null, "console", "console", 1228072057), $cljs$core$cst$0sym$0meta16021$$ = 
new $cljs$core$Symbol$$(null, "meta16021", "meta16021", 92903801, null), $cljs$core$cst$0sym$0pairs$$ = new $cljs$core$Symbol$$(null, "pairs", "pairs", -2039825990, null), $cljs$core$cst$0sym$0meta16191$$ = new $cljs$core$Symbol$$(null, "meta16191", "meta16191", 756028122, null), $cljs$core$cst$0kw$0unexpected_DASH_object_DASH_value$$ = new $cljs$core$Keyword$$(null, "unexpected-object-value", "unexpected-object-value", -1214439301), $cljs$core$cst$0kw$0omit$$ = new $cljs$core$Keyword$$(null, "omit", 
"omit", -1917972325), $cljs$core$cst$0sym$0id$$ = new $cljs$core$Symbol$$(null, "id", "id", 252129435, null), $cljs$core$cst$0sym$0cljs$0core_SLASH_and$$ = new $cljs$core$Symbol$$("cljs.core", "and", "cljs.core/and", -6692549, null), $cljs$core$cst$0kw$0hierarchy$$ = new $cljs$core$Keyword$$(null, "hierarchy", "hierarchy", -1053470341), $cljs$core$cst$0kw$0verbose_DASH_logging$$ = new $cljs$core$Keyword$$(null, "verbose-logging", "verbose-logging", -1125099909), $cljs$core$cst$0kw$0alt_DASH_impl$$ = 
new $cljs$core$Keyword$$(null, "alt-impl", "alt-impl", 670969595), $cljs$core$cst$0kw$0callback_DASH_channel_DASH_factory$$ = new $cljs$core$Keyword$$(null, "callback-channel-factory", "callback-channel-factory", 196315003), $cljs$core$cst$0sym$0specs$$ = new $cljs$core$Symbol$$(null, "specs", "specs", -1227865028, null), $cljs$core$cst$0kw$0unexpected_DASH_soft_DASH_selector$$ = new $cljs$core$Keyword$$(null, "unexpected-soft-selector", "unexpected-soft-selector", -1117708580), $cljs$core$cst$0sym$0cform$$ = 
new $cljs$core$Symbol$$(null, "cform", "cform", 1319506748, null), $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_fn_DASH_factory$$ = new $cljs$core$Keyword$$(null, "chrome-port-on-disconnect-fn-factory", "chrome-port-on-disconnect-fn-factory", -501244675), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_alt$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "alt", "cljs.spec.alpha/alt", 523685437), $cljs$core$cst$0kw$0missing_DASH_object_DASH_key$$ = new $cljs$core$Keyword$$(null, "missing-object-key", 
"missing-object-key", -1300201731), $cljs$core$cst$0sym$0cljs$0core_SLASH_every_QMARK_$$ = new $cljs$core$Symbol$$("cljs.core", "every?", "cljs.core/every?", 1416822717, null), $cljs$core$cst$0kw$0forms$$ = new $cljs$core$Keyword$$(null, "forms", "forms", 2045992350), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_nil$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "nil", "cljs.spec.alpha/nil", 1733813950), $cljs$core$cst$0kw$0ps$$ = new $cljs$core$Keyword$$(null, "ps", "ps", 292358046), $cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_conformer$$ = 
new $cljs$core$Symbol$$("cljs.spec.alpha", "conformer", "cljs.spec.alpha/conformer", 2140085535, null), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_pcat$$ = new $cljs$core$Keyword$$("cljs.spec.alpha", "pcat", "cljs.spec.alpha/pcat", 26406623), $cljs$core$cst$0sym$0f$$ = new $cljs$core$Symbol$$(null, "f", "f", 43394975, null);
var $chromex$protocols$post_message_BANG_$$ = function $chromex$protocols$post_message_BANG_$$($this$$jscomp$115$$, $message$jscomp$26$$) {
  if (null != $this$$jscomp$115$$ && null != $this$$jscomp$115$$.$chromex$protocols$IChromePort$post_message_BANG_$arity$2$) {
    return $this$$jscomp$115$$.$chromex$protocols$IChromePort$post_message_BANG_$arity$2$(0, $message$jscomp$26$$);
  }
  var $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$ = $chromex$protocols$post_message_BANG_$$[$goog$typeOf$$(null == $this$$jscomp$115$$ ? null : $this$$jscomp$115$$)];
  if (null != $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$) {
    return $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$115$$, $message$jscomp$26$$) : $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$.call(null, $this$$jscomp$115$$, $message$jscomp$26$$);
  }
  $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$ = $chromex$protocols$post_message_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$) {
    return $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$115$$, $message$jscomp$26$$) : $m__8679__auto__$jscomp$109_m__8679__auto____$1$jscomp$109$$.call(null, $this$$jscomp$115$$, $message$jscomp$26$$);
  }
  throw $cljs$core$missing_protocol$$("IChromePort.post-message!", $this$$jscomp$115$$);
}, $chromex$protocols$set_connected_BANG_$$ = function $chromex$protocols$set_connected_BANG_$$($this$$jscomp$119$$, $val$jscomp$86$$) {
  if (null != $this$$jscomp$119$$ && null != $this$$jscomp$119$$.$chromex$protocols$IChromePortState$set_connected_BANG_$arity$2$) {
    return $this$$jscomp$119$$.$chromex$protocols$IChromePortState$set_connected_BANG_$arity$2$(0, $val$jscomp$86$$);
  }
  var $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$ = $chromex$protocols$set_connected_BANG_$$[$goog$typeOf$$(null == $this$$jscomp$119$$ ? null : $this$$jscomp$119$$)];
  if (null != $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$) {
    return $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$119$$, $val$jscomp$86$$) : $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$.call(null, $this$$jscomp$119$$, $val$jscomp$86$$);
  }
  $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$ = $chromex$protocols$set_connected_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$) {
    return $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$119$$, $val$jscomp$86$$) : $m__8679__auto__$jscomp$113_m__8679__auto____$1$jscomp$113$$.call(null, $this$$jscomp$119$$, $val$jscomp$86$$);
  }
  throw $cljs$core$missing_protocol$$("IChromePortState.set-connected!", $this$$jscomp$119$$);
}, $chromex$protocols$put_message_BANG_$$ = function $chromex$protocols$put_message_BANG_$$($this$$jscomp$120$$, $message$jscomp$27$$) {
  if (null != $this$$jscomp$120$$ && null != $this$$jscomp$120$$.$chromex$protocols$IChromePortState$put_message_BANG_$arity$2$) {
    return $this$$jscomp$120$$.$chromex$protocols$IChromePortState$put_message_BANG_$arity$2$(0, $message$jscomp$27$$);
  }
  var $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$ = $chromex$protocols$put_message_BANG_$$[$goog$typeOf$$(null == $this$$jscomp$120$$ ? null : $this$$jscomp$120$$)];
  if (null != $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$) {
    return $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$120$$, $message$jscomp$27$$) : $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$.call(null, $this$$jscomp$120$$, $message$jscomp$27$$);
  }
  $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$ = $chromex$protocols$put_message_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$) {
    return $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$120$$, $message$jscomp$27$$) : $m__8679__auto__$jscomp$114_m__8679__auto____$1$jscomp$114$$.call(null, $this$$jscomp$120$$, $message$jscomp$27$$);
  }
  throw $cljs$core$missing_protocol$$("IChromePortState.put-message!", $this$$jscomp$120$$);
}, $chromex$protocols$close_resources_BANG_$$ = function $chromex$protocols$close_resources_BANG_$$($this$$jscomp$121$$) {
  if (null != $this$$jscomp$121$$ && null != $this$$jscomp$121$$.$chromex$protocols$IChromePortState$close_resources_BANG_$arity$1$) {
    return $this$$jscomp$121$$.$chromex$protocols$IChromePortState$close_resources_BANG_$arity$1$();
  }
  var $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$ = $chromex$protocols$close_resources_BANG_$$[$goog$typeOf$$(null == $this$$jscomp$121$$ ? null : $this$$jscomp$121$$)];
  if (null != $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$) {
    return $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$.$cljs$core$IFn$_invoke$arity$1$($this$$jscomp$121$$) : $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$.call(null, $this$$jscomp$121$$);
  }
  $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$ = $chromex$protocols$close_resources_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$) {
    return $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$.$cljs$core$IFn$_invoke$arity$1$($this$$jscomp$121$$) : $m__8679__auto__$jscomp$115_m__8679__auto____$1$jscomp$115$$.call(null, $this$$jscomp$121$$);
  }
  throw $cljs$core$missing_protocol$$("IChromePortState.close-resources!", $this$$jscomp$121$$);
};
var $cljs$core$async$t_cljs$0core$0async16190$$, $cljs$core$async$impl$protocols$take_BANG_$$ = function $cljs$core$async$impl$protocols$take_BANG_$$($port$$, $fn1_handler$$) {
  if (null != $port$$ && null != $port$$.$cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2$) {
    return $port$$.$cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2$($port$$, $fn1_handler$$);
  }
  var $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$ = $cljs$core$async$impl$protocols$take_BANG_$$[$goog$typeOf$$(null == $port$$ ? null : $port$$)];
  if (null != $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$) {
    return $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$.$cljs$core$IFn$_invoke$arity$2$($port$$, $fn1_handler$$) : $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$.call(null, $port$$, $fn1_handler$$);
  }
  $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$ = $cljs$core$async$impl$protocols$take_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$) {
    return $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$.$cljs$core$IFn$_invoke$arity$2$($port$$, $fn1_handler$$) : $m__8679__auto__$jscomp$124_m__8679__auto____$1$jscomp$124$$.call(null, $port$$, $fn1_handler$$);
  }
  throw $cljs$core$missing_protocol$$("ReadPort.take!", $port$$);
}, $cljs$core$async$impl$protocols$put_BANG_$$ = function $cljs$core$async$impl$protocols$put_BANG_$$($port$jscomp$1$$, $val$jscomp$88$$, $fn1_handler$jscomp$1$$) {
  if (null != $port$jscomp$1$$ && null != $port$jscomp$1$$.$cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3$) {
    return $port$jscomp$1$$.$cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3$(0, $val$jscomp$88$$, $fn1_handler$jscomp$1$$);
  }
  var $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$ = $cljs$core$async$impl$protocols$put_BANG_$$[$goog$typeOf$$(null == $port$jscomp$1$$ ? null : $port$jscomp$1$$)];
  if (null != $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$) {
    return $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$.$cljs$core$IFn$_invoke$arity$3$($port$jscomp$1$$, $val$jscomp$88$$, $fn1_handler$jscomp$1$$) : $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$.call(null, $port$jscomp$1$$, $val$jscomp$88$$, $fn1_handler$jscomp$1$$);
  }
  $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$ = $cljs$core$async$impl$protocols$put_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$) {
    return $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$.$cljs$core$IFn$_invoke$arity$3$($port$jscomp$1$$, $val$jscomp$88$$, $fn1_handler$jscomp$1$$) : $m__8679__auto__$jscomp$125_m__8679__auto____$1$jscomp$125$$.call(null, $port$jscomp$1$$, $val$jscomp$88$$, $fn1_handler$jscomp$1$$);
  }
  throw $cljs$core$missing_protocol$$("WritePort.put!", $port$jscomp$1$$);
}, $cljs$core$async$impl$protocols$close_BANG_$$ = function $cljs$core$async$impl$protocols$close_BANG_$$($chan$$) {
  if (null != $chan$$ && null != $chan$$.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$) {
    return $chan$$.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$($chan$$);
  }
  var $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$ = $cljs$core$async$impl$protocols$close_BANG_$$[$goog$typeOf$$(null == $chan$$ ? null : $chan$$)];
  if (null != $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$) {
    return $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$.$cljs$core$IFn$_invoke$arity$1$($chan$$) : $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$.call(null, $chan$$);
  }
  $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$ = $cljs$core$async$impl$protocols$close_BANG_$$._;
  if (null != $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$) {
    return $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$.$cljs$core$IFn$_invoke$arity$1$($chan$$) : $m__8679__auto__$jscomp$126_m__8679__auto____$1$jscomp$126$$.call(null, $chan$$);
  }
  throw $cljs$core$missing_protocol$$("Channel.close!", $chan$$);
}, $cljs$core$async$impl$protocols$active_QMARK_$$ = function $cljs$core$async$impl$protocols$active_QMARK_$$($h$jscomp$120$$) {
  if (null != $h$jscomp$120$$ && null != $h$jscomp$120$$.$cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1$) {
    return !0;
  }
  var $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$ = $cljs$core$async$impl$protocols$active_QMARK_$$[$goog$typeOf$$(null == $h$jscomp$120$$ ? null : $h$jscomp$120$$)];
  if (null != $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$) {
    return $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$.$cljs$core$IFn$_invoke$arity$1$($h$jscomp$120$$) : $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$.call(null, $h$jscomp$120$$);
  }
  $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$ = $cljs$core$async$impl$protocols$active_QMARK_$$._;
  if (null != $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$) {
    return $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$.$cljs$core$IFn$_invoke$arity$1$($h$jscomp$120$$) : $m__8679__auto__$jscomp$128_m__8679__auto____$1$jscomp$128$$.call(null, $h$jscomp$120$$);
  }
  throw $cljs$core$missing_protocol$$("Handler.active?", $h$jscomp$120$$);
}, $cljs$core$async$impl$protocols$commit$$ = function $cljs$core$async$impl$protocols$commit$$($h$jscomp$122$$) {
  if (null != $h$jscomp$122$$ && null != $h$jscomp$122$$.$cljs$core$async$impl$protocols$Handler$commit$arity$1$) {
    return $h$jscomp$122$$.$f$;
  }
  var $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$ = $cljs$core$async$impl$protocols$commit$$[$goog$typeOf$$(null == $h$jscomp$122$$ ? null : $h$jscomp$122$$)];
  if (null != $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$) {
    return $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$.$cljs$core$IFn$_invoke$arity$1$($h$jscomp$122$$) : $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$.call(null, $h$jscomp$122$$);
  }
  $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$ = $cljs$core$async$impl$protocols$commit$$._;
  if (null != $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$) {
    return $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$.$cljs$core$IFn$_invoke$arity$1$($h$jscomp$122$$) : $m__8679__auto__$jscomp$130_m__8679__auto____$1$jscomp$130$$.call(null, $h$jscomp$122$$);
  }
  throw $cljs$core$missing_protocol$$("Handler.commit", $h$jscomp$122$$);
}, $cljs$core$async$impl$protocols$add_BANG__STAR_$$ = function $cljs$core$async$impl$protocols$add_BANG__STAR_$$($b$jscomp$200$$, $itm$$) {
  if (null != $b$jscomp$200$$ && null != $b$jscomp$200$$.$cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2$) {
    return $b$jscomp$200$$.$cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2$(0, $itm$$);
  }
  var $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$ = $cljs$core$async$impl$protocols$add_BANG__STAR_$$[$goog$typeOf$$(null == $b$jscomp$200$$ ? null : $b$jscomp$200$$)];
  if (null != $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$) {
    return $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$.$cljs$core$IFn$_invoke$arity$2$($b$jscomp$200$$, $itm$$) : $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$.call(null, $b$jscomp$200$$, $itm$$);
  }
  $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$ = $cljs$core$async$impl$protocols$add_BANG__STAR_$$._;
  if (null != $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$) {
    return $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$.$cljs$core$IFn$_invoke$arity$2$($b$jscomp$200$$, $itm$$) : $m__8679__auto__$jscomp$133_m__8679__auto____$1$jscomp$133$$.call(null, $b$jscomp$200$$, $itm$$);
  }
  throw $cljs$core$missing_protocol$$("Buffer.add!*", $b$jscomp$200$$);
}, $cljs$core$async$impl$protocols$add_BANG_$$ = function $cljs$core$async$impl$protocols$add_BANG_$$($var_args$jscomp$293$$) {
  for (var $args14321$$ = [], $len__9181__auto___14324$$ = arguments.length, $i__9182__auto___14325$$ = 0;;) {
    if ($i__9182__auto___14325$$ < $len__9181__auto___14324$$) {
      $args14321$$.push(arguments[$i__9182__auto___14325$$]), $i__9182__auto___14325$$ += 1;
    } else {
      break;
    }
  }
  switch($args14321$$.length) {
    case 1:
      return $cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args14321$$.length)].join(""));
  }
};
$cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ = function($b$jscomp$202$$) {
  return $b$jscomp$202$$;
};
$cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($b$jscomp$203$$, $itm$jscomp$1$$) {
  if (null == $itm$jscomp$1$$) {
    throw Error("Assert failed: (not (nil? itm))");
  }
  return $cljs$core$async$impl$protocols$add_BANG__STAR_$$($b$jscomp$203$$, $itm$jscomp$1$$);
};
$cljs$core$async$impl$protocols$add_BANG_$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$async$impl$buffers$acopy$$($src$jscomp$11$$, $src_start$$, $dest$jscomp$1$$, $dest_start$$, $len$jscomp$51$$) {
  for (var $cnt$jscomp$30$$ = 0;;) {
    if ($cnt$jscomp$30$$ < $len$jscomp$51$$) {
      $dest$jscomp$1$$[$dest_start$$ + $cnt$jscomp$30$$] = $src$jscomp$11$$[$src_start$$ + $cnt$jscomp$30$$], $cnt$jscomp$30$$ += 1;
    } else {
      break;
    }
  }
}
function $cljs$core$async$impl$buffers$RingBuffer$$($head$$, $tail$jscomp$4$$, $length$jscomp$20$$, $arr$jscomp$137$$) {
  this.head = $head$$;
  this.$tail$ = $tail$jscomp$4$$;
  this.length = $length$jscomp$20$$;
  this.$arr$ = $arr$jscomp$137$$;
}
$cljs$core$async$impl$buffers$RingBuffer$$.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var $x$jscomp$606$$ = this.$arr$[this.$tail$];
  this.$arr$[this.$tail$] = null;
  this.$tail$ = (this.$tail$ + 1) % this.$arr$.length;
  --this.length;
  return $x$jscomp$606$$;
};
$cljs$core$async$impl$buffers$RingBuffer$$.prototype.unshift = function($x$jscomp$607$$) {
  this.$arr$[this.head] = $x$jscomp$607$$;
  this.head = (this.head + 1) % this.$arr$.length;
  this.length += 1;
  return null;
};
function $JSCompiler_StaticMethods_unbounded_unshift$$($JSCompiler_StaticMethods_unbounded_unshift$self$$, $x$jscomp$608$$) {
  $JSCompiler_StaticMethods_unbounded_unshift$self$$.length + 1 === $JSCompiler_StaticMethods_unbounded_unshift$self$$.$arr$.length && $JSCompiler_StaticMethods_unbounded_unshift$self$$.resize();
  $JSCompiler_StaticMethods_unbounded_unshift$self$$.unshift($x$jscomp$608$$);
}
$cljs$core$async$impl$buffers$RingBuffer$$.prototype.resize = function() {
  var $new_arr$jscomp$10$$ = Array(2 * this.$arr$.length);
  return this.$tail$ < this.head ? ($cljs$core$async$impl$buffers$acopy$$(this.$arr$, this.$tail$, $new_arr$jscomp$10$$, 0, this.length), this.$tail$ = 0, this.head = this.length, this.$arr$ = $new_arr$jscomp$10$$) : this.$tail$ > this.head ? ($cljs$core$async$impl$buffers$acopy$$(this.$arr$, this.$tail$, $new_arr$jscomp$10$$, 0, this.$arr$.length - this.$tail$), $cljs$core$async$impl$buffers$acopy$$(this.$arr$, 0, $new_arr$jscomp$10$$, this.$arr$.length - this.$tail$, this.head), this.$tail$ = 0, 
  this.head = this.length, this.$arr$ = $new_arr$jscomp$10$$) : this.$tail$ === this.head ? (this.head = this.$tail$ = 0, this.$arr$ = $new_arr$jscomp$10$$) : null;
};
function $JSCompiler_StaticMethods_cleanup$$($JSCompiler_StaticMethods_cleanup$self$$, $keep_QMARK_$$) {
  for (var $n__8981__auto__$$ = $JSCompiler_StaticMethods_cleanup$self$$.length, $x$jscomp$609$$ = 0;;) {
    if ($x$jscomp$609$$ < $n__8981__auto__$$) {
      var $v_14331$$ = $JSCompiler_StaticMethods_cleanup$self$$.pop();
      ($keep_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$ ? $keep_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($v_14331$$) : $keep_QMARK_$$.call(null, $v_14331$$)) && $JSCompiler_StaticMethods_cleanup$self$$.unshift($v_14331$$);
      $x$jscomp$609$$ += 1;
    } else {
      break;
    }
  }
}
function $cljs$core$async$impl$buffers$ring_buffer$$($n$jscomp$162$$) {
  if (!(0 < $n$jscomp$162$$)) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Can't create a ring buffer of size 0"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(\x3e n 0)")].join(""));
  }
  return new $cljs$core$async$impl$buffers$RingBuffer$$(0, 0, 0, Array($n$jscomp$162$$));
}
function $cljs$core$async$impl$buffers$FixedBuffer$$($buf$jscomp$2$$, $n$jscomp$163$$) {
  this.$buf$ = $buf$jscomp$2$$;
  this.n = $n$jscomp$163$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
function $JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$$($JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$self$$) {
  return $JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$self$$.$buf$.length === $JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$self$$.n;
}
$cljs$core$async$impl$buffers$FixedBuffer$$.prototype.$cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2$ = function($this$$jscomp$134$$, $itm$jscomp$2$$) {
  $JSCompiler_StaticMethods_unbounded_unshift$$(this.$buf$, $itm$jscomp$2$$);
  return this;
};
$cljs$core$async$impl$buffers$FixedBuffer$$.prototype.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$buf$.length;
};
if ("undefined" === typeof $cljs$core$async$impl$buffers$NO_VAL$$) {
  var $cljs$core$async$impl$buffers$NO_VAL$$ = {};
}
;var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$jscomp$inline_377$$ = $goog$global$$.navigator;
  if ($navigator$jscomp$inline_377$$) {
    var $userAgent$jscomp$inline_378$$ = $navigator$jscomp$inline_377$$.userAgent;
    if ($userAgent$jscomp$inline_378$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$jscomp$inline_378$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
;var $goog$async$nextTick$setImmediate_$$;
function $goog$async$nextTick$getSetImmediateEmulator_$$() {
  var $Channel$$ = $goog$global$$.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Presto") && ($Channel$$ = function() {
    var $Channel$$ = document.createElement("IFRAME");
    $Channel$$.style.display = "none";
    $Channel$$.src = "";
    document.documentElement.appendChild($Channel$$);
    var $channel$jscomp$1$$ = $Channel$$.contentWindow, $Channel$$ = $channel$jscomp$1$$.document;
    $Channel$$.open();
    $Channel$$.write("");
    $Channel$$.close();
    var $head$jscomp$2$$ = "callImmediate" + Math.random(), $tail$jscomp$6$$ = "file:" == $channel$jscomp$1$$.location.protocol ? "*" : $channel$jscomp$1$$.location.protocol + "//" + $channel$jscomp$1$$.location.host, $Channel$$ = $goog$bind$$(function($Channel$$) {
      if (("*" == $tail$jscomp$6$$ || $Channel$$.origin == $tail$jscomp$6$$) && $Channel$$.data == $head$jscomp$2$$) {
        this.port1.onmessage();
      }
    }, this);
    $channel$jscomp$1$$.addEventListener("message", $Channel$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      $channel$jscomp$1$$.postMessage($head$jscomp$2$$, $tail$jscomp$6$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Trident") && -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("MSIE")) {
    var $channel$jscomp$1$$ = new $Channel$$, $head$jscomp$2$$ = {}, $tail$jscomp$6$$ = $head$jscomp$2$$;
    $channel$jscomp$1$$.port1.onmessage = function() {
      if (void 0 !== $head$jscomp$2$$.next) {
        $head$jscomp$2$$ = $head$jscomp$2$$.next;
        var $Channel$$ = $head$jscomp$2$$.$cb$;
        $head$jscomp$2$$.$cb$ = null;
        $Channel$$();
      }
    };
    return function($Channel$$) {
      $tail$jscomp$6$$.next = {$cb$:$Channel$$};
      $tail$jscomp$6$$ = $tail$jscomp$6$$.next;
      $channel$jscomp$1$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function($Channel$$) {
    var $channel$jscomp$1$$ = document.createElement("SCRIPT");
    $channel$jscomp$1$$.onreadystatechange = function() {
      $channel$jscomp$1$$.onreadystatechange = null;
      $channel$jscomp$1$$.parentNode.removeChild($channel$jscomp$1$$);
      $channel$jscomp$1$$ = null;
      $Channel$$();
      $Channel$$ = null;
    };
    document.documentElement.appendChild($channel$jscomp$1$$);
  } : function($Channel$$) {
    $goog$global$$.setTimeout($Channel$$, 0);
  };
}
;var $cljs$core$async$impl$dispatch$tasks$$ = $cljs$core$async$impl$buffers$ring_buffer$$(32), $cljs$core$async$impl$dispatch$running_QMARK_$$ = !1, $cljs$core$async$impl$dispatch$queued_QMARK_$$ = !1;
function $cljs$core$async$impl$dispatch$process_messages$$() {
  $cljs$core$async$impl$dispatch$running_QMARK_$$ = !0;
  $cljs$core$async$impl$dispatch$queued_QMARK_$$ = !1;
  for (var $count_14335$$ = 0;;) {
    var $m_14336$$ = $cljs$core$async$impl$dispatch$tasks$$.pop();
    if (null != $m_14336$$ && ($m_14336$$.$cljs$core$IFn$_invoke$arity$0$ ? $m_14336$$.$cljs$core$IFn$_invoke$arity$0$() : $m_14336$$.call(null), 1024 > $count_14335$$)) {
      $count_14335$$ += 1;
      continue;
    }
    break;
  }
  $cljs$core$async$impl$dispatch$running_QMARK_$$ = !1;
  return 0 < $cljs$core$async$impl$dispatch$tasks$$.length ? $cljs$core$async$impl$dispatch$queue_dispatcher$$.$cljs$core$IFn$_invoke$arity$0$ ? $cljs$core$async$impl$dispatch$queue_dispatcher$$.$cljs$core$IFn$_invoke$arity$0$() : $cljs$core$async$impl$dispatch$queue_dispatcher$$.call(null) : null;
}
function $cljs$core$async$impl$dispatch$queue_dispatcher$$() {
  if ($cljs$core$async$impl$dispatch$queued_QMARK_$$ && $cljs$core$async$impl$dispatch$running_QMARK_$$) {
    return null;
  }
  $cljs$core$async$impl$dispatch$queued_QMARK_$$ = !0;
  var $JSCompiler_temp$jscomp$614_JSCompiler_temp$jscomp$615$$;
  !($JSCompiler_temp$jscomp$614_JSCompiler_temp$jscomp$615$$ = !$goog$isFunction$$($goog$global$$.setImmediate)) && ($JSCompiler_temp$jscomp$614_JSCompiler_temp$jscomp$615$$ = $goog$global$$.Window && $goog$global$$.Window.prototype) && ($JSCompiler_temp$jscomp$614_JSCompiler_temp$jscomp$615$$ = -1 == $goog$labs$userAgent$util$userAgent_$$.indexOf("Edge") && $goog$global$$.Window.prototype.setImmediate == $goog$global$$.setImmediate);
  $JSCompiler_temp$jscomp$614_JSCompiler_temp$jscomp$615$$ ? ($goog$async$nextTick$setImmediate_$$ || ($goog$async$nextTick$setImmediate_$$ = $goog$async$nextTick$getSetImmediateEmulator_$$()), $goog$async$nextTick$setImmediate_$$($cljs$core$async$impl$dispatch$process_messages$$)) : $goog$global$$.setImmediate($cljs$core$async$impl$dispatch$process_messages$$);
}
function $cljs$core$async$impl$dispatch$run$$($f$jscomp$326$$) {
  $JSCompiler_StaticMethods_unbounded_unshift$$($cljs$core$async$impl$dispatch$tasks$$, $f$jscomp$326$$);
  $cljs$core$async$impl$dispatch$queue_dispatcher$$();
}
;var $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$;
function $cljs$core$async$impl$channels$box$$($val$jscomp$92$$) {
  "undefined" === typeof $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$ && ($cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$ = function($val$jscomp$92$$, $meta14344$$) {
    this.$val$ = $val$jscomp$92$$;
    this.$meta14344$ = $meta14344$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 425984;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($val$jscomp$92$$, $meta14344__$1$$) {
    return new $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$(this.$val$, $meta14344__$1$$);
  }, $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta14344$;
  }, $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$.prototype.$cljs$core$IDeref$_deref$arity$1$ = function() {
    return this.$val$;
  }, $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0val$$, $cljs$core$cst$0sym$0meta14344$$], null);
  }, $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$.$cljs$lang$type$ = !0, $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$.$cljs$lang$ctorStr$ = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels14343", $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$.$cljs$lang$ctorPrWriter$ = function($val$jscomp$92$$, $writer__8618__auto__$jscomp$83$$) {
    return $cljs$core$_write$$($writer__8618__auto__$jscomp$83$$, "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels14343");
  });
  return new $cljs$core$async$impl$channels$t_cljs$0core$0async$0impl$0channels14343$$($val$jscomp$92$$, $cljs$core$PersistentArrayMap$EMPTY$$);
}
function $cljs$core$async$impl$channels$PutBox$$($handler$jscomp$3$$, $val$jscomp$94$$) {
  this.$handler$ = $handler$jscomp$3$$;
  this.$val$ = $val$jscomp$94$$;
}
function $cljs$core$async$impl$channels$put_active_QMARK_$$($box$$) {
  return $cljs$core$async$impl$protocols$active_QMARK_$$($box$$.$handler$);
}
function $cljs$core$async$impl$channels$ManyToManyChannel$$($takes$$, $dirty_takes$$, $puts$$, $dirty_puts$$, $buf$jscomp$8$$, $closed$$, $add_BANG_$$) {
  this.$takes$ = $takes$$;
  this.$dirty_takes$ = $dirty_takes$$;
  this.$puts$ = $puts$$;
  this.$dirty_puts$ = $dirty_puts$$;
  this.$buf$ = $buf$jscomp$8$$;
  this.closed = $closed$$;
  this.$add_BANG_$ = $add_BANG_$$;
}
function $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$$($JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$) {
  for (;;) {
    var $putter_14357$$ = $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$.$puts$.pop();
    if (null != $putter_14357$$) {
      var $put_handler_14358$$ = $putter_14357$$.$handler$, $val_14359$$ = $putter_14357$$.$val$;
      $cljs$core$async$impl$dispatch$run$$(function($JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$) {
        return function() {
          return $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$.$cljs$core$IFn$_invoke$arity$1$ ? $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$.call(null, !0);
        };
      }($put_handler_14358$$.$f$, $put_handler_14358$$, $val_14359$$, $putter_14357$$, $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$));
    }
    break;
  }
  $JSCompiler_StaticMethods_cleanup$$($JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$.$puts$, $cljs$core$constantly$$());
  $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$self$$.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$(null);
}
$cljs$core$async$impl$channels$ManyToManyChannel$$.prototype.$cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3$ = function($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$, $val$jscomp$96$$, $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$) {
  var $self__$jscomp$1121$$ = this, $this$__$1$jscomp$43$$ = this;
  if (null == $val$jscomp$96$$) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Can't put nil in on a channel"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(not (nil? val))")].join(""));
  }
  var $closed__$1$$ = $self__$jscomp$1121$$.closed;
  if ($closed__$1$$) {
    return $cljs$core$async$impl$channels$box$$(!$closed__$1$$);
  }
  if ($cljs$core$truth_$$(function() {
    var $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = $self__$jscomp$1121$$.$buf$;
    return $cljs$core$truth_$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$) ? $cljs$core$not$$($JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$$($self__$jscomp$1121$$.$buf$)) : $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$;
  }())) {
    var $done_QMARK_$$ = $cljs$core$reduced_QMARK_$$($self__$jscomp$1121$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$2$ ? $self__$jscomp$1121$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$2$($self__$jscomp$1121$$.$buf$, $val$jscomp$96$$) : $self__$jscomp$1121$$.$add_BANG_$.call(null, $self__$jscomp$1121$$.$buf$, $val$jscomp$96$$));
    $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = function() {
      for (var $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = $cljs$core$PersistentVector$EMPTY$$;;) {
        if (0 < $self__$jscomp$1121$$.$takes$.length && 0 < $cljs$core$count$$($self__$jscomp$1121$$.$buf$)) {
          var $val$jscomp$96$$ = $self__$jscomp$1121$$.$takes$.pop(), $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = $val$jscomp$96$$.$f$, $G__14377_count__14348_14365$$ = $self__$jscomp$1121$$.$buf$.$buf$.pop(), $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$, function($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$, 
          $val$jscomp$96$$, $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$) {
            return function() {
              return $val$jscomp$96$$.$cljs$core$IFn$_invoke$arity$1$ ? $val$jscomp$96$$.$cljs$core$IFn$_invoke$arity$1$($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$) : $val$jscomp$96$$.call(null, $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$);
            };
          }($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$, $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$, $G__14377_count__14348_14365$$, $val$jscomp$96$$, $done_QMARK_$$, $closed__$1$$, $this$__$1$jscomp$43$$));
        } else {
          return $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$;
        }
      }
    }();
    $done_QMARK_$$ && $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$$($this$__$1$jscomp$43$$);
    if ($cljs$core$seq$$($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$)) {
      $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = $cljs$core$seq$$($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$);
      $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = null;
      for (var $G__14377_count__14348_14365$$ = 0, $G__14375_i__14349_14366$$ = 0;;) {
        if ($G__14375_i__14349_14366$$ < $G__14377_count__14348_14365$$) {
          var $f_14367$$ = $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__14375_i__14349_14366$$);
          $cljs$core$async$impl$dispatch$run$$($f_14367$$);
          $G__14375_i__14349_14366$$ += 1;
        } else {
          if ($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = $cljs$core$seq$$($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$)) {
            $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$, $cljs$core$chunked_seq_QMARK_$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$) ? ($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = $cljs$core$_chunked_first$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$), 
            $G__14375_i__14349_14366$$ = $cljs$core$_chunked_rest$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$), $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$, $G__14377_count__14348_14365$$ = $cljs$core$count$$($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$), $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = 
            $G__14375_i__14349_14366$$) : ($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = $cljs$core$first$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$), $cljs$core$async$impl$dispatch$run$$($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$), $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = 
            $cljs$core$next$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$), $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = null, $G__14377_count__14348_14365$$ = 0), $G__14375_i__14349_14366$$ = 0;
          } else {
            break;
          }
        }
      }
    }
    return $cljs$core$async$impl$channels$box$$(!0);
  }
  $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = function() {
    for (;;) {
      var $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$ = $self__$jscomp$1121$$.$takes$.pop();
      if ($cljs$core$truth_$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$)) {
        if ($cljs$core$truth_$$(!0)) {
          return $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$;
        }
      } else {
        return null;
      }
    }
  }();
  if ($cljs$core$truth_$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$)) {
    return $c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$ = $cljs$core$async$impl$protocols$commit$$($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$), $cljs$core$async$impl$dispatch$run$$(function($G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$) {
      return function() {
        return $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$.$cljs$core$IFn$_invoke$arity$1$($val$jscomp$96$$) : $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$.call(null, $val$jscomp$96$$);
      };
    }($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$, $G__14376_chunk__14347_14364_seq__14346_14373__$1_taker_this$$jscomp$150$$, $closed__$1$$, $this$__$1$jscomp$43$$)), $cljs$core$async$impl$channels$box$$(!0);
  }
  64 < $self__$jscomp$1121$$.$dirty_puts$ ? ($self__$jscomp$1121$$.$dirty_puts$ = 0, $JSCompiler_StaticMethods_cleanup$$($self__$jscomp$1121$$.$puts$, $cljs$core$async$impl$channels$put_active_QMARK_$$)) : $self__$jscomp$1121$$.$dirty_puts$ += 1;
  if ($cljs$core$truth_$$($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$.$cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1$(null))) {
    if (!(1024 > $self__$jscomp$1121$$.$puts$.length)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("No more than "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(1024), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" pending puts are allowed on a single channel."), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" Consider using a windowed buffer.")].join("")), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(\x3c (.-length puts) impl/MAX-QUEUE-SIZE)")].join(""));
    }
    $JSCompiler_StaticMethods_unbounded_unshift$$($self__$jscomp$1121$$.$puts$, new $cljs$core$async$impl$channels$PutBox$$($c__8871__auto___14374_f_14379_handler$jscomp$5_seq__14346_14363_take_cb_take_cbs_temp__5278__auto___14372$$, $val$jscomp$96$$));
  }
  return null;
};
$cljs$core$async$impl$channels$ManyToManyChannel$$.prototype.$cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2$ = function($this$$jscomp$151$$, $handler$jscomp$6$$) {
  var $self__$jscomp$1122$$ = this;
  if (null != $self__$jscomp$1122$$.$buf$ && 0 < $cljs$core$count$$($self__$jscomp$1122$$.$buf$)) {
    var $put_cb_temp__5276__auto__$jscomp$17$$ = $handler$jscomp$6$$.$f$;
    if ($cljs$core$truth_$$($put_cb_temp__5276__auto__$jscomp$17$$)) {
      var $has_val_putter_val$jscomp$97$$ = $self__$jscomp$1122$$.$buf$.$buf$.pop();
      var $vec__14350$$ = 0 < $self__$jscomp$1122$$.$puts$.length ? function() {
        for (var $this$$jscomp$151$$ = $cljs$core$PersistentVector$EMPTY$$;;) {
          var $handler$jscomp$6$$ = $self__$jscomp$1122$$.$puts$.pop(), $put_cb_temp__5276__auto__$jscomp$17$$ = $handler$jscomp$6$$.$handler$, $handler$jscomp$6$$ = $handler$jscomp$6$$.$val$, $put_cb_temp__5276__auto__$jscomp$17$$ = $put_cb_temp__5276__auto__$jscomp$17$$.$f$, $this$$jscomp$151$$ = $cljs$core$truth_$$($put_cb_temp__5276__auto__$jscomp$17$$) ? $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$151$$, $put_cb_temp__5276__auto__$jscomp$17$$) : $this$$jscomp$151$$, $handler$jscomp$6$$ = 
          $cljs$core$truth_$$($put_cb_temp__5276__auto__$jscomp$17$$) ? $cljs$core$reduced_QMARK_$$($self__$jscomp$1122$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$2$ ? $self__$jscomp$1122$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$2$($self__$jscomp$1122$$.$buf$, $handler$jscomp$6$$) : $self__$jscomp$1122$$.$add_BANG_$.call(null, $self__$jscomp$1122$$.$buf$, $handler$jscomp$6$$)) : null;
          if (!($cljs$core$not$$($handler$jscomp$6$$) && $cljs$core$not$$($JSCompiler_StaticMethods_cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1$$($self__$jscomp$1122$$.$buf$)) && 0 < $self__$jscomp$1122$$.$puts$.length)) {
            return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$handler$jscomp$6$$, $this$$jscomp$151$$], null);
          }
        }
      }() : null, $done_QMARK_$jscomp$2$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__14350$$, 0, null), $cbs$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__14350$$, 1, null);
      $cljs$core$truth_$$($done_QMARK_$jscomp$2$$) && $JSCompiler_StaticMethods_cljs$core$async$impl$channels$MMC$abort$arity$1$$(this);
      for (var $c__8871__auto___14396_seq__14353_14385$$ = $cljs$core$seq$$($cbs$$), $G__14398_chunk__14354_14386$$ = null, $G__14399_count__14355_14387$$ = 0, $G__14397_i__14356_14388$$ = 0;;) {
        if ($G__14397_i__14356_14388$$ < $G__14399_count__14355_14387$$) {
          var $cb_14389_seq__14353_14395__$1$$ = $G__14398_chunk__14354_14386$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__14397_i__14356_14388$$);
          $cljs$core$async$impl$dispatch$run$$(function($this$$jscomp$151$$, $handler$jscomp$6$$, $self__$jscomp$1122$$, $put_cb_temp__5276__auto__$jscomp$17$$, $has_val_putter_val$jscomp$97$$) {
            return function() {
              return $has_val_putter_val$jscomp$97$$.$cljs$core$IFn$_invoke$arity$1$ ? $has_val_putter_val$jscomp$97$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $has_val_putter_val$jscomp$97$$.call(null, !0);
            };
          }($c__8871__auto___14396_seq__14353_14385$$, $G__14398_chunk__14354_14386$$, $G__14399_count__14355_14387$$, $G__14397_i__14356_14388$$, $cb_14389_seq__14353_14395__$1$$, $has_val_putter_val$jscomp$97$$, $vec__14350$$, $done_QMARK_$jscomp$2$$, $cbs$$, $put_cb_temp__5276__auto__$jscomp$17$$, $put_cb_temp__5276__auto__$jscomp$17$$, this));
          $G__14397_i__14356_14388$$ += 1;
        } else {
          var $temp__5278__auto___14394$$ = $cljs$core$seq$$($c__8871__auto___14396_seq__14353_14385$$);
          if ($temp__5278__auto___14394$$) {
            $cb_14389_seq__14353_14395__$1$$ = $temp__5278__auto___14394$$;
            if ($cljs$core$chunked_seq_QMARK_$$($cb_14389_seq__14353_14395__$1$$)) {
              $c__8871__auto___14396_seq__14353_14385$$ = $cljs$core$_chunked_first$$($cb_14389_seq__14353_14395__$1$$), $G__14397_i__14356_14388$$ = $cljs$core$_chunked_rest$$($cb_14389_seq__14353_14395__$1$$), $G__14398_chunk__14354_14386$$ = $c__8871__auto___14396_seq__14353_14385$$, $G__14399_count__14355_14387$$ = $cljs$core$count$$($c__8871__auto___14396_seq__14353_14385$$), $c__8871__auto___14396_seq__14353_14385$$ = $G__14397_i__14356_14388$$;
            } else {
              var $cb_14401$$ = $cljs$core$first$$($cb_14389_seq__14353_14395__$1$$);
              $cljs$core$async$impl$dispatch$run$$(function($this$$jscomp$151$$, $handler$jscomp$6$$, $self__$jscomp$1122$$, $put_cb_temp__5276__auto__$jscomp$17$$, $has_val_putter_val$jscomp$97$$) {
                return function() {
                  return $has_val_putter_val$jscomp$97$$.$cljs$core$IFn$_invoke$arity$1$ ? $has_val_putter_val$jscomp$97$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $has_val_putter_val$jscomp$97$$.call(null, !0);
                };
              }($c__8871__auto___14396_seq__14353_14385$$, $G__14398_chunk__14354_14386$$, $G__14399_count__14355_14387$$, $G__14397_i__14356_14388$$, $cb_14401$$, $cb_14389_seq__14353_14395__$1$$, $temp__5278__auto___14394$$, $has_val_putter_val$jscomp$97$$, $vec__14350$$, $done_QMARK_$jscomp$2$$, $cbs$$, $put_cb_temp__5276__auto__$jscomp$17$$, $put_cb_temp__5276__auto__$jscomp$17$$, this));
              $c__8871__auto___14396_seq__14353_14385$$ = $cljs$core$next$$($cb_14389_seq__14353_14395__$1$$);
              $G__14398_chunk__14354_14386$$ = null;
              $G__14399_count__14355_14387$$ = 0;
            }
            $G__14397_i__14356_14388$$ = 0;
          } else {
            break;
          }
        }
      }
      return $cljs$core$async$impl$channels$box$$($has_val_putter_val$jscomp$97$$);
    }
    return null;
  }
  $has_val_putter_val$jscomp$97$$ = function() {
    for (;;) {
      var $this$$jscomp$151$$ = $self__$jscomp$1122$$.$puts$.pop();
      if ($cljs$core$truth_$$($this$$jscomp$151$$)) {
        if ($cljs$core$async$impl$protocols$active_QMARK_$$($this$$jscomp$151$$.$handler$)) {
          return $this$$jscomp$151$$;
        }
      } else {
        return null;
      }
    }
  }();
  if ($cljs$core$truth_$$($has_val_putter_val$jscomp$97$$)) {
    return $put_cb_temp__5276__auto__$jscomp$17$$ = $cljs$core$async$impl$protocols$commit$$($has_val_putter_val$jscomp$97$$.$handler$), $cljs$core$async$impl$dispatch$run$$(function($this$$jscomp$151$$) {
      return function() {
        return $this$$jscomp$151$$.$cljs$core$IFn$_invoke$arity$1$ ? $this$$jscomp$151$$.$cljs$core$IFn$_invoke$arity$1$(!0) : $this$$jscomp$151$$.call(null, !0);
      };
    }($put_cb_temp__5276__auto__$jscomp$17$$, $has_val_putter_val$jscomp$97$$, this)), $cljs$core$async$impl$channels$box$$($has_val_putter_val$jscomp$97$$.$val$);
  }
  if ($cljs$core$truth_$$($self__$jscomp$1122$$.closed)) {
    return $cljs$core$truth_$$($self__$jscomp$1122$$.$buf$) && ($self__$jscomp$1122$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$1$ ? $self__$jscomp$1122$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$1$($self__$jscomp$1122$$.$buf$) : $self__$jscomp$1122$$.$add_BANG_$.call(null, $self__$jscomp$1122$$.$buf$)), $cljs$core$truth_$$($cljs$core$truth_$$(!0) ? $handler$jscomp$6$$.$f$ : !0) ? ($has_val_putter_val$jscomp$97$$ = function() {
      var $this$$jscomp$151$$ = $self__$jscomp$1122$$.$buf$;
      return $cljs$core$truth_$$($this$$jscomp$151$$) ? 0 < $cljs$core$count$$($self__$jscomp$1122$$.$buf$) : $this$$jscomp$151$$;
    }(), $has_val_putter_val$jscomp$97$$ = $cljs$core$truth_$$($has_val_putter_val$jscomp$97$$) ? $self__$jscomp$1122$$.$buf$.$buf$.pop() : null, $cljs$core$async$impl$channels$box$$($has_val_putter_val$jscomp$97$$)) : null;
  }
  64 < $self__$jscomp$1122$$.$dirty_takes$ ? ($self__$jscomp$1122$$.$dirty_takes$ = 0, $JSCompiler_StaticMethods_cleanup$$($self__$jscomp$1122$$.$takes$, $cljs$core$async$impl$protocols$active_QMARK_$$)) : $self__$jscomp$1122$$.$dirty_takes$ += 1;
  if ($cljs$core$truth_$$($handler$jscomp$6$$.$cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1$(null))) {
    if (!(1024 > $self__$jscomp$1122$$.$takes$.length)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("No more than "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(1024), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" pending takes are allowed on a single channel.")].join("")), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(\x3c (.-length takes) impl/MAX-QUEUE-SIZE)")].join(""));
    }
    $JSCompiler_StaticMethods_unbounded_unshift$$($self__$jscomp$1122$$.$takes$, $handler$jscomp$6$$);
  }
  return null;
};
$cljs$core$async$impl$channels$ManyToManyChannel$$.prototype.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$ = function() {
  var $self__$jscomp$1124$$ = this;
  if (!$self__$jscomp$1124$$.closed) {
    for ($self__$jscomp$1124$$.closed = !0, $cljs$core$truth_$$(function() {
      var $taker_14406$$ = $self__$jscomp$1124$$.$buf$;
      return $cljs$core$truth_$$($taker_14406$$) ? 0 === $self__$jscomp$1124$$.$puts$.length : $taker_14406$$;
    }()) && ($self__$jscomp$1124$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$1$ ? $self__$jscomp$1124$$.$add_BANG_$.$cljs$core$IFn$_invoke$arity$1$($self__$jscomp$1124$$.$buf$) : $self__$jscomp$1124$$.$add_BANG_$.call(null, $self__$jscomp$1124$$.$buf$));;) {
      var $taker_14406$$ = $self__$jscomp$1124$$.$takes$.pop();
      if (null != $taker_14406$$) {
        var $take_cb_14407$$ = $taker_14406$$.$f$, $val_14408$$ = $cljs$core$truth_$$(function() {
          var $taker_14406$$ = $self__$jscomp$1124$$.$buf$;
          return $cljs$core$truth_$$($taker_14406$$) ? 0 < $cljs$core$count$$($self__$jscomp$1124$$.$buf$) : $taker_14406$$;
        }()) ? $self__$jscomp$1124$$.$buf$.$buf$.pop() : null;
        $cljs$core$async$impl$dispatch$run$$(function($self__$jscomp$1124$$, $taker_14406$$) {
          return function() {
            return $self__$jscomp$1124$$.$cljs$core$IFn$_invoke$arity$1$ ? $self__$jscomp$1124$$.$cljs$core$IFn$_invoke$arity$1$($taker_14406$$) : $self__$jscomp$1124$$.call(null, $taker_14406$$);
          };
        }($take_cb_14407$$, $val_14408$$, $taker_14406$$, this));
      } else {
        break;
      }
    }
  }
  return null;
};
function $cljs$core$async$impl$channels$ex_handler$$($ex$jscomp$4$$) {
  console.log($ex$jscomp$4$$);
  return null;
}
function $cljs$core$async$impl$channels$handle$$($buf$jscomp$10$$, $t$jscomp$26$$) {
  var $else$$$ = ($cljs$core$truth_$$(null) ? null : $cljs$core$async$impl$channels$ex_handler$$).call(null, $t$jscomp$26$$);
  return null == $else$$$ ? $buf$jscomp$10$$ : $cljs$core$async$impl$protocols$add_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($buf$jscomp$10$$, $else$$$);
}
function $cljs$core$async$impl$channels$chan$cljs$0core$0IFn$0_invoke$0arity$03$$($buf$jscomp$13$$) {
  return new $cljs$core$async$impl$channels$ManyToManyChannel$$($cljs$core$async$impl$buffers$ring_buffer$$(32), 0, $cljs$core$async$impl$buffers$ring_buffer$$(32), 0, $buf$jscomp$13$$, !1, function() {
    return function($buf$jscomp$13$$) {
      return function() {
        function $add_BANG_$jscomp$3$$($add_BANG_$jscomp$3$$, $G__14418__2$$) {
          try {
            return $buf$jscomp$13$$.$cljs$core$IFn$_invoke$arity$2$ ? $buf$jscomp$13$$.$cljs$core$IFn$_invoke$arity$2$($add_BANG_$jscomp$3$$, $G__14418__2$$) : $buf$jscomp$13$$.call(null, $add_BANG_$jscomp$3$$, $G__14418__2$$);
          } catch ($e14413$$) {
            return $cljs$core$async$impl$channels$handle$$($add_BANG_$jscomp$3$$, $e14413$$);
          }
        }
        function $G__14418__1$$($add_BANG_$jscomp$3$$) {
          try {
            return $buf$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$ ? $buf$jscomp$13$$.$cljs$core$IFn$_invoke$arity$1$($add_BANG_$jscomp$3$$) : $buf$jscomp$13$$.call(null, $add_BANG_$jscomp$3$$);
          } catch ($e14412$$) {
            return $cljs$core$async$impl$channels$handle$$($add_BANG_$jscomp$3$$, $e14412$$);
          }
        }
        var $G__14418$$ = null, $G__14418$$ = function($buf$jscomp$13$$, $G__14418__2$$) {
          switch(arguments.length) {
            case 1:
              return $G__14418__1$$.call(this, $buf$jscomp$13$$);
            case 2:
              return $add_BANG_$jscomp$3$$.call(this, $buf$jscomp$13$$, $G__14418__2$$);
          }
          throw Error("Invalid arity: " + (arguments.length - 1));
        };
        $G__14418$$.$cljs$core$IFn$_invoke$arity$1$ = $G__14418__1$$;
        $G__14418$$.$cljs$core$IFn$_invoke$arity$2$ = $add_BANG_$jscomp$3$$;
        return $G__14418$$;
      }();
    }($cljs$core$truth_$$(null) ? null.$cljs$core$IFn$_invoke$arity$1$ ? null.$cljs$core$IFn$_invoke$arity$1$($cljs$core$async$impl$protocols$add_BANG_$$) : null.call(null, $cljs$core$async$impl$protocols$add_BANG_$$) : $cljs$core$async$impl$protocols$add_BANG_$$);
  }());
}
;var $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$;
function $cljs$core$async$impl$ioc_helpers$fn_handler$$($f$jscomp$328$$) {
  "undefined" === typeof $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$ && ($cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$ = function($f$jscomp$328$$, $meta16021$$) {
    this.$f$ = $f$jscomp$328$$;
    this.$meta16021$ = $meta16021$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($f$jscomp$328$$, $meta16021__$1$$) {
    return new $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$(this.$f$, $meta16021__$1$$);
  }, $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta16021$;
  }, $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.prototype.$cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1$ = function() {
    return !0;
  }, $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.prototype.$cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1$ = function() {
    return !0;
  }, $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.prototype.$cljs$core$async$impl$protocols$Handler$commit$arity$1$ = function() {
    return this.$f$;
  }, $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0f$$, $cljs$core$cst$0sym$0meta16021$$], null);
  }, $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.$cljs$lang$type$ = !0, $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.$cljs$lang$ctorStr$ = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers16020", $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$.$cljs$lang$ctorPrWriter$ = function($f$jscomp$328$$, $writer__8618__auto__$jscomp$86$$) {
    return $cljs$core$_write$$($writer__8618__auto__$jscomp$86$$, "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers16020");
  });
  return new $cljs$core$async$impl$ioc_helpers$t_cljs$0core$0async$0impl$0ioc_helpers16020$$($f$jscomp$328$$, $cljs$core$PersistentArrayMap$EMPTY$$);
}
function $cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped$$($state$jscomp$6$$) {
  try {
    return $state$jscomp$6$$[0].call(null, $state$jscomp$6$$);
  } catch ($e16024$$) {
    if ($e16024$$ instanceof Object) {
      var $ex$jscomp$5$$ = $e16024$$;
      $state$jscomp$6$$[6].$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$(null);
      throw $ex$jscomp$5$$;
    }
    throw $e16024$$;
  }
}
function $cljs$core$async$impl$ioc_helpers$take_BANG_$$($state$jscomp$7$$, $c$jscomp$173$$) {
  var $temp__5276__auto__$jscomp$20$$ = $c$jscomp$173$$.$cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2$(null, $cljs$core$async$impl$ioc_helpers$fn_handler$$(function($c$jscomp$173$$) {
    $state$jscomp$7$$[2] = $c$jscomp$173$$;
    $state$jscomp$7$$[1] = 4;
    return $cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped$$($state$jscomp$7$$);
  }));
  return $cljs$core$truth_$$($temp__5276__auto__$jscomp$20$$) ? ($state$jscomp$7$$[2] = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($temp__5276__auto__$jscomp$20$$) : $cljs$core$deref$$.call(null, $temp__5276__auto__$jscomp$20$$), $state$jscomp$7$$[1] = 4, $cljs$core$cst$0kw$0recur$$) : null;
}
function $cljs$core$async$impl$ioc_helpers$return_chan$$($state$jscomp$9$$, $value$jscomp$106$$) {
  var $c$jscomp$175$$ = $state$jscomp$9$$[6];
  null != $value$jscomp$106$$ && $c$jscomp$175$$.$cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3$(0, $value$jscomp$106$$, $cljs$core$async$impl$ioc_helpers$fn_handler$$(function() {
    return function() {
      return null;
    };
  }($c$jscomp$175$$)));
  $c$jscomp$175$$.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$(null);
  return $c$jscomp$175$$;
}
function $cljs$core$async$impl$ioc_helpers$process_exception$$($state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$) {
  for (;;) {
    var $exception_frame$$ = $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[4], $catch_block$jscomp$3$$ = $cljs$core$cst$0kw$0catch_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$), $catch_exception$jscomp$3$$ = $cljs$core$cst$0kw$0catch_DASH_exception$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$), $exception$jscomp$2$$ = $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[5];
    if ($cljs$core$truth_$$(function() {
      var $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ = $exception$jscomp$2$$;
      return $cljs$core$truth_$$($state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$) ? $cljs$core$not$$($exception_frame$$) : $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$;
    }())) {
      throw $exception$jscomp$2$$;
    }
    if ($cljs$core$truth_$$(function() {
      var $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ = $exception$jscomp$2$$;
      return $cljs$core$truth_$$($state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$) ? ($state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ = $catch_block$jscomp$3$$, $cljs$core$truth_$$($state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$) ? $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0default$$, $catch_exception$jscomp$3$$) || $exception$jscomp$2$$ instanceof $catch_exception$jscomp$3$$ : $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$) : 
      $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$;
    }())) {
      $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[1] = $catch_block$jscomp$3$$;
      $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[2] = $exception$jscomp$2$$;
      $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[5] = null;
      $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[4] = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($exception_frame$$, $cljs$core$cst$0kw$0catch_DASH_block$$, null, $cljs$core$array_seq$$([$cljs$core$cst$0kw$0catch_DASH_exception$$, null], 0));
      break;
    }
    if ($cljs$core$truth_$$(function() {
      var $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ = $exception$jscomp$2$$;
      return $cljs$core$truth_$$($state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$) ? $cljs$core$not$$($catch_block$jscomp$3$$) && $cljs$core$not$$($cljs$core$cst$0kw$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$)) : $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$;
    }())) {
      $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[4] = $cljs$core$cst$0kw$0prev$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
    } else {
      if ($cljs$core$truth_$$(function() {
        var $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ = $exception$jscomp$2$$;
        return $cljs$core$truth_$$($state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$) ? ($state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ = $cljs$core$not$$($catch_block$jscomp$3$$)) ? $cljs$core$cst$0kw$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$) : $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ : $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$;
      }())) {
        $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[1] = $cljs$core$cst$0kw$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
        $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[4] = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($exception_frame$$, $cljs$core$cst$0kw$0finally_DASH_block$$, null);
        break;
      }
      if ($cljs$core$truth_$$(function() {
        var $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ = $cljs$core$not$$($exception$jscomp$2$$);
        return $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$ ? $cljs$core$cst$0kw$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$) : $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$;
      }())) {
        $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[1] = $cljs$core$cst$0kw$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
        $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[4] = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($exception_frame$$, $cljs$core$cst$0kw$0finally_DASH_block$$, null);
        break;
      }
      if ($cljs$core$not$$($exception$jscomp$2$$) && $cljs$core$not$$($cljs$core$cst$0kw$0finally_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$))) {
        $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[1] = $cljs$core$cst$0kw$0continue_DASH_block$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
        $state$jscomp$11_statearr_16062_statearr_16064_statearr_16065_statearr_16066$$[4] = $cljs$core$cst$0kw$0prev$$.$cljs$core$IFn$_invoke$arity$1$($exception_frame$$);
        break;
      }
      throw Error("No matching clause");
    }
  }
}
;for (var $arr$jscomp$inline_645$$ = Array(1), $i_16086$jscomp$inline_646$$ = 0;;) {
  if ($i_16086$jscomp$inline_646$$ < $arr$jscomp$inline_645$$.length) {
    $arr$jscomp$inline_645$$[$i_16086$jscomp$inline_646$$] = null, $i_16086$jscomp$inline_646$$ += 1;
  } else {
    break;
  }
}
;function $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$) {
  $JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$, 0) ? null : $JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$;
  if ($cljs$core$truth_$$(null) && !$cljs$core$truth_$$($JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$)) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("buffer must be supplied when transducer is"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("buf-or-n")].join(""));
  }
  $JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$ = "number" === typeof $JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$ ? new $cljs$core$async$impl$buffers$FixedBuffer$$($cljs$core$async$impl$buffers$ring_buffer$$($JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$), $JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$) : $JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$;
  return $cljs$core$async$impl$channels$chan$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp$jscomp$521_buf_or_n$jscomp$2_buf_or_n__$1$$);
}
var $cljs$core$async$fhnop$$ = function($f$jscomp$331$$) {
  "undefined" === typeof $cljs$core$async$t_cljs$0core$0async16190$$ && ($cljs$core$async$t_cljs$0core$0async16190$$ = function($f$jscomp$331$$, $blockable$jscomp$1$$, $meta16191$$) {
    this.$f$ = $f$jscomp$331$$;
    this.$blockable$ = $blockable$jscomp$1$$;
    this.$meta16191$ = $meta16191$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$core$async$t_cljs$0core$0async16190$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($f$jscomp$331$$, $meta16191__$1$$) {
    return new $cljs$core$async$t_cljs$0core$0async16190$$(this.$f$, this.$blockable$, $meta16191__$1$$);
  }, $cljs$core$async$t_cljs$0core$0async16190$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta16191$;
  }, $cljs$core$async$t_cljs$0core$0async16190$$.prototype.$cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1$ = function() {
    return !0;
  }, $cljs$core$async$t_cljs$0core$0async16190$$.prototype.$cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1$ = function() {
    return this.$blockable$;
  }, $cljs$core$async$t_cljs$0core$0async16190$$.prototype.$cljs$core$async$impl$protocols$Handler$commit$arity$1$ = function() {
    return this.$f$;
  }, $cljs$core$async$t_cljs$0core$0async16190$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0f$$, $cljs$core$cst$0sym$0blockable$$, $cljs$core$cst$0sym$0meta16191$$], null);
  }, $cljs$core$async$t_cljs$0core$0async16190$$.$cljs$lang$type$ = !0, $cljs$core$async$t_cljs$0core$0async16190$$.$cljs$lang$ctorStr$ = "cljs.core.async/t_cljs$core$async16190", $cljs$core$async$t_cljs$0core$0async16190$$.$cljs$lang$ctorPrWriter$ = function($f$jscomp$331$$, $writer__8618__auto__$jscomp$89$$) {
    return $cljs$core$_write$$($writer__8618__auto__$jscomp$89$$, "cljs.core.async/t_cljs$core$async16190");
  });
  return new $cljs$core$async$t_cljs$0core$0async16190$$($f$jscomp$331$$, !0, $cljs$core$PersistentArrayMap$EMPTY$$);
}(function() {
  return null;
});
function $cljs$core$async$put_BANG_$cljs$0core$0IFn$0_invoke$0arity$02$$($port$jscomp$6$$, $val$jscomp$106$$) {
  var $temp__5276__auto__$jscomp$23$$ = $cljs$core$async$impl$protocols$put_BANG_$$($port$jscomp$6$$, $val$jscomp$106$$, $cljs$core$async$fhnop$$);
  return $cljs$core$truth_$$($temp__5276__auto__$jscomp$23$$) ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($temp__5276__auto__$jscomp$23$$) : $cljs$core$deref$$.call(null, $temp__5276__auto__$jscomp$23$$) : !0;
}
;$cljs$core$PersistentHashMap$fromArrays$$([$cljs$core$cst$0kw$0unexpected_DASH_empty_DASH_selector$$, $cljs$core$cst$0kw$0warning_DASH_reporting$$, $cljs$core$cst$0kw$0use_DASH_envelope$$, $cljs$core$cst$0kw$0error_DASH_reporting$$, $cljs$core$cst$0kw$0expected_DASH_function_DASH_value$$, $cljs$core$cst$0kw$0child_DASH_factory$$, $cljs$core$cst$0kw$0invalid_DASH_selector$$, $cljs$core$cst$0kw$0unexpected_DASH_punching_DASH_selector$$, $cljs$core$cst$0kw$0throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites$$, 
$cljs$core$cst$0kw$0unexpected_DASH_object_DASH_value$$, $cljs$core$cst$0kw$0unexpected_DASH_soft_DASH_selector$$, $cljs$core$cst$0kw$0missing_DASH_object_DASH_key$$], [$cljs$core$cst$0kw$0warn$$, $cljs$core$cst$0kw$0console$$, !0, $cljs$core$cst$0kw$0throw$$, $cljs$core$cst$0kw$0error$$, $cljs$core$cst$0kw$0js_DASH_obj$$, $cljs$core$cst$0kw$0error$$, $cljs$core$cst$0kw$0warn$$, !0, $cljs$core$cst$0kw$0error$$, $cljs$core$cst$0kw$0warn$$, $cljs$core$cst$0kw$0error$$]);
function $oops$messages$post_process_message$$($msg$jscomp$5$$) {
  return [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Oops"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(", "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($msg$jscomp$5$$)].join("");
}
if ("undefined" === typeof $oops$messages$runtime_message$$) {
  var $oops$messages$runtime_message$$ = function() {
    var $method_table__8991__auto__$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($cljs$core$PersistentArrayMap$EMPTY$$) : $cljs$core$atom$$.call(null, $cljs$core$PersistentArrayMap$EMPTY$$), $prefer_table__8992__auto__$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($cljs$core$PersistentArrayMap$EMPTY$$) : $cljs$core$atom$$.call(null, $cljs$core$PersistentArrayMap$EMPTY$$), 
    $method_cache__8993__auto__$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($cljs$core$PersistentArrayMap$EMPTY$$) : $cljs$core$atom$$.call(null, $cljs$core$PersistentArrayMap$EMPTY$$), $cached_hierarchy__8994__auto__$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($cljs$core$PersistentArrayMap$EMPTY$$) : $cljs$core$atom$$.call(null, $cljs$core$PersistentArrayMap$EMPTY$$), 
    $hierarchy__8995__auto__$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($cljs$core$PersistentArrayMap$EMPTY$$, $cljs$core$cst$0kw$0hierarchy$$, $cljs$core$get_global_hierarchy$$());
    return new $cljs$core$MultiFn$$($cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$("oops.messages", "runtime-message"), function() {
      return function() {
        function $method_table__8991__auto__$$($method_table__8991__auto__$$, $prefer_table__8992__auto__$$) {
          if (1 < arguments.length) {
            for (var $method_cache__8993__auto__$$ = 0, $cached_hierarchy__8994__auto__$$ = Array(arguments.length - 1); $method_cache__8993__auto__$$ < $cached_hierarchy__8994__auto__$$.length;) {
              $cached_hierarchy__8994__auto__$$[$method_cache__8993__auto__$$] = arguments[$method_cache__8993__auto__$$ + 1], ++$method_cache__8993__auto__$$;
            }
          }
          return $method_table__8991__auto__$$;
        }
        $method_table__8991__auto__$$.$cljs$lang$maxFixedArity$ = 1;
        $method_table__8991__auto__$$.$cljs$lang$applyTo$ = function($method_table__8991__auto__$$) {
          var $prefer_table__8992__auto__$$ = $cljs$core$first$$($method_table__8991__auto__$$);
          $cljs$core$rest$$($method_table__8991__auto__$$);
          return $prefer_table__8992__auto__$$;
        };
        $method_table__8991__auto__$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($method_table__8991__auto__$$) {
          return $method_table__8991__auto__$$;
        };
        return $method_table__8991__auto__$$;
      }();
    }($method_table__8991__auto__$$, $prefer_table__8992__auto__$$, $method_cache__8993__auto__$$, $cached_hierarchy__8994__auto__$$, $hierarchy__8995__auto__$$), $cljs$core$cst$0kw$0default$$, $hierarchy__8995__auto__$$, $method_table__8991__auto__$$, $prefer_table__8992__auto__$$, $method_cache__8993__auto__$$, $cached_hierarchy__8994__auto__$$);
  }();
}
$JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$$($cljs$core$cst$0kw$0unexpected_DASH_object_DASH_value$$, function($_type$$, $info$jscomp$2$$) {
  var $map__20080__$1_path$jscomp$16$$ = null != $info$jscomp$2$$ && ($info$jscomp$2$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $info$jscomp$2$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $info$jscomp$2$$) : $info$jscomp$2$$, $flavor$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__20080__$1_path$jscomp$16$$, $cljs$core$cst$0kw$0flavor$$), $map__20080__$1_path$jscomp$16$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__20080__$1_path$jscomp$16$$, 
  $cljs$core$cst$0kw$0path$$);
  return $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$ ? $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Unexpected object value ("), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($flavor$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(")"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$empty_QMARK_$$($map__20080__$1_path$jscomp$16$$) ? null : [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" on key path '"), 
  $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($map__20080__$1_path$jscomp$16$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'")].join(""))].join("")) : $oops$messages$post_process_message$$.call(null, [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Unexpected object value ("), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($flavor$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(")"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$empty_QMARK_$$($map__20080__$1_path$jscomp$16$$) ? 
  null : [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" on key path '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($map__20080__$1_path$jscomp$16$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'")].join(""))].join(""));
});
$JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$$($cljs$core$cst$0kw$0expected_DASH_function_DASH_value$$, function($_type$jscomp$1$$, $info$jscomp$3$$) {
  var $fn$jscomp$10_map__20082__$1$$ = null != $info$jscomp$3$$ && ($info$jscomp$3$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $info$jscomp$3$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $info$jscomp$3$$) : $info$jscomp$3$$, $soft_QMARK_$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($fn$jscomp$10_map__20082__$1$$, $cljs$core$cst$0kw$0soft_QMARK_$$), $path$jscomp$17$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($fn$jscomp$10_map__20082__$1$$, 
  $cljs$core$cst$0kw$0path$$), $fn$jscomp$10_map__20082__$1$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($fn$jscomp$10_map__20082__$1$$, $cljs$core$cst$0kw$0fn$$);
  return $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$ ? $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Expected a function"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$truth_$$($soft_QMARK_$$) ? "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" or nil") : null), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$empty_QMARK_$$($path$jscomp$17$$) ? null : [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" on key path '"), 
  $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($path$jscomp$17$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'")].join("")), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(", got \x3c"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($goog$typeOf$$($fn$jscomp$10_map__20082__$1$$)), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\x3e instead")].join("")) : $oops$messages$post_process_message$$.call(null, [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Expected a function"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$truth_$$($soft_QMARK_$$) ? 
  "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" or nil") : null), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$empty_QMARK_$$($path$jscomp$17$$) ? null : [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" on key path '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($path$jscomp$17$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'")].join("")), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(", got \x3c"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($goog$typeOf$$($fn$jscomp$10_map__20082__$1$$)), 
  $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\x3e instead")].join(""));
});
$JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$$($cljs$core$cst$0kw$0missing_DASH_object_DASH_key$$, function($_type$jscomp$2$$, $info$jscomp$4$$) {
  var $map__20084__$1_path$jscomp$18$$ = null != $info$jscomp$4$$ && ($info$jscomp$4$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $info$jscomp$4$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $info$jscomp$4$$) : $info$jscomp$4$$, $key$jscomp$125$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__20084__$1_path$jscomp$18$$, $cljs$core$cst$0kw$0key$$), $map__20084__$1_path$jscomp$18$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__20084__$1_path$jscomp$18$$, 
  $cljs$core$cst$0kw$0path$$);
  return $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$ ? $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Missing expected object key '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($key$jscomp$125$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$empty_QMARK_$$($map__20084__$1_path$jscomp$18$$) || $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($map__20084__$1_path$jscomp$18$$, 
  $key$jscomp$125$$) ? null : [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" on key path '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($map__20084__$1_path$jscomp$18$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'")].join(""))].join("")) : $oops$messages$post_process_message$$.call(null, [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Missing expected object key '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($key$jscomp$125$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'"), 
  $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$empty_QMARK_$$($map__20084__$1_path$jscomp$18$$) || $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($map__20084__$1_path$jscomp$18$$, $key$jscomp$125$$) ? null : [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" on key path '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($map__20084__$1_path$jscomp$18$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'")].join(""))].join(""));
});
$JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$$($cljs$core$cst$0kw$0invalid_DASH_selector$$, function() {
  return $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$ ? $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$("Invalid selector") : $oops$messages$post_process_message$$.call(null, "Invalid selector");
});
$JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$$($cljs$core$cst$0kw$0unexpected_DASH_empty_DASH_selector$$, function() {
  return $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$ ? $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$("" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Unexpected empty selector")) : $oops$messages$post_process_message$$.call(null, "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Unexpected empty selector"));
});
$JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$$($cljs$core$cst$0kw$0unexpected_DASH_punching_DASH_selector$$, function() {
  return $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$ ? $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$("" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$('Unexpected punching selector ("!" makes sense only with oset!)')) : $oops$messages$post_process_message$$.call(null, "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$('Unexpected punching selector ("!" makes sense only with oset!)'));
});
$JSCompiler_StaticMethods_cljs$core$IMultiFn$_add_method$arity$3$$($cljs$core$cst$0kw$0unexpected_DASH_soft_DASH_selector$$, function() {
  return $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$ ? $oops$messages$post_process_message$$.$cljs$core$IFn$_invoke$arity$1$("" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$('Unexpected soft selector ("?" does not make sense with oset!)')) : $oops$messages$post_process_message$$.call(null, "" + $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$('Unexpected soft selector ("?" does not make sense with oset!)'));
});
var $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$, $cljs$spec$alpha$conform_STAR_$$ = function $cljs$spec$alpha$conform_STAR_$$($spec$$, $x$jscomp$624$$) {
  if (null != $spec$$ && null != $spec$$.$cljs$spec$alpha$Spec$conform_STAR_$arity$2$) {
    return $spec$$.$cljs$spec$alpha$Spec$conform_STAR_$arity$2$($spec$$, $x$jscomp$624$$);
  }
  var $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$ = $cljs$spec$alpha$conform_STAR_$$[$goog$typeOf$$(null == $spec$$ ? null : $spec$$)];
  if (null != $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$) {
    return $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$.$cljs$core$IFn$_invoke$arity$2$($spec$$, $x$jscomp$624$$) : $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$.call(null, $spec$$, $x$jscomp$624$$);
  }
  $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$ = $cljs$spec$alpha$conform_STAR_$$._;
  if (null != $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$) {
    return $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$.$cljs$core$IFn$_invoke$arity$2$($spec$$, $x$jscomp$624$$) : $m__8679__auto__$jscomp$149_m__8679__auto____$1$jscomp$149$$.call(null, $spec$$, $x$jscomp$624$$);
  }
  throw $cljs$core$missing_protocol$$("Spec.conform*", $spec$$);
}, $cljs$spec$alpha$with_gen_STAR_$$ = function $cljs$spec$alpha$with_gen_STAR_$$($spec$jscomp$4$$, $gfn$jscomp$1$$) {
  if (null != $spec$jscomp$4$$ && null != $spec$jscomp$4$$.$cljs$spec$alpha$Spec$with_gen_STAR_$arity$2$) {
    return $spec$jscomp$4$$.$cljs$spec$alpha$Spec$with_gen_STAR_$arity$2$($spec$jscomp$4$$, $gfn$jscomp$1$$);
  }
  var $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$ = $cljs$spec$alpha$with_gen_STAR_$$[$goog$typeOf$$(null == $spec$jscomp$4$$ ? null : $spec$jscomp$4$$)];
  if (null != $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$) {
    return $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$.$cljs$core$IFn$_invoke$arity$2$($spec$jscomp$4$$, $gfn$jscomp$1$$) : $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$.call(null, $spec$jscomp$4$$, $gfn$jscomp$1$$);
  }
  $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$ = $cljs$spec$alpha$with_gen_STAR_$$._;
  if (null != $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$) {
    return $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$.$cljs$core$IFn$_invoke$arity$2$($spec$jscomp$4$$, $gfn$jscomp$1$$) : $m__8679__auto__$jscomp$153_m__8679__auto____$1$jscomp$153$$.call(null, $spec$jscomp$4$$, $gfn$jscomp$1$$);
  }
  throw $cljs$core$missing_protocol$$("Spec.with-gen*", $spec$jscomp$4$$);
};
if ("undefined" === typeof $cljs$spec$alpha$registry_ref$$) {
  var $cljs$spec$alpha$registry_ref$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$($cljs$core$PersistentArrayMap$EMPTY$$) : $cljs$core$atom$$.call(null, $cljs$core$PersistentArrayMap$EMPTY$$);
}
function $cljs$spec$alpha$reg_resolve$$($k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$) {
  if ($cljs$core$ident_QMARK_$$($k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$)) {
    var $JSCompiler_temp$jscomp$91_reg$jscomp$1$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($cljs$spec$alpha$registry_ref$$) : $cljs$core$deref$$.call(null, $cljs$spec$alpha$registry_ref$$);
    $k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$91_reg$jscomp$1$$, $k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$);
    if ($cljs$core$ident_QMARK_$$($k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$)) {
      a: {
        for (;;) {
          if ($cljs$core$ident_QMARK_$$($k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$)) {
            $k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$91_reg$jscomp$1$$, $k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$);
          } else {
            $JSCompiler_temp$jscomp$91_reg$jscomp$1$$ = $k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$;
            break a;
          }
        }
      }
    } else {
      $JSCompiler_temp$jscomp$91_reg$jscomp$1$$ = $k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$;
    }
    return $JSCompiler_temp$jscomp$91_reg$jscomp$1$$;
  }
  return $k$jscomp$291_spec$jscomp$7_spec$jscomp$inline_474$$;
}
function $cljs$spec$alpha$reg_resolve_BANG_$$($k$jscomp$292$$) {
  if ($cljs$core$ident_QMARK_$$($k$jscomp$292$$)) {
    var $or__7960__auto__$jscomp$52$$ = $cljs$spec$alpha$reg_resolve$$($k$jscomp$292$$);
    if ($cljs$core$truth_$$($or__7960__auto__$jscomp$52$$)) {
      return $or__7960__auto__$jscomp$52$$;
    }
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Unable to resolve spec: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($k$jscomp$292$$)].join(""));
  }
  return $k$jscomp$292$$;
}
function $cljs$spec$alpha$spec_QMARK_$$($x$jscomp$626$$) {
  return null != $x$jscomp$626$$ && $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$626$$.$cljs$spec$alpha$Spec$$ ? $x$jscomp$626$$ : null;
}
function $cljs$spec$alpha$regex_QMARK_$$($x$jscomp$627$$) {
  var $and__7948__auto__$jscomp$50$$ = $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$627$$);
  return $cljs$core$truth_$$($and__7948__auto__$jscomp$50$$) ? $x$jscomp$627$$ : $and__7948__auto__$jscomp$50$$;
}
function $cljs$spec$alpha$with_name$$($spec$jscomp$8$$, $name$jscomp$95$$) {
  if ($cljs$core$ident_QMARK_$$($spec$jscomp$8$$)) {
    var $JSCompiler_temp$jscomp$18_JSCompiler_temp$jscomp$19_JSCompiler_temp$jscomp$20_meta$jscomp$inline_477$$ = $spec$jscomp$8$$;
  } else {
    $cljs$core$truth_$$($cljs$spec$alpha$regex_QMARK_$$($spec$jscomp$8$$)) ? $JSCompiler_temp$jscomp$18_JSCompiler_temp$jscomp$19_JSCompiler_temp$jscomp$20_meta$jscomp$inline_477$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($spec$jscomp$8$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_name$$, $name$jscomp$95$$) : null != $spec$jscomp$8$$ && ($spec$jscomp$8$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $cljs$core$PROTOCOL_SENTINEL$$ === $spec$jscomp$8$$.$cljs$core$IMeta$$) ? ($JSCompiler_temp$jscomp$18_JSCompiler_temp$jscomp$19_JSCompiler_temp$jscomp$20_meta$jscomp$inline_477$$ = 
    $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($cljs$core$meta$$($spec$jscomp$8$$), $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_name$$, $name$jscomp$95$$), $JSCompiler_temp$jscomp$18_JSCompiler_temp$jscomp$19_JSCompiler_temp$jscomp$20_meta$jscomp$inline_477$$ = $goog$isFunction$$($spec$jscomp$8$$) ? new $cljs$core$MetaFn$$($spec$jscomp$8$$, $JSCompiler_temp$jscomp$18_JSCompiler_temp$jscomp$19_JSCompiler_temp$jscomp$20_meta$jscomp$inline_477$$) : null == $spec$jscomp$8$$ ? null : $cljs$core$_with_meta$$($spec$jscomp$8$$, 
    $JSCompiler_temp$jscomp$18_JSCompiler_temp$jscomp$19_JSCompiler_temp$jscomp$20_meta$jscomp$inline_477$$)) : $JSCompiler_temp$jscomp$18_JSCompiler_temp$jscomp$19_JSCompiler_temp$jscomp$20_meta$jscomp$inline_477$$ = null;
  }
  return $JSCompiler_temp$jscomp$18_JSCompiler_temp$jscomp$19_JSCompiler_temp$jscomp$20_meta$jscomp$inline_477$$;
}
function $cljs$spec$alpha$spec_name$$($spec$jscomp$9$$) {
  return $cljs$core$ident_QMARK_$$($spec$jscomp$9$$) ? $spec$jscomp$9$$ : $cljs$core$truth_$$($cljs$spec$alpha$regex_QMARK_$$($spec$jscomp$9$$)) ? $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_name$$.$cljs$core$IFn$_invoke$arity$1$($spec$jscomp$9$$) : null != $spec$jscomp$9$$ && ($spec$jscomp$9$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $cljs$core$PROTOCOL_SENTINEL$$ === $spec$jscomp$9$$.$cljs$core$IMeta$$) ? $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_name$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$meta$$($spec$jscomp$9$$)) : 
  null;
}
function $cljs$spec$alpha$maybe_spec$$($spec_or_k$$) {
  var $s$jscomp$145$$ = function() {
    var $s$jscomp$145$$ = ($s$jscomp$145$$ = $cljs$core$ident_QMARK_$$($spec_or_k$$)) ? $cljs$spec$alpha$reg_resolve$$($spec_or_k$$) : $s$jscomp$145$$;
    if ($cljs$core$truth_$$($s$jscomp$145$$)) {
      return $s$jscomp$145$$;
    }
    $s$jscomp$145$$ = $cljs$spec$alpha$spec_QMARK_$$($spec_or_k$$);
    if ($cljs$core$truth_$$($s$jscomp$145$$)) {
      return $s$jscomp$145$$;
    }
    $s$jscomp$145$$ = $cljs$spec$alpha$regex_QMARK_$$($spec_or_k$$);
    return $cljs$core$truth_$$($s$jscomp$145$$) ? $s$jscomp$145$$ : null;
  }();
  return $cljs$core$truth_$$($cljs$spec$alpha$regex_QMARK_$$($s$jscomp$145$$)) ? $cljs$spec$alpha$with_name$$($cljs$spec$alpha$regex_spec_impl$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$regex_spec_impl$$.$cljs$core$IFn$_invoke$arity$2$($s$jscomp$145$$, null) : $cljs$spec$alpha$regex_spec_impl$$.call(null, $s$jscomp$145$$, null), $cljs$spec$alpha$spec_name$$($s$jscomp$145$$)) : $s$jscomp$145$$;
}
function $cljs$spec$alpha$the_spec$$($spec_or_k$jscomp$1$$) {
  var $or__7960__auto__$jscomp$54$$ = $cljs$spec$alpha$maybe_spec$$($spec_or_k$jscomp$1$$);
  if ($cljs$core$truth_$$($or__7960__auto__$jscomp$54$$)) {
    return $or__7960__auto__$jscomp$54$$;
  }
  if ($cljs$core$ident_QMARK_$$($spec_or_k$jscomp$1$$)) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Unable to resolve spec: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($spec_or_k$jscomp$1$$)].join(""));
  }
  return null;
}
var $cljs$spec$alpha$specize_STAR_$$ = function $cljs$spec$alpha$specize_STAR_$$($var_args$jscomp$393$$) {
  for (var $args20771$$ = [], $len__9181__auto___20774$$ = arguments.length, $i__9182__auto___20775$$ = 0;;) {
    if ($i__9182__auto___20775$$ < $len__9181__auto___20774$$) {
      $args20771$$.push(arguments[$i__9182__auto___20775$$]), $i__9182__auto___20775$$ += 1;
    } else {
      break;
    }
  }
  switch($args20771$$.length) {
    case 1:
      return $cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args20771$$.length)].join(""));
  }
};
$cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$1$ = function($_$jscomp$256$$) {
  if (null != $_$jscomp$256$$ && null != $_$jscomp$256$$.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$) {
    return $_$jscomp$256$$.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$($_$jscomp$256$$);
  }
  var $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$ = $cljs$spec$alpha$specize_STAR_$$[$goog$typeOf$$(null == $_$jscomp$256$$ ? null : $_$jscomp$256$$)];
  if (null != $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$) {
    return $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$.$cljs$core$IFn$_invoke$arity$1$($_$jscomp$256$$) : $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$.call(null, $_$jscomp$256$$);
  }
  $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$ = $cljs$spec$alpha$specize_STAR_$$._;
  if (null != $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$) {
    return $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$.$cljs$core$IFn$_invoke$arity$1$($_$jscomp$256$$) : $m__8679__auto__$jscomp$155_m__8679__auto____$1$jscomp$155$$.call(null, $_$jscomp$256$$);
  }
  throw $cljs$core$missing_protocol$$("Specize.specize*", $_$jscomp$256$$);
};
$cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$2$ = function($_$jscomp$257$$, $form$jscomp$8$$) {
  if (null != $_$jscomp$257$$ && null != $_$jscomp$257$$.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$) {
    return $_$jscomp$257$$.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$($_$jscomp$257$$, $form$jscomp$8$$);
  }
  var $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$ = $cljs$spec$alpha$specize_STAR_$$[$goog$typeOf$$(null == $_$jscomp$257$$ ? null : $_$jscomp$257$$)];
  if (null != $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$) {
    return $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$($_$jscomp$257$$, $form$jscomp$8$$) : $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$.call(null, $_$jscomp$257$$, $form$jscomp$8$$);
  }
  $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$ = $cljs$spec$alpha$specize_STAR_$$._;
  if (null != $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$) {
    return $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$($_$jscomp$257$$, $form$jscomp$8$$) : $m__8679__auto__$jscomp$156_m__8679__auto____$1$jscomp$156$$.call(null, $_$jscomp$257$$, $form$jscomp$8$$);
  }
  throw $cljs$core$missing_protocol$$("Specize.specize*", $_$jscomp$257$$);
};
$cljs$spec$alpha$specize_STAR_$$.$cljs$lang$maxFixedArity$ = 2;
$cljs$core$Keyword$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$ = function() {
  return $cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$1$($cljs$spec$alpha$reg_resolve_BANG_$$(this));
};
$cljs$core$Keyword$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$ = function() {
  return $cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$1$($cljs$spec$alpha$reg_resolve_BANG_$$(this));
};
$cljs$core$Symbol$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$ = function() {
  return $cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$1$($cljs$spec$alpha$reg_resolve_BANG_$$(this));
};
$cljs$core$Symbol$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$ = function() {
  return $cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$1$($cljs$spec$alpha$reg_resolve_BANG_$$(this));
};
$cljs$spec$alpha$specize_STAR_$$._ = function() {
  function $G__20782__2$$($G__20782__2$$, $G__20782__1$$) {
    return $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$04$$($G__20782__1$$, $G__20782__2$$, null, null) : $cljs$spec$alpha$spec_impl$$.call(null, $G__20782__1$$, $G__20782__2$$, null, null);
  }
  function $G__20782__1$$($G__20782__2$$) {
    return $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$04$$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_unknown$$, $G__20782__2$$, null, null) : $cljs$spec$alpha$spec_impl$$.call(null, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_unknown$$, $G__20782__2$$, null, null);
  }
  var $G__20782$$ = null, $G__20782$$ = function($G__20782$$, $form$jscomp$10$$) {
    switch(arguments.length) {
      case 1:
        return $G__20782__1$$.call(this, $G__20782$$);
      case 2:
        return $G__20782__2$$.call(this, $G__20782$$, $form$jscomp$10$$);
    }
    throw Error("Invalid arity: " + (arguments.length - 1));
  };
  $G__20782$$.$cljs$core$IFn$_invoke$arity$1$ = $G__20782__1$$;
  $G__20782$$.$cljs$core$IFn$_invoke$arity$2$ = $G__20782__2$$;
  return $G__20782$$;
}();
var $cljs$spec$alpha$specize$$ = function $cljs$spec$alpha$specize$$($var_args$jscomp$394$$) {
  for (var $args20783$$ = [], $len__9181__auto___20786$$ = arguments.length, $i__9182__auto___20787$$ = 0;;) {
    if ($i__9182__auto___20787$$ < $len__9181__auto___20786$$) {
      $args20783$$.push(arguments[$i__9182__auto___20787$$]), $i__9182__auto___20787$$ += 1;
    } else {
      break;
    }
  }
  switch($args20783$$.length) {
    case 1:
      return $cljs$spec$alpha$specize$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$spec$alpha$specize$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args20783$$.length)].join(""));
  }
};
$cljs$spec$alpha$specize$$.$cljs$core$IFn$_invoke$arity$1$ = function($s$jscomp$148$$) {
  var $or__7960__auto__$jscomp$55$$ = $cljs$spec$alpha$spec_QMARK_$$($s$jscomp$148$$);
  return $cljs$core$truth_$$($or__7960__auto__$jscomp$55$$) ? $or__7960__auto__$jscomp$55$$ : $cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$1$($s$jscomp$148$$);
};
$cljs$spec$alpha$specize$$.$cljs$core$IFn$_invoke$arity$2$ = function($s$jscomp$149$$, $form$jscomp$11$$) {
  var $or__7960__auto__$jscomp$56$$ = $cljs$spec$alpha$spec_QMARK_$$($s$jscomp$149$$);
  return $cljs$core$truth_$$($or__7960__auto__$jscomp$56$$) ? $or__7960__auto__$jscomp$56$$ : $cljs$spec$alpha$specize_STAR_$$.$cljs$core$IFn$_invoke$arity$2$($s$jscomp$149$$, $form$jscomp$11$$);
};
$cljs$spec$alpha$specize$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$spec$alpha$invalid_QMARK_$$($ret$jscomp$61$$) {
  return $cljs$core$keyword_identical_QMARK_$$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$, $ret$jscomp$61$$);
}
function $cljs$spec$alpha$with_gen$$($spec$jscomp$14$$, $gen_fn$$) {
  var $spec__$1$$ = $cljs$spec$alpha$reg_resolve$$($spec$jscomp$14$$);
  return $cljs$core$truth_$$($cljs$spec$alpha$regex_QMARK_$$($spec__$1$$)) ? $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($spec__$1$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_gfn$$, $gen_fn$$) : $cljs$spec$alpha$with_gen_STAR_$$($cljs$spec$alpha$specize$$.$cljs$core$IFn$_invoke$arity$1$($spec__$1$$), $gen_fn$$);
}
function $cljs$spec$alpha$def_impl$$($k$jscomp$295$$, $form$jscomp$14_spec__$1$jscomp$3$$, $spec$jscomp$22$$) {
  if (!$cljs$core$truth_$$(function() {
    var $form$jscomp$14_spec__$1$jscomp$3$$ = $cljs$core$ident_QMARK_$$($k$jscomp$295$$);
    return $form$jscomp$14_spec__$1$jscomp$3$$ ? $cljs$core$namespace$$($k$jscomp$295$$) : $form$jscomp$14_spec__$1$jscomp$3$$;
  }())) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("k must be namespaced keyword or resolveable symbol"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(c/and (ident? k) (namespace k))")].join(""));
  }
  $form$jscomp$14_spec__$1$jscomp$3$$ = $cljs$core$truth_$$(function() {
    var $k$jscomp$295$$ = $cljs$spec$alpha$spec_QMARK_$$($spec$jscomp$22$$);
    if ($cljs$core$truth_$$($k$jscomp$295$$)) {
      return $k$jscomp$295$$;
    }
    $k$jscomp$295$$ = $cljs$spec$alpha$regex_QMARK_$$($spec$jscomp$22$$);
    return $cljs$core$truth_$$($k$jscomp$295$$) ? $k$jscomp$295$$ : $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($cljs$spec$alpha$registry_ref$$) : $cljs$core$deref$$.call(null, $cljs$spec$alpha$registry_ref$$), $spec$jscomp$22$$);
  }()) ? $spec$jscomp$22$$ : $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$04$$($form$jscomp$14_spec__$1$jscomp$3$$, $spec$jscomp$22$$, null, null) : $cljs$spec$alpha$spec_impl$$.call(null, $form$jscomp$14_spec__$1$jscomp$3$$, $spec$jscomp$22$$, null, null);
  $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($cljs$spec$alpha$registry_ref$$, $cljs$core$assoc$$, $k$jscomp$295$$, $cljs$spec$alpha$with_name$$($form$jscomp$14_spec__$1$jscomp$3$$, $k$jscomp$295$$));
}
function $cljs$spec$alpha$dt$cljs$0core$0IFn$0_invoke$0arity$04$$($pred$jscomp$19$$, $x$jscomp$636$$, $form$jscomp$16$$) {
  if ($cljs$core$truth_$$($pred$jscomp$19$$)) {
    var $temp__5276__auto__$jscomp$30$$ = $cljs$spec$alpha$the_spec$$($pred$jscomp$19$$);
    if ($cljs$core$truth_$$($temp__5276__auto__$jscomp$30$$)) {
      return $cljs$spec$alpha$conform_STAR_$$($cljs$spec$alpha$specize$$.$cljs$core$IFn$_invoke$arity$1$($temp__5276__auto__$jscomp$30$$), $x$jscomp$636$$);
    }
    if ($cljs$core$fn_QMARK_$$($pred$jscomp$19$$) || (null != $pred$jscomp$19$$ ? $pred$jscomp$19$$.$cljs$lang$protocol_mask$partition0$$ & 1 || $cljs$core$PROTOCOL_SENTINEL$$ === $pred$jscomp$19$$.$cljs$core$IFn$$ || ($pred$jscomp$19$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IFn$$, $pred$jscomp$19$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IFn$$, $pred$jscomp$19$$))) {
      return $cljs$core$truth_$$(null) ? $pred$jscomp$19$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$19$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$636$$) : $pred$jscomp$19$$.call(null, $x$jscomp$636$$) : $cljs$core$truth_$$($pred$jscomp$19$$.$cljs$core$IFn$_invoke$arity$1$ ? $pred$jscomp$19$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$636$$) : $pred$jscomp$19$$.call(null, $x$jscomp$636$$)) ? $x$jscomp$636$$ : $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
    }
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$pr_str_with_opts$$($cljs$core$array_seq$$([$form$jscomp$16$$], 0))), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" is not a fn, expected predicate fn")].join(""));
  }
  return $x$jscomp$636$$;
}
var $cljs$spec$alpha$valid_QMARK_$$ = function $cljs$spec$alpha$valid_QMARK_$$($var_args$jscomp$397$$) {
  for (var $args21012$$ = [], $len__9181__auto___21015$$ = arguments.length, $i__9182__auto___21016$$ = 0;;) {
    if ($i__9182__auto___21016$$ < $len__9181__auto___21015$$) {
      $args21012$$.push(arguments[$i__9182__auto___21016$$]), $i__9182__auto___21016$$ += 1;
    } else {
      break;
    }
  }
  switch($args21012$$.length) {
    case 2:
      return $cljs$spec$alpha$valid_QMARK_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$spec$alpha$valid_QMARK_$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args21012$$.length)].join(""));
  }
};
$cljs$spec$alpha$valid_QMARK_$$.$cljs$core$IFn$_invoke$arity$2$ = function($spec$jscomp$24$$, $x$jscomp$637$$) {
  var $spec__$1$jscomp$4$$ = $cljs$spec$alpha$specize$$.$cljs$core$IFn$_invoke$arity$1$($spec$jscomp$24$$);
  return $cljs$core$not$$($cljs$spec$alpha$invalid_QMARK_$$($cljs$spec$alpha$conform_STAR_$$($spec__$1$jscomp$4$$, $x$jscomp$637$$)));
};
$cljs$spec$alpha$valid_QMARK_$$.$cljs$core$IFn$_invoke$arity$3$ = function($spec$jscomp$25_spec__$1$jscomp$5$$, $x$jscomp$638$$, $form$jscomp$17$$) {
  $spec$jscomp$25_spec__$1$jscomp$5$$ = $cljs$spec$alpha$specize$$.$cljs$core$IFn$_invoke$arity$2$($spec$jscomp$25_spec__$1$jscomp$5$$, $form$jscomp$17$$);
  return $cljs$core$not$$($cljs$spec$alpha$invalid_QMARK_$$($cljs$spec$alpha$conform_STAR_$$($spec$jscomp$25_spec__$1$jscomp$5$$, $x$jscomp$638$$)));
};
$cljs$spec$alpha$valid_QMARK_$$.$cljs$lang$maxFixedArity$ = 3;
function $cljs$spec$alpha$spec_impl$$($var_args$jscomp$399$$) {
  for (var $args21118$$ = [], $len__9181__auto___21126$$ = arguments.length, $i__9182__auto___21127$$ = 0;;) {
    if ($i__9182__auto___21127$$ < $len__9181__auto___21126$$) {
      $args21118$$.push(arguments[$i__9182__auto___21127$$]), $i__9182__auto___21127$$ += 1;
    } else {
      break;
    }
  }
  switch($args21118$$.length) {
    case 4:
      return $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$04$$(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$05$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Invalid arity: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($args21118$$.length)].join(""));
  }
}
function $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$04$$($form$jscomp$21$$, $pred$jscomp$24$$, $gfn$jscomp$26$$, $cpred_QMARK_$jscomp$1$$) {
  return $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$05$$($form$jscomp$21$$, $pred$jscomp$24$$, $gfn$jscomp$26$$, $cpred_QMARK_$jscomp$1$$, null);
}
function $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$05$$($G__21122_form$jscomp$22$$, $pred$jscomp$25$$, $gfn$jscomp$27$$, $cpred_QMARK_$jscomp$2$$, $unc$$) {
  if ($cljs$core$truth_$$($cljs$spec$alpha$spec_QMARK_$$($pred$jscomp$25$$))) {
    return $cljs$core$truth_$$($gfn$jscomp$27$$) ? $cljs$spec$alpha$with_gen$$($pred$jscomp$25$$, $gfn$jscomp$27$$) : $pred$jscomp$25$$;
  }
  if ($cljs$core$truth_$$($cljs$spec$alpha$regex_QMARK_$$($pred$jscomp$25$$))) {
    return $cljs$spec$alpha$regex_spec_impl$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$regex_spec_impl$$.$cljs$core$IFn$_invoke$arity$2$($pred$jscomp$25$$, $gfn$jscomp$27$$) : $cljs$spec$alpha$regex_spec_impl$$.call(null, $pred$jscomp$25$$, $gfn$jscomp$27$$);
  }
  if ($cljs$core$ident_QMARK_$$($pred$jscomp$25$$)) {
    return $G__21122_form$jscomp$22$$ = $cljs$spec$alpha$the_spec$$($pred$jscomp$25$$), $cljs$core$truth_$$($gfn$jscomp$27$$) ? $cljs$spec$alpha$with_gen$$($G__21122_form$jscomp$22$$, $gfn$jscomp$27$$) : $G__21122_form$jscomp$22$$;
  }
  "undefined" === typeof $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$ && ($cljs$spec$alpha$t_cljs$0spec$0alpha21123$$ = function($G__21122_form$jscomp$22$$, $pred$jscomp$25$$, $gfn$jscomp$27$$, $cpred_QMARK_$jscomp$2$$, $unc$$, $meta21124$$) {
    this.form = $G__21122_form$jscomp$22$$;
    this.$pred$ = $pred$jscomp$25$$;
    this.$gfn$ = $gfn$jscomp$27$$;
    this.$cpred_QMARK_$ = $cpred_QMARK_$jscomp$2$$;
    this.$unc$ = $unc$$;
    this.$meta21124$ = $meta21124$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($G__21122_form$jscomp$22$$, $pred$jscomp$25$$) {
    return new $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$(this.form, this.$pred$, this.$gfn$, this.$cpred_QMARK_$, this.$unc$, $pred$jscomp$25$$);
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta21124$;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$ = function() {
    return this;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$ = function() {
    return this;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.prototype.$cljs$spec$alpha$Spec$$ = $cljs$core$PROTOCOL_SENTINEL$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.prototype.$cljs$spec$alpha$Spec$conform_STAR_$arity$2$ = function($G__21122_form$jscomp$22$$, $pred$jscomp$25$$) {
    var $gfn$jscomp$27$$ = this.$pred$.$cljs$core$IFn$_invoke$arity$1$ ? this.$pred$.$cljs$core$IFn$_invoke$arity$1$($pred$jscomp$25$$) : this.$pred$.call(null, $pred$jscomp$25$$);
    return $cljs$core$truth_$$(this.$cpred_QMARK_$) ? $gfn$jscomp$27$$ : $cljs$core$truth_$$($gfn$jscomp$27$$) ? $pred$jscomp$25$$ : $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.prototype.$cljs$spec$alpha$Spec$with_gen_STAR_$arity$2$ = function($G__21122_form$jscomp$22$$, $pred$jscomp$25$$) {
    return $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$05$$(this.form, this.$pred$, $pred$jscomp$25$$, this.$cpred_QMARK_$, this.$unc$);
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 6, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0form$$, $cljs$core$cst$0sym$0pred$$, $cljs$core$cst$0sym$0gfn$$, $cljs$core$cst$0sym$0cpred_QMARK_$$, $cljs$core$cst$0sym$0unc$$, $cljs$core$cst$0sym$0meta21124$$], null);
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.$cljs$lang$type$ = !0, $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.$cljs$lang$ctorStr$ = "cljs.spec.alpha/t_cljs$spec$alpha21123", $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$.$cljs$lang$ctorPrWriter$ = function($G__21122_form$jscomp$22$$, $pred$jscomp$25$$) {
    return $cljs$core$_write$$($pred$jscomp$25$$, "cljs.spec.alpha/t_cljs$spec$alpha21123");
  });
  return new $cljs$spec$alpha$t_cljs$0spec$0alpha21123$$($G__21122_form$jscomp$22$$, $pred$jscomp$25$$, $gfn$jscomp$27$$, $cpred_QMARK_$jscomp$2$$, $unc$$, $cljs$core$PersistentArrayMap$EMPTY$$);
}
function $cljs$spec$alpha$tuple_impl$cljs$0core$0IFn$0_invoke$0arity$03$$($forms$jscomp$1$$, $preds$jscomp$1$$, $gfn$jscomp$31$$) {
  var $specs$jscomp$2$$ = new $cljs$core$Delay$$(function() {
    return $cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$PersistentVector$EMPTY$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$($cljs$spec$alpha$specize$$, $preds$jscomp$1$$, $forms$jscomp$1$$));
  }, null), $cnt$jscomp$37$$ = $cljs$core$count$$($preds$jscomp$1$$);
  "undefined" === typeof $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$ && ($cljs$spec$alpha$t_cljs$0spec$0alpha21156$$ = function($forms$jscomp$1$$, $preds$jscomp$1$$, $gfn$jscomp$31$$, $specs$jscomp$2$$, $cnt$jscomp$37$$, $meta21157$$) {
    this.forms = $forms$jscomp$1$$;
    this.$preds$ = $preds$jscomp$1$$;
    this.$gfn$ = $gfn$jscomp$31$$;
    this.$specs$ = $specs$jscomp$2$$;
    this.$cnt$ = $cnt$jscomp$37$$;
    this.$meta21157$ = $meta21157$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function() {
    return function($forms$jscomp$1$$, $preds$jscomp$1$$) {
      return new $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$(this.forms, this.$preds$, this.$gfn$, this.$specs$, this.$cnt$, $preds$jscomp$1$$);
    };
  }($specs$jscomp$2$$, $cnt$jscomp$37$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return function() {
      return this.$meta21157$;
    };
  }($specs$jscomp$2$$, $cnt$jscomp$37$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$ = function() {
    return function() {
      return this;
    };
  }($specs$jscomp$2$$, $cnt$jscomp$37$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$ = function() {
    return function() {
      return this;
    };
  }($specs$jscomp$2$$, $cnt$jscomp$37$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.prototype.$cljs$spec$alpha$Spec$$ = $cljs$core$PROTOCOL_SENTINEL$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.prototype.$cljs$spec$alpha$Spec$conform_STAR_$arity$2$ = function() {
    return function($forms$jscomp$1$$, $preds$jscomp$1$$) {
      var $gfn$jscomp$31$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$(this.$specs$) : $cljs$core$deref$$.call(null, this.$specs$);
      if ($cljs$core$vector_QMARK_$$($preds$jscomp$1$$) && $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$count$$($preds$jscomp$1$$), this.$cnt$)) {
        for (var $specs$jscomp$2$$ = $preds$jscomp$1$$, $cnt$jscomp$37$$ = 0;;) {
          if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cnt$jscomp$37$$, this.$cnt$)) {
            return $specs$jscomp$2$$;
          }
          var $_$jscomp$282$$ = $preds$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $preds$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($cnt$jscomp$37$$) : $preds$jscomp$1$$.call(null, $cnt$jscomp$37$$), $x$jscomp$648$$ = $cljs$spec$alpha$conform_STAR_$$($gfn$jscomp$31$$.$cljs$core$IFn$_invoke$arity$1$ ? $gfn$jscomp$31$$.$cljs$core$IFn$_invoke$arity$1$($cnt$jscomp$37$$) : $gfn$jscomp$31$$.call(null, $cnt$jscomp$37$$), $_$jscomp$282$$);
          if ($cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($x$jscomp$648$$))) {
            return $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
          }
          $specs$jscomp$2$$ = $x$jscomp$648$$ === $_$jscomp$282$$ ? $specs$jscomp$2$$ : $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($specs$jscomp$2$$, $cnt$jscomp$37$$, $x$jscomp$648$$);
          $cnt$jscomp$37$$ += 1;
        }
      } else {
        return $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
      }
    };
  }($specs$jscomp$2$$, $cnt$jscomp$37$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.prototype.$cljs$spec$alpha$Spec$with_gen_STAR_$arity$2$ = function() {
    return function($forms$jscomp$1$$, $preds$jscomp$1$$) {
      return $cljs$spec$alpha$tuple_impl$cljs$0core$0IFn$0_invoke$0arity$03$$(this.forms, this.$preds$, $preds$jscomp$1$$);
    };
  }($specs$jscomp$2$$, $cnt$jscomp$37$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.$getBasis$ = function() {
    return function() {
      return new $cljs$core$PersistentVector$$(null, 6, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0forms$$, $cljs$core$cst$0sym$0preds$$, $cljs$core$cst$0sym$0gfn$$, $cljs$core$cst$0sym$0specs$$, $cljs$core$cst$0sym$0cnt$$, $cljs$core$cst$0sym$0meta21157$$], null);
    };
  }($specs$jscomp$2$$, $cnt$jscomp$37$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.$cljs$lang$type$ = !0, $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.$cljs$lang$ctorStr$ = "cljs.spec.alpha/t_cljs$spec$alpha21156", $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$.$cljs$lang$ctorPrWriter$ = function() {
    return function($forms$jscomp$1$$, $preds$jscomp$1$$) {
      return $cljs$core$_write$$($preds$jscomp$1$$, "cljs.spec.alpha/t_cljs$spec$alpha21156");
    };
  }($specs$jscomp$2$$, $cnt$jscomp$37$$));
  return new $cljs$spec$alpha$t_cljs$0spec$0alpha21156$$($forms$jscomp$1$$, $preds$jscomp$1$$, $gfn$jscomp$31$$, $specs$jscomp$2$$, $cnt$jscomp$37$$, $cljs$core$PersistentArrayMap$EMPTY$$);
}
function $cljs$spec$alpha$tagged_ret$$($v$jscomp$96$$) {
  $v$jscomp$96$$.$cljs$core$IMapEntry$$ = $cljs$core$PROTOCOL_SENTINEL$$;
  $v$jscomp$96$$.$cljs$core$IMapEntry$_key$arity$1$ = function() {
    return function() {
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($v$jscomp$96$$, 0);
    };
  }($v$jscomp$96$$);
  $v$jscomp$96$$.$cljs$core$IMapEntry$_val$arity$1$ = function() {
    return function() {
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$($v$jscomp$96$$, 1);
    };
  }($v$jscomp$96$$);
  return $v$jscomp$96$$;
}
var $cljs$spec$alpha$or_spec_impl$$ = function $cljs$spec$alpha$or_spec_impl$$($keys$jscomp$16$$, $forms$jscomp$3$$, $preds$jscomp$3$$, $gfn$jscomp$33$$) {
  var $id$jscomp$49$$ = $cljs$core$random_uuid$$(), $kps$$ = $cljs$core$zipmap$$($keys$jscomp$16$$, $preds$jscomp$3$$), $specs$jscomp$19$$ = new $cljs$core$Delay$$(function() {
    return function() {
      return $cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$PersistentVector$EMPTY$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$($cljs$spec$alpha$specize$$, $preds$jscomp$3$$, $forms$jscomp$3$$));
    };
  }($id$jscomp$49$$, $kps$$), null), $cform$$ = function() {
    var $forms$jscomp$3$$ = $cljs$core$count$$($preds$jscomp$3$$);
    switch($forms$jscomp$3$$) {
      case 2:
        return function($forms$jscomp$3$$, $preds$jscomp$3$$, $gfn$jscomp$33$$, $id$jscomp$49$$) {
          return function($forms$jscomp$3$$) {
            var $preds$jscomp$3$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($id$jscomp$49$$) : $cljs$core$deref$$.call(null, $id$jscomp$49$$), $gfn$jscomp$33$$ = $cljs$spec$alpha$conform_STAR_$$($preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$(0) : $preds$jscomp$3$$.call(null, 0), $forms$jscomp$3$$);
            return $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($gfn$jscomp$33$$)) ? ($forms$jscomp$3$$ = $cljs$spec$alpha$conform_STAR_$$($preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$(1) : $preds$jscomp$3$$.call(null, 1), $forms$jscomp$3$$), $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($forms$jscomp$3$$)) ? $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$ : $cljs$spec$alpha$tagged_ret$$(new $cljs$core$PersistentVector$$(null, 
            2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$ ? $keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$(1) : $keys$jscomp$16$$.call(null, 1), $forms$jscomp$3$$], null))) : $cljs$spec$alpha$tagged_ret$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$ ? $keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$(0) : $keys$jscomp$16$$.call(null, 0), $gfn$jscomp$33$$], 
            null));
          };
        }($forms$jscomp$3$$, $id$jscomp$49$$, $kps$$, $specs$jscomp$19$$);
      case 3:
        return function($forms$jscomp$3$$, $preds$jscomp$3$$, $gfn$jscomp$33$$, $id$jscomp$49$$) {
          return function($forms$jscomp$3$$) {
            var $preds$jscomp$3$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($id$jscomp$49$$) : $cljs$core$deref$$.call(null, $id$jscomp$49$$), $gfn$jscomp$33$$ = $cljs$spec$alpha$conform_STAR_$$($preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$(0) : $preds$jscomp$3$$.call(null, 0), $forms$jscomp$3$$);
            return $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($gfn$jscomp$33$$)) ? ($gfn$jscomp$33$$ = $cljs$spec$alpha$conform_STAR_$$($preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$(1) : $preds$jscomp$3$$.call(null, 1), $forms$jscomp$3$$), $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($gfn$jscomp$33$$)) ? ($forms$jscomp$3$$ = $cljs$spec$alpha$conform_STAR_$$($preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$(2) : 
            $preds$jscomp$3$$.call(null, 2), $forms$jscomp$3$$), $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($forms$jscomp$3$$)) ? $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$ : $cljs$spec$alpha$tagged_ret$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$ ? $keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$(2) : $keys$jscomp$16$$.call(null, 2), $forms$jscomp$3$$], null))) : $cljs$spec$alpha$tagged_ret$$(new $cljs$core$PersistentVector$$(null, 
            2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$ ? $keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$(1) : $keys$jscomp$16$$.call(null, 1), $gfn$jscomp$33$$], null))) : $cljs$spec$alpha$tagged_ret$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$ ? $keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$(0) : $keys$jscomp$16$$.call(null, 0), $gfn$jscomp$33$$], 
            null));
          };
        }($forms$jscomp$3$$, $id$jscomp$49$$, $kps$$, $specs$jscomp$19$$);
      default:
        return function($forms$jscomp$3$$, $preds$jscomp$3$$, $gfn$jscomp$33$$, $id$jscomp$49$$) {
          return function($forms$jscomp$3$$) {
            for (var $preds$jscomp$3$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($id$jscomp$49$$) : $cljs$core$deref$$.call(null, $id$jscomp$49$$), $gfn$jscomp$33$$ = 0;;) {
              if ($gfn$jscomp$33$$ < $cljs$core$count$$($preds$jscomp$3$$)) {
                var $kps$$ = $preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $preds$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($gfn$jscomp$33$$) : $preds$jscomp$3$$.call(null, $gfn$jscomp$33$$), $kps$$ = $cljs$spec$alpha$conform_STAR_$$($kps$$, $forms$jscomp$3$$);
                if ($cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($kps$$))) {
                  $gfn$jscomp$33$$ += 1;
                } else {
                  return $cljs$spec$alpha$tagged_ret$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$ ? $keys$jscomp$16$$.$cljs$core$IFn$_invoke$arity$1$($gfn$jscomp$33$$) : $keys$jscomp$16$$.call(null, $gfn$jscomp$33$$), $kps$$], null));
                }
              } else {
                return $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
              }
            }
          };
        }($forms$jscomp$3$$, $id$jscomp$49$$, $kps$$, $specs$jscomp$19$$);
    }
  }();
  "undefined" === typeof $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$ && ($cljs$spec$alpha$t_cljs$0spec$0alpha21178$$ = function($keys$jscomp$16$$, $forms$jscomp$3$$, $preds$jscomp$3$$, $gfn$jscomp$33$$, $id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$, $meta21179$$) {
    this.keys = $keys$jscomp$16$$;
    this.forms = $forms$jscomp$3$$;
    this.$preds$ = $preds$jscomp$3$$;
    this.$gfn$ = $gfn$jscomp$33$$;
    this.id = $id$jscomp$49$$;
    this.$kps$ = $kps$$;
    this.$specs$ = $specs$jscomp$19$$;
    this.$cform$ = $cform$$;
    this.$meta21179$ = $meta21179$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function() {
    return function($keys$jscomp$16$$, $forms$jscomp$3$$) {
      return new $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$(this.keys, this.forms, this.$preds$, this.$gfn$, this.id, this.$kps$, this.$specs$, this.$cform$, $forms$jscomp$3$$);
    };
  }($id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return function() {
      return this.$meta21179$;
    };
  }($id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$ = function() {
    return function() {
      return this;
    };
  }($id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$ = function() {
    return function() {
      return this;
    };
  }($id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.prototype.$cljs$spec$alpha$Spec$$ = $cljs$core$PROTOCOL_SENTINEL$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.prototype.$cljs$spec$alpha$Spec$conform_STAR_$arity$2$ = function() {
    return function($keys$jscomp$16$$, $forms$jscomp$3$$) {
      return this.$cform$.$cljs$core$IFn$_invoke$arity$1$ ? this.$cform$.$cljs$core$IFn$_invoke$arity$1$($forms$jscomp$3$$) : this.$cform$.call(null, $forms$jscomp$3$$);
    };
  }($id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.prototype.$cljs$spec$alpha$Spec$with_gen_STAR_$arity$2$ = function() {
    return function($keys$jscomp$16$$, $forms$jscomp$3$$) {
      return $cljs$spec$alpha$or_spec_impl$$.$cljs$core$IFn$_invoke$arity$4$ ? $cljs$spec$alpha$or_spec_impl$$.$cljs$core$IFn$_invoke$arity$4$(this.keys, this.forms, this.$preds$, $forms$jscomp$3$$) : $cljs$spec$alpha$or_spec_impl$$.call(null, this.keys, this.forms, this.$preds$, $forms$jscomp$3$$);
    };
  }($id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.$getBasis$ = function() {
    return function() {
      return new $cljs$core$PersistentVector$$(null, 9, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0keys$$, $cljs$core$cst$0sym$0forms$$, $cljs$core$cst$0sym$0preds$$, $cljs$core$cst$0sym$0gfn$$, $cljs$core$cst$0sym$0id$$, $cljs$core$cst$0sym$0kps$$, $cljs$core$cst$0sym$0specs$$, $cljs$core$cst$0sym$0cform$$, $cljs$core$cst$0sym$0meta21179$$], null);
    };
  }($id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.$cljs$lang$type$ = !0, $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.$cljs$lang$ctorStr$ = "cljs.spec.alpha/t_cljs$spec$alpha21178", $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$.$cljs$lang$ctorPrWriter$ = function() {
    return function($keys$jscomp$16$$, $forms$jscomp$3$$) {
      return $cljs$core$_write$$($forms$jscomp$3$$, "cljs.spec.alpha/t_cljs$spec$alpha21178");
    };
  }($id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$));
  return new $cljs$spec$alpha$t_cljs$0spec$0alpha21178$$($keys$jscomp$16$$, $forms$jscomp$3$$, $preds$jscomp$3$$, $gfn$jscomp$33$$, $id$jscomp$49$$, $kps$$, $specs$jscomp$19$$, $cform$$, $cljs$core$PersistentArrayMap$EMPTY$$);
};
function $cljs$spec$alpha$and_preds$$($first__21223_pred__$1$jscomp$3_ret__$1$jscomp$5_x$jscomp$657$$, $G__21213__$1_G__21228_preds$jscomp$5_preds__$2_seq__21222_seq__21222__$1$$, $forms$jscomp$5_nret_ret__$2$jscomp$3$$) {
  var $G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$ = $cljs$core$seq$$($G__21213__$1_G__21228_preds$jscomp$5_preds__$2_seq__21222_seq__21222__$1$$);
  $cljs$core$first$$($G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$);
  $cljs$core$next$$($G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$);
  $G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$ = $cljs$core$seq$$($forms$jscomp$5_nret_ret__$2$jscomp$3$$);
  $cljs$core$first$$($G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$);
  $cljs$core$next$$($G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$);
  for ($G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$ = $forms$jscomp$5_nret_ret__$2$jscomp$3$$;;) {
    $forms$jscomp$5_nret_ret__$2$jscomp$3$$ = $first__21223_pred__$1$jscomp$3_ret__$1$jscomp$5_x$jscomp$657$$;
    $G__21213__$1_G__21228_preds$jscomp$5_preds__$2_seq__21222_seq__21222__$1$$ = $cljs$core$seq$$($G__21213__$1_G__21228_preds$jscomp$5_preds__$2_seq__21222_seq__21222__$1$$);
    $first__21223_pred__$1$jscomp$3_ret__$1$jscomp$5_x$jscomp$657$$ = $cljs$core$first$$($G__21213__$1_G__21228_preds$jscomp$5_preds__$2_seq__21222_seq__21222__$1$$);
    $G__21213__$1_G__21228_preds$jscomp$5_preds__$2_seq__21222_seq__21222__$1$$ = $cljs$core$next$$($G__21213__$1_G__21228_preds$jscomp$5_preds__$2_seq__21222_seq__21222__$1$$);
    var $seq__21225_seq__21225__$1$$ = $cljs$core$seq$$($G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$), $G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$ = $cljs$core$first$$($seq__21225_seq__21225__$1$$), $seq__21225_seq__21225__$1$$ = $cljs$core$next$$($seq__21225_seq__21225__$1$$), $form__$1$jscomp$3$$ = $G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$, $G__21214__$1_G__21229_first__21226_forms__$2_seq__21216_seq__21219$$ = $seq__21225_seq__21225__$1$$;
    if ($cljs$core$truth_$$($first__21223_pred__$1$jscomp$3_ret__$1$jscomp$5_x$jscomp$657$$)) {
      $forms$jscomp$5_nret_ret__$2$jscomp$3$$ = $cljs$spec$alpha$dt$cljs$0core$0IFn$0_invoke$0arity$04$$($first__21223_pred__$1$jscomp$3_ret__$1$jscomp$5_x$jscomp$657$$, $forms$jscomp$5_nret_ret__$2$jscomp$3$$, $form__$1$jscomp$3$$);
      if ($cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($forms$jscomp$5_nret_ret__$2$jscomp$3$$))) {
        return $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
      }
      $first__21223_pred__$1$jscomp$3_ret__$1$jscomp$5_x$jscomp$657$$ = $forms$jscomp$5_nret_ret__$2$jscomp$3$$;
    } else {
      return $forms$jscomp$5_nret_ret__$2$jscomp$3$$;
    }
  }
}
function $cljs$spec$alpha$accept$$($x$jscomp$673$$) {
  return new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_accept$$, $cljs$core$cst$0kw$0ret$$, $x$jscomp$673$$], null);
}
function $cljs$spec$alpha$accept_QMARK_$$($map__21369__$1_op$jscomp$1_p__21366$$) {
  $map__21369__$1_op$jscomp$1_p__21366$$ = null != $map__21369__$1_op$jscomp$1_p__21366$$ && ($map__21369__$1_op$jscomp$1_p__21366$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $map__21369__$1_op$jscomp$1_p__21366$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $map__21369__$1_op$jscomp$1_p__21366$$) : $map__21369__$1_op$jscomp$1_p__21366$$;
  $map__21369__$1_op$jscomp$1_p__21366$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21369__$1_op$jscomp$1_p__21366$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$);
  return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_accept$$, $map__21369__$1_op$jscomp$1_p__21366$$);
}
var $cljs$spec$alpha$pcat_STAR_$$ = function $cljs$spec$alpha$pcat_STAR_$$($G__21395_p__21371_pr_seq__21386$$) {
  var $map__21384__$1_rep_PLUS_$$ = null != $G__21395_p__21371_pr_seq__21386$$ && ($G__21395_p__21371_pr_seq__21386$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $G__21395_p__21371_pr_seq__21386$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $G__21395_p__21371_pr_seq__21386$$) : $G__21395_p__21371_pr_seq__21386$$, $ret__$1$jscomp$10_rp_vec__21385$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21384__$1_rep_PLUS_$$, 
  $cljs$core$cst$0kw$0ps$$);
  $G__21395_p__21371_pr_seq__21386$$ = $cljs$core$seq$$($ret__$1$jscomp$10_rp_vec__21385$$);
  var $first__21387$$ = $cljs$core$first$$($G__21395_p__21371_pr_seq__21386$$);
  $G__21395_p__21371_pr_seq__21386$$ = $cljs$core$next$$($G__21395_p__21371_pr_seq__21386$$);
  var $vec__21388$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21384__$1_rep_PLUS_$$, $cljs$core$cst$0kw$0ks$$), $kr_seq__21389$$ = $cljs$core$seq$$($vec__21388$$), $first__21390$$ = $cljs$core$first$$($kr_seq__21389$$), $kr_seq__21389$$ = $cljs$core$next$$($kr_seq__21389$$), $vec__21391$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21384__$1_rep_PLUS_$$, $cljs$core$cst$0kw$0forms$$), $seq__21392_seq__21392__$1$$ = $cljs$core$seq$$($vec__21391$$);
  $cljs$core$first$$($seq__21392_seq__21392__$1$$);
  var $seq__21392_seq__21392__$1$$ = $cljs$core$next$$($seq__21392_seq__21392__$1$$), $ret$jscomp$80$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21384__$1_rep_PLUS_$$, $cljs$core$cst$0kw$0ret$$), $map__21384__$1_rep_PLUS_$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21384__$1_rep_PLUS_$$, $cljs$core$cst$0kw$0rep_PLUS_$$);
  return $cljs$core$every_QMARK_$$($cljs$core$identity$$, $ret__$1$jscomp$10_rp_vec__21385$$) ? $cljs$core$truth_$$($cljs$spec$alpha$accept_QMARK_$$($first__21387$$)) ? ($ret__$1$jscomp$10_rp_vec__21385$$ = $cljs$core$cst$0kw$0ret$$.$cljs$core$IFn$_invoke$arity$1$($first__21387$$), $ret__$1$jscomp$10_rp_vec__21385$$ = $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($ret$jscomp$80$$, $cljs$core$truth_$$($vec__21388$$) ? $cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$first__21390$$, $ret__$1$jscomp$10_rp_vec__21385$$]) : 
  $ret__$1$jscomp$10_rp_vec__21385$$), $G__21395_p__21371_pr_seq__21386$$ ? ($G__21395_p__21371_pr_seq__21386$$ = new $cljs$core$PersistentArrayMap$$(null, 4, [$cljs$core$cst$0kw$0ps$$, $G__21395_p__21371_pr_seq__21386$$, $cljs$core$cst$0kw$0ks$$, $kr_seq__21389$$, $cljs$core$cst$0kw$0forms$$, $seq__21392_seq__21392__$1$$, $cljs$core$cst$0kw$0ret$$, $ret__$1$jscomp$10_rp_vec__21385$$], null), $cljs$spec$alpha$pcat_STAR_$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$spec$alpha$pcat_STAR_$$.$cljs$core$IFn$_invoke$arity$1$($G__21395_p__21371_pr_seq__21386$$) : 
  $cljs$spec$alpha$pcat_STAR_$$.call(null, $G__21395_p__21371_pr_seq__21386$$)) : $cljs$spec$alpha$accept$$($ret__$1$jscomp$10_rp_vec__21385$$)) : new $cljs$core$PersistentArrayMap$$(null, 6, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_pcat$$, $cljs$core$cst$0kw$0ps$$, $ret__$1$jscomp$10_rp_vec__21385$$, $cljs$core$cst$0kw$0ret$$, $ret$jscomp$80$$, $cljs$core$cst$0kw$0ks$$, $vec__21388$$, $cljs$core$cst$0kw$0forms$$, $vec__21391$$, $cljs$core$cst$0kw$0rep_PLUS_$$, 
  $map__21384__$1_rep_PLUS_$$], null) : null;
};
function $cljs$spec$alpha$rep_STAR_$$($p1$jscomp$8$$, $p2$jscomp$7$$, $ret$jscomp$81$$, $r$jscomp$41_splice$$, $form$jscomp$34$$) {
  return $cljs$core$truth_$$($p1$jscomp$8$$) ? ($r$jscomp$41_splice$$ = new $cljs$core$PersistentArrayMap$$(null, 5, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_rep$$, $cljs$core$cst$0kw$0p2$$, $p2$jscomp$7$$, $cljs$core$cst$0kw$0splice$$, $r$jscomp$41_splice$$, $cljs$core$cst$0kw$0forms$$, $form$jscomp$34$$, $cljs$core$cst$0kw$0id$$, $cljs$core$random_uuid$$()], null), $cljs$core$truth_$$($cljs$spec$alpha$accept_QMARK_$$($p1$jscomp$8$$)) ? $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($r$jscomp$41_splice$$, 
  $cljs$core$cst$0kw$0p1$$, $p2$jscomp$7$$, $cljs$core$array_seq$$([$cljs$core$cst$0kw$0ret$$, $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($ret$jscomp$81$$, $cljs$core$cst$0kw$0ret$$.$cljs$core$IFn$_invoke$arity$1$($p1$jscomp$8$$))], 0)) : $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($r$jscomp$41_splice$$, $cljs$core$cst$0kw$0p1$$, $p1$jscomp$8$$, $cljs$core$array_seq$$([$cljs$core$cst$0kw$0ret$$, $ret$jscomp$81$$], 0))) : null;
}
function $cljs$spec$alpha$filter_alt$$($pks_ps$jscomp$7$$, $ks$jscomp$22$$, $forms$jscomp$13$$, $f$jscomp$364$$) {
  return $cljs$core$truth_$$($cljs$core$truth_$$($ks$jscomp$22$$) ? $ks$jscomp$22$$ : $forms$jscomp$13$$) ? ($pks_ps$jscomp$7$$ = $cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($pks_ps$jscomp$7$$) {
    $pks_ps$jscomp$7$$ = $cljs$core$first$$($pks_ps$jscomp$7$$);
    return $f$jscomp$364$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$364$$.$cljs$core$IFn$_invoke$arity$1$($pks_ps$jscomp$7$$) : $f$jscomp$364$$.call(null, $pks_ps$jscomp$7$$);
  }, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$($cljs$core$vector$$, $pks_ps$jscomp$7$$, function() {
    var $pks_ps$jscomp$7$$ = $cljs$core$seq$$($ks$jscomp$22$$);
    return $pks_ps$jscomp$7$$ ? $pks_ps$jscomp$7$$ : $cljs$core$repeat$cljs$0core$0IFn$0_invoke$0arity$01$$(null);
  }(), function() {
    var $pks_ps$jscomp$7$$ = $cljs$core$seq$$($forms$jscomp$13$$);
    return $pks_ps$jscomp$7$$ ? $pks_ps$jscomp$7$$ : $cljs$core$repeat$cljs$0core$0IFn$0_invoke$0arity$01$$(null);
  }())), new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$seq$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$, $pks_ps$jscomp$7$$)), $cljs$core$truth_$$($ks$jscomp$22$$) ? $cljs$core$seq$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$second$$, $pks_ps$jscomp$7$$)) : null, $cljs$core$truth_$$($forms$jscomp$13$$) ? $cljs$core$seq$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function() {
    return function($pks_ps$jscomp$7$$) {
      return $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($pks_ps$jscomp$7$$, 2);
    };
  }($pks_ps$jscomp$7$$), $pks_ps$jscomp$7$$)) : null], null)) : new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$seq$$($cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$364$$, $pks_ps$jscomp$7$$)), $ks$jscomp$22$$, $forms$jscomp$13$$], null);
}
function $cljs$spec$alpha$alt_STAR_$$($first__21418_ps$jscomp$8$$, $ks$jscomp$23_ret$jscomp$82_vec__21416$$, $forms$jscomp$14_pr$jscomp$1_seq__21417$$) {
  var $forms__$1$jscomp$6_vec__21413$$ = $cljs$spec$alpha$filter_alt$$($first__21418_ps$jscomp$8$$, $ks$jscomp$23_ret$jscomp$82_vec__21416$$, $forms$jscomp$14_pr$jscomp$1_seq__21417$$, $cljs$core$identity$$);
  $ks$jscomp$23_ret$jscomp$82_vec__21416$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($forms__$1$jscomp$6_vec__21413$$, 0, null);
  $forms$jscomp$14_pr$jscomp$1_seq__21417$$ = $cljs$core$seq$$($ks$jscomp$23_ret$jscomp$82_vec__21416$$);
  $first__21418_ps$jscomp$8$$ = $cljs$core$first$$($forms$jscomp$14_pr$jscomp$1_seq__21417$$);
  $forms$jscomp$14_pr$jscomp$1_seq__21417$$ = $cljs$core$next$$($forms$jscomp$14_pr$jscomp$1_seq__21417$$);
  var $vec__21419$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($forms__$1$jscomp$6_vec__21413$$, 1, null), $k1$jscomp$5$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__21419$$, 0, null), $forms__$1$jscomp$6_vec__21413$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($forms__$1$jscomp$6_vec__21413$$, 2, null);
  return $cljs$core$truth_$$($ks$jscomp$23_ret$jscomp$82_vec__21416$$) ? ($ks$jscomp$23_ret$jscomp$82_vec__21416$$ = new $cljs$core$PersistentArrayMap$$(null, 4, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_alt$$, $cljs$core$cst$0kw$0ps$$, $ks$jscomp$23_ret$jscomp$82_vec__21416$$, $cljs$core$cst$0kw$0ks$$, $vec__21419$$, $cljs$core$cst$0kw$0forms$$, $forms__$1$jscomp$6_vec__21413$$], null), null == $forms$jscomp$14_pr$jscomp$1_seq__21417$$ ? $cljs$core$truth_$$($k1$jscomp$5$$) ? 
  $cljs$core$truth_$$($cljs$spec$alpha$accept_QMARK_$$($first__21418_ps$jscomp$8$$)) ? $cljs$spec$alpha$accept$$($cljs$spec$alpha$tagged_ret$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$k1$jscomp$5$$, $cljs$core$cst$0kw$0ret$$.$cljs$core$IFn$_invoke$arity$1$($first__21418_ps$jscomp$8$$)], null))) : $ks$jscomp$23_ret$jscomp$82_vec__21416$$ : $first__21418_ps$jscomp$8$$ : $ks$jscomp$23_ret$jscomp$82_vec__21416$$) : null;
}
function $cljs$spec$alpha$alt2$$($p1$jscomp$10$$, $p2$jscomp$8$$) {
  return $cljs$core$truth_$$($cljs$core$truth_$$($p1$jscomp$10$$) ? $p2$jscomp$8$$ : $p1$jscomp$10$$) ? $cljs$spec$alpha$alt_STAR_$$($cljs$core$array_seq$$([$p1$jscomp$10$$, $p2$jscomp$8$$], 0), null, null) : $cljs$core$truth_$$($p1$jscomp$10$$) ? $p1$jscomp$10$$ : $p2$jscomp$8$$;
}
function $cljs$spec$alpha$noret_QMARK_$$($p1$jscomp$11$$, $pret$$) {
  var $and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($pret$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_nil$$);
  if ($and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$) {
    return $and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$;
  }
  $and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$ = (new $cljs$core$PersistentHashSet$$(null, new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_rep$$, null, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_pcat$$, null], null), null)).call(null, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$.$cljs$core$IFn$_invoke$arity$1$($cljs$spec$alpha$reg_resolve_BANG_$$($p1$jscomp$11$$)));
  $and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$ = $cljs$core$truth_$$($and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$) ? $cljs$core$empty_QMARK_$$($pret$$) : $and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$;
  return $cljs$core$truth_$$($and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$) ? $and__7948__auto__$jscomp$inline_487_or__7960__auto__$jscomp$87_or__7960__auto____$1$jscomp$16$$ : null;
}
var $cljs$spec$alpha$accept_nil_QMARK_$$ = function $cljs$spec$alpha$accept_nil_QMARK_$$($G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$) {
  $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$ = $cljs$spec$alpha$reg_resolve_BANG_$$($G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$);
  var $G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$ = null != $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$ && ($G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$.$cljs$core$ISeq$$) ? 
  $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$) : $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$;
  var $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$);
  $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$, $cljs$core$cst$0kw$0ps$$);
  var $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$, $cljs$core$cst$0kw$0p1$$), $p2$jscomp$9$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$, $cljs$core$cst$0kw$0p2$$), $G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$ = 
  $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$, $cljs$core$cst$0kw$0forms$$);
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_accept$$, $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)) {
    return !0;
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(null, $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)) {
    return null;
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_amp$$, $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)) {
    $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$ = $cljs$spec$alpha$accept_nil_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$spec$alpha$accept_nil_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$) : $cljs$spec$alpha$accept_nil_QMARK_$$.call(null, $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$);
    if ($cljs$core$truth_$$($and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)) {
      $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$ = $cljs$spec$alpha$noret_QMARK_$$($G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$, $cljs$spec$alpha$preturn$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$spec$alpha$preturn$$.$cljs$core$IFn$_invoke$arity$1$($G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$) : $cljs$spec$alpha$preturn$$.call(null, $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$));
      if ($cljs$core$truth_$$($and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)) {
        return $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$;
      }
      $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$ = $cljs$spec$alpha$and_preds$$($cljs$spec$alpha$preturn$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$spec$alpha$preturn$$.$cljs$core$IFn$_invoke$arity$1$($G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$) : $cljs$spec$alpha$preturn$$.call(null, $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$), $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$, 
      $cljs$core$next$$($G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$));
      return $cljs$core$not$$($cljs$spec$alpha$invalid_QMARK_$$($G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$));
    }
    return $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$;
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_rep$$, $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)) {
    return ($and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$ = $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$ === $p2$jscomp$9$$) ? $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$ : $cljs$spec$alpha$accept_nil_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$spec$alpha$accept_nil_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$) : $cljs$spec$alpha$accept_nil_QMARK_$$.call(null, 
    $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$);
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_pcat$$, $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)) {
    return $cljs$core$every_QMARK_$$($cljs$spec$alpha$accept_nil_QMARK_$$, $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$);
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_alt$$, $and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)) {
    a: {
      for ($G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$ = $cljs$spec$alpha$accept_nil_QMARK_$$;;) {
        if ($cljs$core$seq$$($G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$)) {
          $G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$ = $cljs$core$first$$($G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$);
          $G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$ = $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$.$cljs$core$IFn$_invoke$arity$1$($G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$) : $G__12170$jscomp$inline_592_p1$jscomp$12_pred$jscomp$inline_588$$.call(null, $G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$);
          if ($cljs$core$truth_$$($G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$)) {
            $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$ = $G__12169$jscomp$inline_591_forms$jscomp$16_map__21429__$1_or__7960__auto__$jscomp$inline_590$$;
            break a;
          }
          $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$ = $cljs$core$next$$($G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$);
        } else {
          $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$ = null;
          break a;
        }
      }
    }
    return $G__12171$jscomp$inline_593_JSCompiler_inline_result$jscomp$515_coll$jscomp$inline_589_map__21429_p$jscomp$87_ps$jscomp$11_ret$jscomp$83$$;
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("No matching clause: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($and__7948__auto__$jscomp$62_op$jscomp$2_or__7960__auto__$jscomp$88$$)].join(""));
}, $cljs$spec$alpha$preturn$$ = function $cljs$spec$alpha$preturn$$($map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$) {
  $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$ = $cljs$spec$alpha$reg_resolve_BANG_$$($map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$);
  var $forms$jscomp$17_map__21450__$1$$ = null != $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$ && ($map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$) : 
  $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$;
  $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($forms$jscomp$17_map__21450__$1$$, $cljs$core$cst$0kw$0ps$$);
  var $p1$jscomp$13_seq__21452$$ = $cljs$core$seq$$($map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$), $first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$ = $cljs$core$first$$($p1$jscomp$13_seq__21452$$);
  $cljs$core$next$$($p1$jscomp$13_seq__21452$$);
  var $vec__21454$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($forms$jscomp$17_map__21450__$1$$, $cljs$core$cst$0kw$0ks$$), $k$jscomp$312$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__21454$$, 0, null), $op$jscomp$3$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($forms$jscomp$17_map__21450__$1$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$), $p1$jscomp$13_seq__21452$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($forms$jscomp$17_map__21450__$1$$, $cljs$core$cst$0kw$0p1$$), 
  $ret$jscomp$84$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($forms$jscomp$17_map__21450__$1$$, $cljs$core$cst$0kw$0ret$$), $forms$jscomp$17_map__21450__$1$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($forms$jscomp$17_map__21450__$1$$, $cljs$core$cst$0kw$0forms$$);
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_accept$$, $op$jscomp$3$$)) {
    return $ret$jscomp$84$$;
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(null, $op$jscomp$3$$)) {
    return null;
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_amp$$, $op$jscomp$3$$)) {
    return $first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$ = $cljs$spec$alpha$preturn$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$spec$alpha$preturn$$.$cljs$core$IFn$_invoke$arity$1$($p1$jscomp$13_seq__21452$$) : $cljs$spec$alpha$preturn$$.call(null, $p1$jscomp$13_seq__21452$$), $cljs$core$truth_$$($cljs$spec$alpha$noret_QMARK_$$($p1$jscomp$13_seq__21452$$, $first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$)) ? $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_nil$$ : $cljs$spec$alpha$and_preds$$($first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$, 
    $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$, $forms$jscomp$17_map__21450__$1$$);
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_rep$$, $op$jscomp$3$$)) {
    return $cljs$spec$alpha$add_ret$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$spec$alpha$add_ret$$.$cljs$core$IFn$_invoke$arity$3$($p1$jscomp$13_seq__21452$$, $ret$jscomp$84$$, $k$jscomp$312$$) : $cljs$spec$alpha$add_ret$$.call(null, $p1$jscomp$13_seq__21452$$, $ret$jscomp$84$$, $k$jscomp$312$$);
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_pcat$$, $op$jscomp$3$$)) {
    return $cljs$spec$alpha$add_ret$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$spec$alpha$add_ret$$.$cljs$core$IFn$_invoke$arity$3$($first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$, $ret$jscomp$84$$, $k$jscomp$312$$) : $cljs$spec$alpha$add_ret$$.call(null, $first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$, $ret$jscomp$84$$, $k$jscomp$312$$);
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_alt$$, $op$jscomp$3$$)) {
    return $first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$ = $cljs$spec$alpha$filter_alt$$($map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$, $vec__21454$$, $forms$jscomp$17_map__21450__$1$$, $cljs$spec$alpha$accept_nil_QMARK_$$), $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$, 0, null), $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$ = 
    $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$, 0, null), $first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$, 1, null), $first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$, 0, null), $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$ = 
    null == $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$ ? $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_nil$$ : $cljs$spec$alpha$preturn$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$spec$alpha$preturn$$.$cljs$core$IFn$_invoke$arity$1$($map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$) : $cljs$spec$alpha$preturn$$.call(null, $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$), $cljs$core$truth_$$($first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$) ? 
    $cljs$spec$alpha$tagged_ret$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$first__21453_k0_pret$jscomp$1_vec__21459_vec__21465$$, $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$], null)) : $map__21450_p$jscomp$88_p0__$1_r$jscomp$42_vec__21451_vec__21462$$;
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("No matching clause: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($op$jscomp$3$$)].join(""));
};
function $cljs$spec$alpha$add_ret$$($map__21507__$1_p$jscomp$90_ret$jscomp$90$$, $r$jscomp$43$$, $k$jscomp$318$$) {
  var $map__21507_prop$jscomp$6$$ = $cljs$spec$alpha$reg_resolve_BANG_$$($map__21507__$1_p$jscomp$90_ret$jscomp$90$$);
  $map__21507__$1_p$jscomp$90_ret$jscomp$90$$ = null != $map__21507_prop$jscomp$6$$ && ($map__21507_prop$jscomp$6$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $map__21507_prop$jscomp$6$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $map__21507_prop$jscomp$6$$) : $map__21507_prop$jscomp$6$$;
  var $op$jscomp$9$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21507__$1_p$jscomp$90_ret$jscomp$90$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$), $ps$jscomp$18$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21507__$1_p$jscomp$90_ret$jscomp$90$$, $cljs$core$cst$0kw$0ps$$), $splice$jscomp$1$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21507__$1_p$jscomp$90_ret$jscomp$90$$, $cljs$core$cst$0kw$0splice$$), $map__21507_prop$jscomp$6$$ = function($map__21507__$1_p$jscomp$90_ret$jscomp$90$$, 
  $map__21507_prop$jscomp$6$$, $op$jscomp$9$$, $ps$jscomp$18$$, $splice$jscomp$1$$, $splice$jscomp$2$$) {
    return function() {
      var $map__21507__$1_p$jscomp$90_ret$jscomp$90$$ = $cljs$spec$alpha$preturn$$($op$jscomp$9$$);
      return $cljs$core$empty_QMARK_$$($map__21507__$1_p$jscomp$90_ret$jscomp$90$$) ? $r$jscomp$43$$ : ($cljs$core$truth_$$($splice$jscomp$2$$) ? $cljs$core$into$$ : $cljs$core$conj$$).call(null, $r$jscomp$43$$, $cljs$core$truth_$$($k$jscomp$318$$) ? $cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$k$jscomp$318$$, $map__21507__$1_p$jscomp$90_ret$jscomp$90$$]) : $map__21507__$1_p$jscomp$90_ret$jscomp$90$$);
    };
  }($map__21507_prop$jscomp$6$$, $map__21507__$1_p$jscomp$90_ret$jscomp$90$$, $map__21507__$1_p$jscomp$90_ret$jscomp$90$$, $op$jscomp$9$$, $ps$jscomp$18$$, $splice$jscomp$1$$);
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(null, $op$jscomp$9$$)) {
    return $r$jscomp$43$$;
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_alt$$, $op$jscomp$9$$) || $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_accept$$, $op$jscomp$9$$) || $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_amp$$, $op$jscomp$9$$)) {
    return $map__21507__$1_p$jscomp$90_ret$jscomp$90$$ = $cljs$spec$alpha$preturn$$($map__21507__$1_p$jscomp$90_ret$jscomp$90$$), $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($map__21507__$1_p$jscomp$90_ret$jscomp$90$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_nil$$) ? $r$jscomp$43$$ : $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($r$jscomp$43$$, $cljs$core$truth_$$($k$jscomp$318$$) ? $cljs$core$PersistentArrayMap$createAsIfByAssoc$$([$k$jscomp$318$$, $map__21507__$1_p$jscomp$90_ret$jscomp$90$$]) : 
    $map__21507__$1_p$jscomp$90_ret$jscomp$90$$);
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_rep$$, $op$jscomp$9$$) || $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_pcat$$, $op$jscomp$9$$)) {
    return $map__21507_prop$jscomp$6$$();
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("No matching clause: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($op$jscomp$9$$)].join(""));
}
var $cljs$spec$alpha$deriv$$ = function $cljs$spec$alpha$deriv$$($p$jscomp$91$$, $x$jscomp$675$$) {
  var $map__21524_temp__5278__auto__$jscomp$41$$ = $cljs$spec$alpha$reg_resolve_BANG_$$($p$jscomp$91$$), $map__21524__$1$$ = null != $map__21524_temp__5278__auto__$jscomp$41$$ && ($map__21524_temp__5278__auto__$jscomp$41$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $map__21524_temp__5278__auto__$jscomp$41$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $map__21524_temp__5278__auto__$jscomp$41$$) : $map__21524_temp__5278__auto__$jscomp$41$$;
  var $ret__$1$jscomp$11_vec__21525$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21524__$1$$, $cljs$core$cst$0kw$0ps$$);
  var $seq__21526$$ = $cljs$core$seq$$($ret__$1$jscomp$11_vec__21525$$), $first__21527$$ = $cljs$core$first$$($seq__21526$$), $seq__21526__$1$$ = $cljs$core$next$$($seq__21526$$), $vec__21528$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21524__$1$$, $cljs$core$cst$0kw$0ks$$), $seq__21529$$ = $cljs$core$seq$$($vec__21528$$), $first__21530$$ = $cljs$core$first$$($seq__21529$$), $seq__21529__$1$$ = $cljs$core$next$$($seq__21529$$), $op$jscomp$11$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21524__$1$$, 
  $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$), $p1$jscomp$19$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21524__$1$$, $cljs$core$cst$0kw$0p1$$), $p2$jscomp$10$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21524__$1$$, $cljs$core$cst$0kw$0p2$$), $ret$jscomp$92$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21524__$1$$, $cljs$core$cst$0kw$0ret$$), $splice$jscomp$3$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21524__$1$$, $cljs$core$cst$0kw$0splice$$), 
  $forms$jscomp$23$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__21524__$1$$, $cljs$core$cst$0kw$0forms$$);
  if ($cljs$core$truth_$$($map__21524__$1$$)) {
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_accept$$, $op$jscomp$11$$)) {
      return null;
    }
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(null, $op$jscomp$11$$)) {
      return $ret__$1$jscomp$11_vec__21525$$ = $cljs$spec$alpha$dt$cljs$0core$0IFn$0_invoke$0arity$04$$($map__21524__$1$$, $x$jscomp$675$$, $map__21524__$1$$), $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($ret__$1$jscomp$11_vec__21525$$)) ? null : $cljs$spec$alpha$accept$$($ret__$1$jscomp$11_vec__21525$$);
    }
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_amp$$, $op$jscomp$11$$)) {
      return $map__21524_temp__5278__auto__$jscomp$41$$ = $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$($p1$jscomp$19$$, $x$jscomp$675$$) : $cljs$spec$alpha$deriv$$.call(null, $p1$jscomp$19$$, $x$jscomp$675$$), $cljs$core$truth_$$($map__21524_temp__5278__auto__$jscomp$41$$) ? $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_accept$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$.$cljs$core$IFn$_invoke$arity$1$($map__21524_temp__5278__auto__$jscomp$41$$)) ? 
      ($ret__$1$jscomp$11_vec__21525$$ = $cljs$spec$alpha$and_preds$$($cljs$spec$alpha$preturn$$($map__21524_temp__5278__auto__$jscomp$41$$), $ret__$1$jscomp$11_vec__21525$$, $cljs$core$next$$($forms$jscomp$23$$)), $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($ret__$1$jscomp$11_vec__21525$$)) ? null : $cljs$spec$alpha$accept$$($ret__$1$jscomp$11_vec__21525$$)) : new $cljs$core$PersistentArrayMap$$(null, 4, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_op$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_amp$$, 
      $cljs$core$cst$0kw$0p1$$, $map__21524_temp__5278__auto__$jscomp$41$$, $cljs$core$cst$0kw$0ps$$, $ret__$1$jscomp$11_vec__21525$$, $cljs$core$cst$0kw$0forms$$, $forms$jscomp$23$$], null) : null;
    }
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_pcat$$, $op$jscomp$11$$)) {
      return $cljs$spec$alpha$alt2$$($cljs$spec$alpha$pcat_STAR_$$(new $cljs$core$PersistentArrayMap$$(null, 4, [$cljs$core$cst$0kw$0ps$$, $cljs$core$cons$$($cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$($first__21527$$, $x$jscomp$675$$) : $cljs$spec$alpha$deriv$$.call(null, $first__21527$$, $x$jscomp$675$$), $seq__21526__$1$$), $cljs$core$cst$0kw$0ks$$, $vec__21528$$, $cljs$core$cst$0kw$0forms$$, $forms$jscomp$23$$, $cljs$core$cst$0kw$0ret$$, 
      $ret$jscomp$92$$], null)), $cljs$core$truth_$$($cljs$spec$alpha$accept_nil_QMARK_$$($first__21527$$)) ? function() {
        var $p$jscomp$91$$ = $cljs$spec$alpha$pcat_STAR_$$(new $cljs$core$PersistentArrayMap$$(null, 4, [$cljs$core$cst$0kw$0ps$$, $seq__21526__$1$$, $cljs$core$cst$0kw$0ks$$, $seq__21529__$1$$, $cljs$core$cst$0kw$0forms$$, $cljs$core$next$$($forms$jscomp$23$$), $cljs$core$cst$0kw$0ret$$, $cljs$spec$alpha$add_ret$$($first__21527$$, $ret$jscomp$92$$, $first__21530$$)], null));
        return $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$($p$jscomp$91$$, $x$jscomp$675$$) : $cljs$spec$alpha$deriv$$.call(null, $p$jscomp$91$$, $x$jscomp$675$$);
      }() : null);
    }
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_alt$$, $op$jscomp$11$$)) {
      return $cljs$spec$alpha$alt_STAR_$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function() {
        return function($p$jscomp$91$$) {
          return $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$($p$jscomp$91$$, $x$jscomp$675$$) : $cljs$spec$alpha$deriv$$.call(null, $p$jscomp$91$$, $x$jscomp$675$$);
        };
      }($op$jscomp$11$$, $map__21524_temp__5278__auto__$jscomp$41$$, $map__21524__$1$$, $map__21524__$1$$, $ret__$1$jscomp$11_vec__21525$$, $seq__21526$$, $first__21527$$, $seq__21526__$1$$, $first__21527$$, $seq__21526__$1$$, $ret__$1$jscomp$11_vec__21525$$, $vec__21528$$, $seq__21529$$, $first__21530$$, $seq__21529__$1$$, $first__21530$$, $seq__21529__$1$$, $vec__21528$$, $op$jscomp$11$$, $p1$jscomp$19$$, $p2$jscomp$10$$, $ret$jscomp$92$$, $splice$jscomp$3$$, $forms$jscomp$23$$), $ret__$1$jscomp$11_vec__21525$$), 
      $vec__21528$$, $forms$jscomp$23$$);
    }
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_rep$$, $op$jscomp$11$$)) {
      return $cljs$spec$alpha$alt2$$($cljs$spec$alpha$rep_STAR_$$($cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$($p1$jscomp$19$$, $x$jscomp$675$$) : $cljs$spec$alpha$deriv$$.call(null, $p1$jscomp$19$$, $x$jscomp$675$$), $p2$jscomp$10$$, $ret$jscomp$92$$, $splice$jscomp$3$$, $forms$jscomp$23$$), $cljs$core$truth_$$($cljs$spec$alpha$accept_nil_QMARK_$$($p1$jscomp$19$$)) ? function() {
        var $p$jscomp$91$$ = $cljs$spec$alpha$rep_STAR_$$($p2$jscomp$10$$, $p2$jscomp$10$$, $cljs$spec$alpha$add_ret$$($p1$jscomp$19$$, $ret$jscomp$92$$, null), $splice$jscomp$3$$, $forms$jscomp$23$$);
        return $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$deriv$$.$cljs$core$IFn$_invoke$arity$2$($p$jscomp$91$$, $x$jscomp$675$$) : $cljs$spec$alpha$deriv$$.call(null, $p$jscomp$91$$, $x$jscomp$675$$);
      }() : null);
    }
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("No matching clause: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($op$jscomp$11$$)].join(""));
  }
  return null;
};
function $cljs$spec$alpha$re_conform$$($p$jscomp$95$$, $p__21646$$) {
  for (;;) {
    var $ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$ = $p__21646$$, $seq__21651_seq__21651__$1_xs$jscomp$12$$ = $cljs$core$seq$$($ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$), $G__21654_first__21652_x$jscomp$680$$ = $cljs$core$first$$($seq__21651_seq__21651__$1_xs$jscomp$12$$), $seq__21651_seq__21651__$1_xs$jscomp$12$$ = $cljs$core$next$$($seq__21651_seq__21651__$1_xs$jscomp$12$$);
    if ($cljs$core$empty_QMARK_$$($ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$)) {
      return $cljs$core$truth_$$($cljs$spec$alpha$accept_nil_QMARK_$$($p$jscomp$95$$)) ? ($ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$ = $cljs$spec$alpha$preturn$$($p$jscomp$95$$), $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_nil$$) ? null : $ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$) : $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
    }
    $ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$ = $cljs$spec$alpha$deriv$$($p$jscomp$95$$, $G__21654_first__21652_x$jscomp$680$$);
    if ($cljs$core$truth_$$($ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$)) {
      $G__21654_first__21652_x$jscomp$680$$ = $seq__21651_seq__21651__$1_xs$jscomp$12$$, $p$jscomp$95$$ = $ret$jscomp$99_temp__5276__auto__$jscomp$38_vec__21650$$, $p__21646$$ = $G__21654_first__21652_x$jscomp$680$$;
    } else {
      return $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
    }
  }
}
var $cljs$spec$alpha$regex_spec_impl$$ = function $cljs$spec$alpha$regex_spec_impl$$($re$jscomp$11$$, $gfn$jscomp$46$$) {
  "undefined" === typeof $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$ && ($cljs$spec$alpha$t_cljs$0spec$0alpha21681$$ = function($re$jscomp$11$$, $gfn$jscomp$46$$, $meta21682$$) {
    this.$re$ = $re$jscomp$11$$;
    this.$gfn$ = $gfn$jscomp$46$$;
    this.$meta21682$ = $meta21682$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($re$jscomp$11$$, $gfn$jscomp$46$$) {
    return new $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$(this.$re$, this.$gfn$, $gfn$jscomp$46$$);
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return this.$meta21682$;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$ = function() {
    return this;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$ = function() {
    return this;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.prototype.$cljs$spec$alpha$Spec$$ = $cljs$core$PROTOCOL_SENTINEL$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.prototype.$cljs$spec$alpha$Spec$conform_STAR_$arity$2$ = function($re$jscomp$11$$, $gfn$jscomp$46$$) {
    var $_$jscomp$318$$;
    ($_$jscomp$318$$ = null == $gfn$jscomp$46$$) || ($_$jscomp$318$$ = null == $gfn$jscomp$46$$ ? !1 : null != $gfn$jscomp$46$$ ? $gfn$jscomp$46$$.$cljs$lang$protocol_mask$partition0$$ & 8 || $cljs$core$PROTOCOL_SENTINEL$$ === $gfn$jscomp$46$$.$cljs$core$ICollection$$ ? !0 : $gfn$jscomp$46$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICollection$$, $gfn$jscomp$46$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICollection$$, $gfn$jscomp$46$$));
    return $_$jscomp$318$$ ? $cljs$spec$alpha$re_conform$$(this.$re$, $cljs$core$seq$$($gfn$jscomp$46$$)) : $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.prototype.$cljs$spec$alpha$Spec$with_gen_STAR_$arity$2$ = function($re$jscomp$11$$, $gfn$jscomp$46$$) {
    return $cljs$spec$alpha$regex_spec_impl$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$spec$alpha$regex_spec_impl$$.$cljs$core$IFn$_invoke$arity$2$(this.$re$, $gfn$jscomp$46$$) : $cljs$spec$alpha$regex_spec_impl$$.call(null, this.$re$, $gfn$jscomp$46$$);
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.$getBasis$ = function() {
    return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0re$$, $cljs$core$cst$0sym$0gfn$$, $cljs$core$cst$0sym$0meta21682$$], null);
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.$cljs$lang$type$ = !0, $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.$cljs$lang$ctorStr$ = "cljs.spec.alpha/t_cljs$spec$alpha21681", $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$.$cljs$lang$ctorPrWriter$ = function($re$jscomp$11$$, $gfn$jscomp$46$$) {
    return $cljs$core$_write$$($gfn$jscomp$46$$, "cljs.spec.alpha/t_cljs$spec$alpha21681");
  });
  return new $cljs$spec$alpha$t_cljs$0spec$0alpha21681$$($re$jscomp$11$$, $gfn$jscomp$46$$, $cljs$core$PersistentArrayMap$EMPTY$$);
};
$cljs$spec$alpha$def_impl$$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_kvs_DASH__GT_map$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_conformer$$, $cljs$core$list$$($cljs$core$cst$0sym$0fn_STAR_$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0p1__21708_SHARP_$$], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_zipmap$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_map$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_k$$, 
$cljs$core$cst$0sym$0p1__21708_SHARP_$$), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_map$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_v$$, $cljs$core$cst$0sym$0p1__21708_SHARP_$$))), $cljs$core$list$$($cljs$core$cst$0sym$0fn_STAR_$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0p1__21709_SHARP_$$], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_map$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_fn$$, 
new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0k$$, $cljs$core$cst$0sym$0v$$], null)], null), new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_k$$, $cljs$core$cst$0sym$0k$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_v$$, $cljs$core$cst$0sym$0v$$], null)), $cljs$core$cst$0sym$0p1__21709_SHARP_$$))), $cljs$spec$alpha$spec_impl$cljs$0core$0IFn$0_invoke$0arity$05$$($cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_conformer$$, 
$cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_fn$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0_PERCENT_$$], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_zipmap$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_map$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_k$$, $cljs$core$cst$0sym$0_PERCENT_$$), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_map$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_v$$, 
$cljs$core$cst$0sym$0_PERCENT_$$))), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_fn$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0_PERCENT_$$], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_map$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_fn$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
[$cljs$core$cst$0sym$0k$$, $cljs$core$cst$0sym$0v$$], null)], null), new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_k$$, $cljs$core$cst$0sym$0k$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_v$$, $cljs$core$cst$0sym$0v$$], null)), $cljs$core$cst$0sym$0_PERCENT_$$))), function($p1__21708_SHARP_$$) {
  return $cljs$core$zipmap$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_k$$, $p1__21708_SHARP_$$), $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_v$$, $p1__21708_SHARP_$$));
}, null, !0, function($p1__21709_SHARP_$$) {
  return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__21709_SHARP_$$) {
    var $p__21710_v$jscomp$105$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__21709_SHARP_$$, 0, null);
    $p1__21709_SHARP_$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p1__21709_SHARP_$$, 1, null);
    return new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_k$$, $p__21710_v$jscomp$105$$, $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_v$$, $p1__21709_SHARP_$$], null);
  }, $p1__21709_SHARP_$$);
}));
if ("undefined" === typeof $cljs$spec$alpha$_STAR_compile_asserts_STAR_$$) {
  var $cljs$spec$alpha$_STAR_compile_asserts_STAR_$$ = !0;
}
if ("undefined" === typeof $cljs$spec$alpha$_STAR_runtime_asserts_STAR_$$) {
  var $cljs$spec$alpha$_STAR_runtime_asserts_STAR_$$ = !1;
}
;$cljs$spec$alpha$def_impl$$($cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_key$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_or$$, $cljs$core$cst$0kw$0string$$, $cljs$core$cst$0sym$0cljs$0core_SLASH_string_QMARK_$$, $cljs$core$cst$0kw$0keyword$$, $cljs$core$cst$0sym$0cljs$0core_SLASH_keyword_QMARK_$$), $cljs$spec$alpha$or_spec_impl$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0kw$0string$$, $cljs$core$cst$0kw$0keyword$$], 
null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0cljs$0core_SLASH_string_QMARK_$$, $cljs$core$cst$0sym$0cljs$0core_SLASH_keyword_QMARK_$$], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$string_QMARK_$$, function($x$jscomp$292$$) {
  return $x$jscomp$292$$ instanceof $cljs$core$Keyword$$;
}], null), null));
$cljs$spec$alpha$def_impl$$($cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_or$$, $cljs$core$cst$0kw$0key$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_key$$, $cljs$core$cst$0kw$0selector$$, $cljs$core$list$$($cljs$core$cst$0sym$0oops$0spec_SLASH_native_DASH_array_DASH_aware_DASH__STAR_$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$)), $cljs$spec$alpha$or_spec_impl$$(new $cljs$core$PersistentVector$$(null, 
2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0kw$0key$$, $cljs$core$cst$0kw$0selector$$], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_key$$, $cljs$core$list$$($cljs$core$cst$0sym$0oops$0spec_SLASH_native_DASH_array_DASH_aware_DASH__STAR_$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$)], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, 
[$cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_key$$, $cljs$spec$alpha$or_spec_impl$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0kw$0regex$$, $cljs$core$cst$0kw$0native_DASH_array$$], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH__STAR_$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_fn$$, 
new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0_PERCENT_$$], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_and$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_array_QMARK_$$, $cljs$core$cst$0sym$0_PERCENT_$$), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_every_QMARK_$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_partial$$, $cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_valid_QMARK_$$, 
$cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$), $cljs$core$cst$0sym$0_PERCENT_$$)))], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$spec$alpha$rep_STAR_$$($cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$, $cljs$core$PersistentVector$EMPTY$$, !1, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_selector$$), function($p1__21754__21755__auto__$$) {
  return $cljs$core$array_QMARK_$$($p1__21754__21755__auto__$$) && $cljs$core$every_QMARK_$$($cljs$core$partial$cljs$0core$0IFn$0_invoke$0arity$02$$(), $p1__21754__21755__auto__$$);
}], null), null)], null), null));
for (var $JSCompiler_inline_result$jscomp$85$$, $items$jscomp$inline_491$$ = [$cljs$core$list$$($cljs$core$cst$0sym$0get_DASH_soft_DASH_access$$), $cljs$core$list$$($cljs$core$cst$0sym$0get_DASH_punch_DASH_access$$), $cljs$core$list$$($cljs$core$cst$0sym$0get_DASH_dot_DASH_access$$)], $len$jscomp$inline_492$$ = $items$jscomp$inline_491$$.length, $t$jscomp$inline_493$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashSet$EMPTY$$), $i_13414$jscomp$inline_494$$ = 0;;) {
  if ($i_13414$jscomp$inline_494$$ < $len$jscomp$inline_492$$) {
    $cljs$core$_conj_BANG_$$($t$jscomp$inline_493$$, $items$jscomp$inline_491$$[$i_13414$jscomp$inline_494$$]), $i_13414$jscomp$inline_494$$ += 1;
  } else {
    break;
  }
}
$JSCompiler_inline_result$jscomp$85$$ = $cljs$core$_persistent_BANG_$$($t$jscomp$inline_493$$);
$cljs$spec$alpha$def_impl$$($cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_mode$$, $JSCompiler_inline_result$jscomp$85$$, new $cljs$core$PersistentHashSet$$(null, new $cljs$core$PersistentArrayMap$$(null, 3, [1, null, 2, null, 0, null], null), null));
$cljs$spec$alpha$def_impl$$($cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_key$$, $cljs$core$cst$0sym$0cljs$0core_SLASH_string_QMARK_$$, $cljs$core$string_QMARK_$$);
var $JSCompiler_temp_const$jscomp$93$$ = $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_tuple$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_mode$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_key$$), $JSCompiler_inline_result$jscomp$94$$;
$JSCompiler_inline_result$jscomp$94$$ = $cljs$spec$alpha$tuple_impl$cljs$0core$0IFn$0_invoke$0arity$03$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_mode$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_key$$], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_mode$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_key$$], 
null), null);
$cljs$spec$alpha$def_impl$$($cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_item$$, $JSCompiler_temp_const$jscomp$93$$, $JSCompiler_inline_result$jscomp$94$$);
$cljs$spec$alpha$def_impl$$($cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_and$$, $cljs$core$cst$0sym$0cljs$0core_SLASH_array_QMARK_$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_fn$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0arr$$], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_let$$, new $cljs$core$PersistentVector$$(null, 2, 5, 
$cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0pairs$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_map$$, $cljs$core$cst$0sym$0cljs$0core_SLASH_vec$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_partition_DASH_all$$, 2, $cljs$core$cst$0sym$0arr$$))], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_valid_QMARK_$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH__STAR_$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_item$$), 
$cljs$core$cst$0sym$0pairs$$)))), function $cljs$spec$alpha$and_spec_impl$$($forms$jscomp$7$$, $preds$jscomp$7$$, $gfn$jscomp$35$$) {
  var $specs$jscomp$40$$ = new $cljs$core$Delay$$(function() {
    return $cljs$core$into$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$PersistentVector$EMPTY$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$($cljs$spec$alpha$specize$$, $preds$jscomp$7$$, $forms$jscomp$7$$));
  }, null), $cform$jscomp$18$$ = function() {
    var $forms$jscomp$7$$ = $cljs$core$count$$($preds$jscomp$7$$);
    switch($forms$jscomp$7$$) {
      case 2:
        return function($forms$jscomp$7$$, $preds$jscomp$7$$) {
          return function($forms$jscomp$7$$) {
            var $gfn$jscomp$35$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($preds$jscomp$7$$) : $cljs$core$deref$$.call(null, $preds$jscomp$7$$);
            $forms$jscomp$7$$ = $cljs$spec$alpha$conform_STAR_$$($gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$ ? $gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$(0) : $gfn$jscomp$35$$.call(null, 0), $forms$jscomp$7$$);
            return $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($forms$jscomp$7$$)) ? $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$ : $cljs$spec$alpha$conform_STAR_$$($gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$ ? $gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$(1) : $gfn$jscomp$35$$.call(null, 1), $forms$jscomp$7$$);
          };
        }($forms$jscomp$7$$, $specs$jscomp$40$$);
      case 3:
        return function($forms$jscomp$7$$, $preds$jscomp$7$$) {
          return function($forms$jscomp$7$$) {
            var $gfn$jscomp$35$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($preds$jscomp$7$$) : $cljs$core$deref$$.call(null, $preds$jscomp$7$$);
            $forms$jscomp$7$$ = $cljs$spec$alpha$conform_STAR_$$($gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$ ? $gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$(0) : $gfn$jscomp$35$$.call(null, 0), $forms$jscomp$7$$);
            if ($cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($forms$jscomp$7$$))) {
              return $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
            }
            $forms$jscomp$7$$ = $cljs$spec$alpha$conform_STAR_$$($gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$ ? $gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$(1) : $gfn$jscomp$35$$.call(null, 1), $forms$jscomp$7$$);
            return $cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($forms$jscomp$7$$)) ? $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$ : $cljs$spec$alpha$conform_STAR_$$($gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$ ? $gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$(2) : $gfn$jscomp$35$$.call(null, 2), $forms$jscomp$7$$);
          };
        }($forms$jscomp$7$$, $specs$jscomp$40$$);
      default:
        return function($forms$jscomp$7$$, $preds$jscomp$7$$) {
          return function($forms$jscomp$7$$) {
            for (var $gfn$jscomp$35$$ = $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($preds$jscomp$7$$) : $cljs$core$deref$$.call(null, $preds$jscomp$7$$), $specs$jscomp$40$$ = 0;;) {
              if ($specs$jscomp$40$$ < $cljs$core$count$$($gfn$jscomp$35$$)) {
                $forms$jscomp$7$$ = $cljs$spec$alpha$conform_STAR_$$($gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$ ? $gfn$jscomp$35$$.$cljs$core$IFn$_invoke$arity$1$($specs$jscomp$40$$) : $gfn$jscomp$35$$.call(null, $specs$jscomp$40$$), $forms$jscomp$7$$);
                if ($cljs$core$truth_$$($cljs$spec$alpha$invalid_QMARK_$$($forms$jscomp$7$$))) {
                  return $cljs$core$cst$0kw$0cljs$0spec$0alpha_SLASH_invalid$$;
                }
                $specs$jscomp$40$$ += 1;
              } else {
                return $forms$jscomp$7$$;
              }
            }
          };
        }($forms$jscomp$7$$, $specs$jscomp$40$$);
    }
  }();
  "undefined" === typeof $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$ && ($cljs$spec$alpha$t_cljs$0spec$0alpha21280$$ = function($forms$jscomp$7$$, $preds$jscomp$7$$, $gfn$jscomp$35$$, $specs$jscomp$40$$, $cform$jscomp$18$$, $meta21281$$) {
    this.forms = $forms$jscomp$7$$;
    this.$preds$ = $preds$jscomp$7$$;
    this.$gfn$ = $gfn$jscomp$35$$;
    this.$specs$ = $specs$jscomp$40$$;
    this.$cform$ = $cform$jscomp$18$$;
    this.$meta21281$ = $meta21281$$;
    this.$cljs$lang$protocol_mask$partition0$$ = 393216;
    this.$cljs$lang$protocol_mask$partition1$$ = 0;
  }, $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function() {
    return function($forms$jscomp$7$$, $preds$jscomp$7$$) {
      return new $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$(this.forms, this.$preds$, this.$gfn$, this.$specs$, this.$cform$, $preds$jscomp$7$$);
    };
  }($specs$jscomp$40$$, $cform$jscomp$18$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
    return function() {
      return this.$meta21281$;
    };
  }($specs$jscomp$40$$, $cform$jscomp$18$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$1$ = function() {
    return function() {
      return this;
    };
  }($specs$jscomp$40$$, $cform$jscomp$18$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.prototype.$cljs$spec$alpha$Specize$specize_STAR_$arity$2$ = function() {
    return function() {
      return this;
    };
  }($specs$jscomp$40$$, $cform$jscomp$18$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.prototype.$cljs$spec$alpha$Spec$$ = $cljs$core$PROTOCOL_SENTINEL$$, $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.prototype.$cljs$spec$alpha$Spec$conform_STAR_$arity$2$ = function() {
    return function($forms$jscomp$7$$, $preds$jscomp$7$$) {
      return this.$cform$.$cljs$core$IFn$_invoke$arity$1$ ? this.$cform$.$cljs$core$IFn$_invoke$arity$1$($preds$jscomp$7$$) : this.$cform$.call(null, $preds$jscomp$7$$);
    };
  }($specs$jscomp$40$$, $cform$jscomp$18$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.prototype.$cljs$spec$alpha$Spec$with_gen_STAR_$arity$2$ = function() {
    return function($forms$jscomp$7$$, $preds$jscomp$7$$) {
      return $cljs$spec$alpha$and_spec_impl$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$spec$alpha$and_spec_impl$$.$cljs$core$IFn$_invoke$arity$3$(this.forms, this.$preds$, $preds$jscomp$7$$) : $cljs$spec$alpha$and_spec_impl$$.call(null, this.forms, this.$preds$, $preds$jscomp$7$$);
    };
  }($specs$jscomp$40$$, $cform$jscomp$18$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.$getBasis$ = function() {
    return function() {
      return new $cljs$core$PersistentVector$$(null, 6, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0forms$$, $cljs$core$cst$0sym$0preds$$, $cljs$core$cst$0sym$0gfn$$, $cljs$core$cst$0sym$0specs$$, $cljs$core$cst$0sym$0cform$$, $cljs$core$cst$0sym$0meta21281$$], null);
    };
  }($specs$jscomp$40$$, $cform$jscomp$18$$), $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.$cljs$lang$type$ = !0, $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.$cljs$lang$ctorStr$ = "cljs.spec.alpha/t_cljs$spec$alpha21280", $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$.$cljs$lang$ctorPrWriter$ = function() {
    return function($forms$jscomp$7$$, $preds$jscomp$7$$) {
      return $cljs$core$_write$$($preds$jscomp$7$$, "cljs.spec.alpha/t_cljs$spec$alpha21280");
    };
  }($specs$jscomp$40$$, $cform$jscomp$18$$));
  return new $cljs$spec$alpha$t_cljs$0spec$0alpha21280$$($forms$jscomp$7$$, $preds$jscomp$7$$, $gfn$jscomp$35$$, $specs$jscomp$40$$, $cform$jscomp$18$$, $cljs$core$PersistentArrayMap$EMPTY$$);
}(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0cljs$0core_SLASH_array_QMARK_$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_fn$$, new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0arr$$], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_let$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0sym$0pairs$$, 
$cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_map$$, $cljs$core$cst$0sym$0cljs$0core_SLASH_vec$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0core_SLASH_partition_DASH_all$$, 2, $cljs$core$cst$0sym$0arr$$))], null), $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH_valid_QMARK_$$, $cljs$core$list$$($cljs$core$cst$0sym$0cljs$0spec$0alpha_SLASH__STAR_$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_item$$), $cljs$core$cst$0sym$0pairs$$)))], null), new $cljs$core$PersistentVector$$(null, 
2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$array_QMARK_$$, function($arr$jscomp$152_pairs$$) {
  $arr$jscomp$152_pairs$$ = $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$vec$$, $cljs$core$partition_all$cljs$0core$0IFn$0_invoke$0arity$03$$(2, 2, $arr$jscomp$152_pairs$$));
  return $cljs$spec$alpha$valid_QMARK_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$spec$alpha$rep_STAR_$$($cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_item$$, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_item$$, $cljs$core$PersistentVector$EMPTY$$, !1, $cljs$core$cst$0kw$0oops$0sdefs_SLASH_obj_DASH_path_DASH_item$$), $arr$jscomp$152_pairs$$);
}], null), null));
function $chromex$chrome_port$ChromePort$$($config$jscomp$10$$, $native_chrome_port$$, $channel$jscomp$2$$, $connected_QMARK_$$) {
  this.$config$ = $config$jscomp$10$$;
  this.$native_chrome_port$ = $native_chrome_port$$;
  this.channel = $channel$jscomp$2$$;
  this.$connected_QMARK_$ = $connected_QMARK_$$;
}
$JSCompiler_prototypeAlias$$ = $chromex$chrome_port$ChromePort$$.prototype;
$JSCompiler_prototypeAlias$$.$chromex$protocols$IChromePort$post_message_BANG_$arity$2$ = function($this$$jscomp$156$$, $message$jscomp$30$$) {
  if (null == $message$jscomp$30$$) {
    var $config__14251__auto__$$ = this.$config$;
    var $fn_22263_handler_key__14252__auto__$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_with_DASH_nil$$;
    var $call_info_22264_handler__14253__auto___target_obj_22262$$ = $fn_22263_handler_key__14252__auto__$$.$cljs$core$IFn$_invoke$arity$1$ ? $fn_22263_handler_key__14252__auto__$$.$cljs$core$IFn$_invoke$arity$1$($config__14251__auto__$$) : $fn_22263_handler_key__14252__auto__$$.call(null, $config__14251__auto__$$);
    if (!$cljs$core$fn_QMARK_$$($call_info_22264_handler__14253__auto___target_obj_22262$$)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($fn_22263_handler_key__14252__auto__$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($config__14251__auto__$$)].join("")), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
    }
    return $call_info_22264_handler__14253__auto___target_obj_22262$$.$cljs$core$IFn$_invoke$arity$2$ ? $call_info_22264_handler__14253__auto___target_obj_22262$$.$cljs$core$IFn$_invoke$arity$2$($config__14251__auto__$$, this) : $call_info_22264_handler__14253__auto___target_obj_22262$$.call(null, $config__14251__auto__$$, this);
  }
  if ($cljs$core$truth_$$(this.$connected_QMARK_$)) {
    return $call_info_22264_handler__14253__auto___target_obj_22262$$ = this.$native_chrome_port$, $call_info_22264_handler__14253__auto___target_obj_22262$$ = [$call_info_22264_handler__14253__auto___target_obj_22262$$, $call_info_22264_handler__14253__auto___target_obj_22262$$.postMessage], $fn_22263_handler_key__14252__auto__$$ = $call_info_22264_handler__14253__auto___target_obj_22262$$[1], null != $fn_22263_handler_key__14252__auto__$$ ? $fn_22263_handler_key__14252__auto__$$.call($call_info_22264_handler__14253__auto___target_obj_22262$$[0], 
    $message$jscomp$30$$) : null;
  }
  $config__14251__auto__$$ = this.$config$;
  $fn_22263_handler_key__14252__auto__$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$;
  $call_info_22264_handler__14253__auto___target_obj_22262$$ = $fn_22263_handler_key__14252__auto__$$.$cljs$core$IFn$_invoke$arity$1$ ? $fn_22263_handler_key__14252__auto__$$.$cljs$core$IFn$_invoke$arity$1$($config__14251__auto__$$) : $fn_22263_handler_key__14252__auto__$$.call(null, $config__14251__auto__$$);
  if (!$cljs$core$fn_QMARK_$$($call_info_22264_handler__14253__auto___target_obj_22262$$)) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($fn_22263_handler_key__14252__auto__$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($config__14251__auto__$$)].join("")), 
    $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
  }
  return $call_info_22264_handler__14253__auto___target_obj_22262$$.$cljs$core$IFn$_invoke$arity$2$ ? $call_info_22264_handler__14253__auto___target_obj_22262$$.$cljs$core$IFn$_invoke$arity$2$($config__14251__auto__$$, this) : $call_info_22264_handler__14253__auto___target_obj_22262$$.call(null, $config__14251__auto__$$, this);
};
function $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2$$($JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2$self$$, $callback$jscomp$63$$) {
  if ($cljs$core$truth_$$($JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2$self$$.$connected_QMARK_$)) {
    var $call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$ = $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2$self$$.$native_chrome_port$.onDisconnect;
    if (!$cljs$core$truth_$$($call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$)) {
      throw Error("Assert failed: on-disconnect-event");
    }
    var $call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$ = [$call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$, $call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$.addListener], $fn_22273_handler__14253__auto__$jscomp$2$$ = $call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$[1];
    null != $fn_22273_handler__14253__auto__$jscomp$2$$ && $fn_22273_handler__14253__auto__$jscomp$2$$.call($call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$[0], $callback$jscomp$63$$);
  } else {
    $call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$ = $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2$self$$.$config$;
    $fn_22273_handler__14253__auto__$jscomp$2$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.$cljs$core$IFn$_invoke$arity$1$($call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$) : $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.call(null, 
    $call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$);
    if (!$cljs$core$fn_QMARK_$$($fn_22273_handler__14253__auto__$jscomp$2$$)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$)].join("")), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
    }
    $fn_22273_handler__14253__auto__$jscomp$2$$.$cljs$core$IFn$_invoke$arity$2$ ? $fn_22273_handler__14253__auto__$jscomp$2$$.$cljs$core$IFn$_invoke$arity$2$($call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$, $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2$self$$) : $fn_22273_handler__14253__auto__$jscomp$2$$.call(null, $call_info_22274_config__14251__auto__$jscomp$2_on_disconnect_event$$, $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2$self$$);
  }
}
function $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_message_BANG_$arity$2$$($JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_message_BANG_$arity$2$self$$, $callback$jscomp$64$$) {
  if ($cljs$core$truth_$$($JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_message_BANG_$arity$2$self$$.$connected_QMARK_$)) {
    var $call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$ = $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_message_BANG_$arity$2$self$$.$native_chrome_port$.onMessage;
    if (!$cljs$core$truth_$$($call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$)) {
      throw Error("Assert failed: on-message-event");
    }
    var $call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$ = [$call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$, $call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$.addListener], $fn_22279_handler__14253__auto__$jscomp$3$$ = $call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$[1];
    null != $fn_22279_handler__14253__auto__$jscomp$3$$ && $fn_22279_handler__14253__auto__$jscomp$3$$.call($call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$[0], $callback$jscomp$64$$);
  } else {
    $call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$ = $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_message_BANG_$arity$2$self$$.$config$;
    $fn_22279_handler__14253__auto__$jscomp$3$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.$cljs$core$IFn$_invoke$arity$1$($call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$) : $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.call(null, 
    $call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$);
    if (!$cljs$core$fn_QMARK_$$($fn_22279_handler__14253__auto__$jscomp$3$$)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$)].join("")), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
    }
    $fn_22279_handler__14253__auto__$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$ ? $fn_22279_handler__14253__auto__$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$($call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$, $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_message_BANG_$arity$2$self$$) : $fn_22279_handler__14253__auto__$jscomp$3$$.call(null, $call_info_22280_config__14251__auto__$jscomp$3_on_message_event$$, $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_message_BANG_$arity$2$self$$);
  }
}
$JSCompiler_prototypeAlias$$.$chromex$protocols$IChromePortState$set_connected_BANG_$arity$2$ = function($_this$jscomp$3$$, $val$jscomp$119$$) {
  return this.$connected_QMARK_$ = $val$jscomp$119$$;
};
$JSCompiler_prototypeAlias$$.$chromex$protocols$IChromePortState$put_message_BANG_$arity$2$ = function($this$$jscomp$160$$, $message$jscomp$31$$) {
  if ($cljs$core$truth_$$(this.$connected_QMARK_$)) {
    return $cljs$core$async$put_BANG_$cljs$0core$0IFn$0_invoke$0arity$02$$(this.channel, $message$jscomp$31$$);
  }
  var $config__14251__auto__$jscomp$4$$ = this.$config$, $handler__14253__auto__$jscomp$4$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_put_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$cst$0kw$0chrome_DASH_port_DASH_put_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.$cljs$core$IFn$_invoke$arity$1$($config__14251__auto__$jscomp$4$$) : $cljs$core$cst$0kw$0chrome_DASH_port_DASH_put_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.call(null, 
  $config__14251__auto__$jscomp$4$$);
  if (!$cljs$core$fn_QMARK_$$($handler__14253__auto__$jscomp$4$$)) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$cst$0kw$0chrome_DASH_port_DASH_put_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($config__14251__auto__$jscomp$4$$)].join("")), 
    $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
  }
  return $handler__14253__auto__$jscomp$4$$.$cljs$core$IFn$_invoke$arity$3$ ? $handler__14253__auto__$jscomp$4$$.$cljs$core$IFn$_invoke$arity$3$($config__14251__auto__$jscomp$4$$, this, $message$jscomp$31$$) : $handler__14253__auto__$jscomp$4$$.call(null, $config__14251__auto__$jscomp$4$$, this, $message$jscomp$31$$);
};
$JSCompiler_prototypeAlias$$.$chromex$protocols$IChromePortState$close_resources_BANG_$arity$1$ = function() {
  return $cljs$core$async$impl$protocols$close_BANG_$$(this.channel);
};
$JSCompiler_prototypeAlias$$.$cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2$ = function($_this$jscomp$5$$, $handler$jscomp$7$$) {
  return $cljs$core$async$impl$protocols$take_BANG_$$(this.channel, $handler$jscomp$7$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1$ = function() {
  if ($cljs$core$truth_$$(this.$connected_QMARK_$)) {
    var $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$ = this.$native_chrome_port$;
    $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$ = [$JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$, $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$.disconnect];
    var $fn_22267$jscomp$inline_598_handler__14253__auto__$jscomp$inline_600$$ = $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$[1];
    $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$ = null != $fn_22267$jscomp$inline_598_handler__14253__auto__$jscomp$inline_600$$ ? $fn_22267$jscomp$inline_598_handler__14253__auto__$jscomp$inline_600$$.call($JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$[0]) : null;
  } else {
    $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$ = this.$config$;
    $fn_22267$jscomp$inline_598_handler__14253__auto__$jscomp$inline_600$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$cst$0kw$0chrome_DASH_port_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$) : $cljs$core$cst$0kw$0chrome_DASH_port_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$.call(null, 
    $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$);
    if (!$cljs$core$fn_QMARK_$$($fn_22267$jscomp$inline_598_handler__14253__auto__$jscomp$inline_600$$)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$cst$0kw$0chrome_DASH_port_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$)].join("")), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
    }
    $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$ = $fn_22267$jscomp$inline_598_handler__14253__auto__$jscomp$inline_600$$.$cljs$core$IFn$_invoke$arity$2$ ? $fn_22267$jscomp$inline_598_handler__14253__auto__$jscomp$inline_600$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$, 
    this) : $fn_22267$jscomp$inline_598_handler__14253__auto__$jscomp$inline_600$$.call(null, $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$, this);
  }
  return $JSCompiler_inline_result$jscomp$523_call_info_22268$jscomp$inline_597_config__14251__auto__$jscomp$inline_599_target_obj_22266$jscomp$inline_596$$;
};
var $chromex$error$last_error$$ = $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$atom$cljs$0core$0IFn$0_invoke$0arity$01$$(null) : $cljs$core$atom$$.call(null, null);
function $chromex$error$set_last_error_BANG_$$($error$jscomp$3$$) {
  $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$reset_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($chromex$error$last_error$$, $error$jscomp$3$$) : $cljs$core$reset_BANG_$$.call(null, $chromex$error$last_error$$, $error$jscomp$3$$);
}
;var $chromex$defaults$console_log$$ = function $chromex$defaults$console_log$$($var_args$jscomp$408$$) {
  for (var $args__9188__auto__$jscomp$80$$ = [], $len__9181__auto___22449$$ = arguments.length, $i__9182__auto___22450$$ = 0;;) {
    if ($i__9182__auto___22450$$ < $len__9181__auto___22449$$) {
      $args__9188__auto__$jscomp$80$$.push(arguments[$i__9182__auto___22450$$]), $i__9182__auto___22450$$ += 1;
    } else {
      break;
    }
  }
  return $chromex$defaults$console_log$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < $args__9188__auto__$jscomp$80$$.length ? new $cljs$core$IndexedSeq$$($args__9188__auto__$jscomp$80$$.slice(0), 0, null) : null);
};
$chromex$defaults$console_log$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($args$jscomp$162$$) {
  return console.log.apply(console, $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($args$jscomp$162$$));
};
$chromex$defaults$console_log$$.$cljs$lang$maxFixedArity$ = 0;
$chromex$defaults$console_log$$.$cljs$lang$applyTo$ = function($seq22448$$) {
  return $chromex$defaults$console_log$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq22448$$));
};
var $chromex$defaults$default_logger$$ = function $chromex$defaults$default_logger$$($var_args$jscomp$410$$) {
  for (var $args__9188__auto__$jscomp$82$$ = [], $len__9181__auto___22457$$ = arguments.length, $i__9182__auto___22458$$ = 0;;) {
    if ($i__9182__auto___22458$$ < $len__9181__auto___22457$$) {
      $args__9188__auto__$jscomp$82$$.push(arguments[$i__9182__auto___22458$$]), $i__9182__auto___22458$$ += 1;
    } else {
      break;
    }
  }
  return $chromex$defaults$default_logger$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < $args__9188__auto__$jscomp$82$$.length ? new $cljs$core$IndexedSeq$$($args__9188__auto__$jscomp$82$$.slice(0), 0, null) : null);
};
$chromex$defaults$default_logger$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($args$jscomp$164$$) {
  return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($chromex$defaults$console_log$$, "[chromex]", $args$jscomp$164$$);
};
$chromex$defaults$default_logger$$.$cljs$lang$maxFixedArity$ = 0;
$chromex$defaults$default_logger$$.$cljs$lang$applyTo$ = function($seq22456$$) {
  return $chromex$defaults$default_logger$$.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq22456$$));
};
var $chromex$config$_STAR_active_config_STAR_$$ = $cljs$core$PersistentHashMap$fromArrays$$([$cljs$core$cst$0kw$0chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$, $cljs$core$cst$0kw$0chrome_DASH_port_DASH_put_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$, $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$, $cljs$core$cst$0kw$0chrome_DASH_storage_DASH_area_DASH_callback_DASH_channel_DASH_factory$$, 
$cljs$core$cst$0kw$0chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_with_DASH_nil$$, $cljs$core$cst$0kw$0chrome_DASH_port_DASH_channel_DASH_factory$$, $cljs$core$cst$0kw$0missing_DASH_api_DASH_check_DASH_fn$$, $cljs$core$cst$0kw$0chrome_DASH_port_DASH_received_DASH_nil_DASH_message$$, $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port$$, $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_fn_DASH_factory$$, $cljs$core$cst$0kw$0chrome_DASH_port_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port$$, 
$cljs$core$cst$0kw$0root$$, $cljs$core$cst$0kw$0logger$$, $cljs$core$cst$0kw$0event_DASH_listener_DASH_factory$$, $cljs$core$cst$0kw$0callback_DASH_fn_DASH_factory$$, $cljs$core$cst$0kw$0chrome_DASH_storage_DASH_area_DASH_callback_DASH_fn_DASH_factory$$, $cljs$core$cst$0kw$0callback_DASH_error_DASH_reporter$$, $cljs$core$cst$0kw$0verbose_DASH_logging$$, $cljs$core$cst$0kw$0callback_DASH_channel_DASH_factory$$, $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_fn_DASH_factory$$], [function() {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ChromePort: post-message! called on already disconnected port"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("false")].join(""));
}, function($_config$jscomp$11$$, $_chrome_port$jscomp$6$$, $message$jscomp$34$$) {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ChromePort: put-message! called on already disconnected port.\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("message: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($message$jscomp$34$$)].join("")), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("false")].join(""));
}, function() {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ChromePort: on-disconnect! called on already disconnected port"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("false")].join(""));
}, function() {
  return $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$(null);
}, function() {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ChromePort: post-message! called with nil message. Nil cannot be delivered via a core.async channel."), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("false")].join(""));
}, function() {
  return $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$(null);
}, function($api$jscomp$1$$, $obj$jscomp$106$$, $key$jscomp$130$$) {
  if ($cljs$core$not$$(null !== $obj$jscomp$106$$ && $key$jscomp$130$$ in $obj$jscomp$106$$)) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Chromex library tried to access a missing Chrome API object '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($api$jscomp$1$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'.\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Your Chrome version might be too old or too recent for running this extension.\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("This is a failure which probably requires a software update.")].join(""));
  }
  return null;
}, function() {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ChromePort: received a nil message. Nil cannot be delivered via a core.async channel."), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("false")].join(""));
}, function() {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ChromePort: on-message! called on already disconnected port"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("false")].join(""));
}, function($config$jscomp$16$$, $chrome_port$jscomp$1$$) {
  return function($handler__14253__auto__$jscomp$8_message$jscomp$33$$) {
    if (null == $handler__14253__auto__$jscomp$8_message$jscomp$33$$) {
      $handler__14253__auto__$jscomp$8_message$jscomp$33$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_received_DASH_nil_DASH_message$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$cst$0kw$0chrome_DASH_port_DASH_received_DASH_nil_DASH_message$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$16$$) : $cljs$core$cst$0kw$0chrome_DASH_port_DASH_received_DASH_nil_DASH_message$$.call(null, $config$jscomp$16$$);
      if (!$cljs$core$fn_QMARK_$$($handler__14253__auto__$jscomp$8_message$jscomp$33$$)) {
        throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$cst$0kw$0chrome_DASH_port_DASH_received_DASH_nil_DASH_message$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$16$$)].join("")), 
        $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
      }
      return $handler__14253__auto__$jscomp$8_message$jscomp$33$$.$cljs$core$IFn$_invoke$arity$2$ ? $handler__14253__auto__$jscomp$8_message$jscomp$33$$.$cljs$core$IFn$_invoke$arity$2$($config$jscomp$16$$, $chrome_port$jscomp$1$$) : $handler__14253__auto__$jscomp$8_message$jscomp$33$$.call(null, $config$jscomp$16$$, $chrome_port$jscomp$1$$);
    }
    $chromex$protocols$put_message_BANG_$$($chrome_port$jscomp$1$$, $handler__14253__auto__$jscomp$8_message$jscomp$33$$);
    return null;
  };
}, function() {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("ChromePort: disconnect! called on already disconnected port"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("false")].join(""));
}, $goog$global$$, $chromex$defaults$default_logger$$, function($_config$jscomp$1$$, $event_id$$, $chan$jscomp$9$$) {
  return function() {
    function $_config$jscomp$1$$($_config$jscomp$1$$) {
      var $event_id$$ = null;
      if (0 < arguments.length) {
        for (var $event_id$$ = 0, $chan$jscomp$9$$ = Array(arguments.length - 0); $event_id$$ < $chan$jscomp$9$$.length;) {
          $chan$jscomp$9$$[$event_id$$] = arguments[$event_id$$ + 0], ++$event_id$$;
        }
        $event_id$$ = new $cljs$core$IndexedSeq$$($chan$jscomp$9$$, 0, null);
      }
      return $G__22475__delegate$$.call(this, $event_id$$);
    }
    function $G__22475__delegate$$($_config$jscomp$1$$) {
      return $cljs$core$async$put_BANG_$cljs$0core$0IFn$0_invoke$0arity$02$$($chan$jscomp$9$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$event_id$$, $cljs$core$vec$$($_config$jscomp$1$$)], null));
    }
    $_config$jscomp$1$$.$cljs$lang$maxFixedArity$ = 0;
    $_config$jscomp$1$$.$cljs$lang$applyTo$ = function($_config$jscomp$1$$) {
      $_config$jscomp$1$$ = $cljs$core$seq$$($_config$jscomp$1$$);
      return $G__22475__delegate$$($_config$jscomp$1$$);
    };
    $_config$jscomp$1$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__22475__delegate$$;
    return $_config$jscomp$1$$;
  }();
}, function($config$jscomp$14$$, $descriptor$jscomp$3$$, $chan$jscomp$8$$) {
  return function() {
    function $G__22470$$($config$jscomp$14$$) {
      var $descriptor$jscomp$3$$ = null;
      if (0 < arguments.length) {
        for (var $descriptor$jscomp$3$$ = 0, $chan$jscomp$8$$ = Array(arguments.length - 0); $descriptor$jscomp$3$$ < $chan$jscomp$8$$.length;) {
          $chan$jscomp$8$$[$descriptor$jscomp$3$$] = arguments[$descriptor$jscomp$3$$ + 0], ++$descriptor$jscomp$3$$;
        }
        $descriptor$jscomp$3$$ = new $cljs$core$IndexedSeq$$($chan$jscomp$8$$, 0, null);
      }
      return $G__22470__delegate$$.call(this, $descriptor$jscomp$3$$);
    }
    function $G__22470__delegate$$($G__22470$$) {
      var $G__22470__delegate$$ = chrome.runtime.lastError;
      $G__22470__delegate$$ = null != $G__22470__delegate$$ ? $G__22470__delegate$$ : null;
      if ($cljs$core$truth_$$($G__22470__delegate$$)) {
        if ($chromex$error$set_last_error_BANG_$$($G__22470__delegate$$), $G__22470$$ = $cljs$core$cst$0kw$0callback_DASH_error_DASH_reporter$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$14$$), $cljs$core$truth_$$($G__22470$$)) {
          if (!$cljs$core$fn_QMARK_$$($G__22470$$)) {
            throw Error("Assert failed: (fn? error-reporter)");
          }
          $G__22470$$.$cljs$core$IFn$_invoke$arity$2$ ? $G__22470$$.$cljs$core$IFn$_invoke$arity$2$($descriptor$jscomp$3$$, $G__22470__delegate$$) : $G__22470$$.call(null, $descriptor$jscomp$3$$, $G__22470__delegate$$);
        }
      } else {
        $chromex$error$set_last_error_BANG_$$(null), $cljs$core$async$put_BANG_$cljs$0core$0IFn$0_invoke$0arity$02$$($chan$jscomp$8$$, $cljs$core$vec$$($G__22470$$));
      }
      return $cljs$core$async$impl$protocols$close_BANG_$$($chan$jscomp$8$$);
    }
    $G__22470$$.$cljs$lang$maxFixedArity$ = 0;
    $G__22470$$.$cljs$lang$applyTo$ = function($config$jscomp$14$$) {
      $config$jscomp$14$$ = $cljs$core$seq$$($config$jscomp$14$$);
      return $G__22470__delegate$$($config$jscomp$14$$);
    };
    $G__22470$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__22470__delegate$$;
    return $G__22470$$;
  }();
}, function($config$jscomp$15$$, $chan$jscomp$10$$) {
  return function() {
    function $G__22486$$($config$jscomp$15$$) {
      var $chan$jscomp$10$$ = null;
      if (0 < arguments.length) {
        for (var $chan$jscomp$10$$ = 0, $G__22486$$ = Array(arguments.length - 0); $chan$jscomp$10$$ < $G__22486$$.length;) {
          $G__22486$$[$chan$jscomp$10$$] = arguments[$chan$jscomp$10$$ + 0], ++$chan$jscomp$10$$;
        }
        $chan$jscomp$10$$ = new $cljs$core$IndexedSeq$$($G__22486$$, 0, null);
      }
      return $G__22486__delegate$$.call(this, $chan$jscomp$10$$);
    }
    function $G__22486__delegate$$($G__22486$$) {
      var $G__22486__delegate$$ = $cljs$core$cst$0kw$0root$$.$cljs$core$IFn$_invoke$arity$1$($config$jscomp$15$$).chrome.runtime.lastError;
      $G__22486__delegate$$ = null != $G__22486__delegate$$ ? $G__22486__delegate$$ : null;
      return $cljs$core$async$put_BANG_$cljs$0core$0IFn$0_invoke$0arity$02$$($chan$jscomp$10$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$vec$$($G__22486$$), $G__22486__delegate$$], null));
    }
    $G__22486$$.$cljs$lang$maxFixedArity$ = 0;
    $G__22486$$.$cljs$lang$applyTo$ = function($config$jscomp$15$$) {
      $config$jscomp$15$$ = $cljs$core$seq$$($config$jscomp$15$$);
      return $G__22486__delegate$$($config$jscomp$15$$);
    };
    $G__22486$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__22486__delegate$$;
    return $G__22486$$;
  }();
}, function($descriptor$jscomp$1$$, $error$jscomp$4$$) {
  var $function$_message$jscomp$32_or__7960__auto__$jscomp$inline_607$$ = [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$namespace$$($cljs$core$cst$0kw$0id$$.$cljs$core$IFn$_invoke$arity$1$($descriptor$jscomp$1$$))), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("/"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$name$$($cljs$core$cst$0kw$0id$$.$cljs$core$IFn$_invoke$arity$1$($descriptor$jscomp$1$$)))].join("");
  $function$_message$jscomp$32_or__7960__auto__$jscomp$inline_607$$ = $cljs$core$truth_$$($function$_message$jscomp$32_or__7960__auto__$jscomp$inline_607$$) ? $function$_message$jscomp$32_or__7960__auto__$jscomp$inline_607$$ : "an unknown function";
  var $explanation$$ = $error$jscomp$4$$.message;
  $function$_message$jscomp$32_or__7960__auto__$jscomp$inline_607$$ = [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("an error occured during the call to "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($function$_message$jscomp$32_or__7960__auto__$jscomp$inline_607$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$truth_$$($explanation$$) ? [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(": "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($explanation$$)].join("") : null)].join("");
  return console.error.apply(console, $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$array_seq$$(["[chromex]", $function$_message$jscomp$32_or__7960__auto__$jscomp$inline_607$$, "Details:", $error$jscomp$4$$], 0)));
}, !1, function() {
  return $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$(null);
}, function($_config$jscomp$4$$, $chrome_port$jscomp$2$$) {
  return function() {
    $chromex$protocols$close_resources_BANG_$$($chrome_port$jscomp$2$$);
    $chromex$protocols$set_connected_BANG_$$($chrome_port$jscomp$2$$, !1);
    return null;
  };
}]);
console.log("CONTENT SCRIPT: init");
var $background_port$jscomp$inline_611$$, $final_args_array_23215$jscomp$inline_660$$ = $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$, $cljs$core$filter$cljs$0core$0IFn$0_invoke$0arity$02$$(function($f$jscomp$168$$) {
  return function() {
    function $G__12172__2$$($G__12172__2$$, $G__12172__1$$) {
      return $cljs$core$not$$($f$jscomp$168$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$168$$.$cljs$core$IFn$_invoke$arity$2$($G__12172__2$$, $G__12172__1$$) : $f$jscomp$168$$.call(null, $G__12172__2$$, $G__12172__1$$));
    }
    function $G__12172__1$$($G__12172__2$$) {
      return $cljs$core$not$$($f$jscomp$168$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$168$$.$cljs$core$IFn$_invoke$arity$1$($G__12172__2$$) : $f$jscomp$168$$.call(null, $G__12172__2$$));
    }
    function $G__12172__0$$() {
      return $cljs$core$not$$($f$jscomp$168$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$168$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$168$$.call(null));
    }
    var $G__12172$$ = null, $G__12172__3$$ = function() {
      function $G__12172__2$$($f$jscomp$168$$, $G__12172__2$$, $G__12172__0$$) {
        var $G__12172$$ = null;
        if (2 < arguments.length) {
          for (var $G__12172$$ = 0, $G__12172__3$$ = Array(arguments.length - 2); $G__12172$$ < $G__12172__3$$.length;) {
            $G__12172__3$$[$G__12172$$] = arguments[$G__12172$$ + 2], ++$G__12172$$;
          }
          $G__12172$$ = new $cljs$core$IndexedSeq$$($G__12172__3$$, 0, null);
        }
        return $G__12172__1$$.call(this, $f$jscomp$168$$, $G__12172__2$$, $G__12172$$);
      }
      function $G__12172__1$$($G__12172__2$$, $G__12172__1$$, $G__12172__0$$) {
        return $cljs$core$not$$($cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$04$$($f$jscomp$168$$, $G__12172__2$$, $G__12172__1$$, $G__12172__0$$));
      }
      $G__12172__2$$.$cljs$lang$maxFixedArity$ = 2;
      $G__12172__2$$.$cljs$lang$applyTo$ = function($f$jscomp$168$$) {
        var $G__12172__2$$ = $cljs$core$first$$($f$jscomp$168$$);
        $f$jscomp$168$$ = $cljs$core$next$$($f$jscomp$168$$);
        var $G__12172__0$$ = $cljs$core$first$$($f$jscomp$168$$);
        $f$jscomp$168$$ = $cljs$core$rest$$($f$jscomp$168$$);
        return $G__12172__1$$($G__12172__2$$, $G__12172__0$$, $f$jscomp$168$$);
      };
      $G__12172__2$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__12172__1$$;
      return $G__12172__2$$;
    }(), $G__12172$$ = function($f$jscomp$168$$, $G__12172$$, $var_args$jscomp$154$$) {
      switch(arguments.length) {
        case 0:
          return $G__12172__0$$.call(this);
        case 1:
          return $G__12172__1$$.call(this, $f$jscomp$168$$);
        case 2:
          return $G__12172__2$$.call(this, $f$jscomp$168$$, $G__12172$$);
        default:
          var $x$jscomp$332$$ = null;
          if (2 < arguments.length) {
            for (var $x$jscomp$332$$ = 0, $y$jscomp$127$$ = Array(arguments.length - 2); $x$jscomp$332$$ < $y$jscomp$127$$.length;) {
              $y$jscomp$127$$[$x$jscomp$332$$] = arguments[$x$jscomp$332$$ + 2], ++$x$jscomp$332$$;
            }
            $x$jscomp$332$$ = new $cljs$core$IndexedSeq$$($y$jscomp$127$$, 0, null);
          }
          return $G__12172__3$$.$cljs$core$IFn$_invoke$arity$variadic$($f$jscomp$168$$, $G__12172$$, $x$jscomp$332$$);
      }
      throw Error("Invalid arity: " + (arguments.length - 1));
    };
    $G__12172$$.$cljs$lang$maxFixedArity$ = 2;
    $G__12172$$.$cljs$lang$applyTo$ = $G__12172__3$$.$cljs$lang$applyTo$;
    $G__12172$$.$cljs$core$IFn$_invoke$arity$0$ = $G__12172__0$$;
    $G__12172$$.$cljs$core$IFn$_invoke$arity$1$ = $G__12172__1$$;
    $G__12172$$.$cljs$core$IFn$_invoke$arity$2$ = $G__12172__2$$;
    $G__12172$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__12172__3$$.$cljs$core$IFn$_invoke$arity$variadic$;
    return $G__12172$$;
  }();
}(function($can_be_omitted_QMARK__p__14315$$) {
  var $val$jscomp$87$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($can_be_omitted_QMARK__p__14315$$, 0, null), $param_name$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($can_be_omitted_QMARK__p__14315$$, 1, null);
  $can_be_omitted_QMARK__p__14315$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($can_be_omitted_QMARK__p__14315$$, 2, null);
  if ($cljs$core$keyword_identical_QMARK_$$($val$jscomp$87$$, $cljs$core$cst$0kw$0omit$$)) {
    if (!$cljs$core$truth_$$($can_be_omitted_QMARK__p__14315$$)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Parameter '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($param_name$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("' cannot be omitted in a call to '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("chrome.runtime.connect"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("'."), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" Parameter not declared as optional.")].join("")), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("can-be-omitted?")].join(""));
    }
    return !0;
  }
  return null;
}), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0kw$0omit$$, "extension-id", !0], null), new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$cst$0kw$0omit$$, "connect-info", !0], null)], null)))), $ns_23216$jscomp$inline_661$$ = $cljs$core$cst$0kw$0root$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$).chrome.runtime, 
$api_check_fn__14285__auto___23226$jscomp$inline_662$$ = $cljs$core$cst$0kw$0missing_DASH_api_DASH_check_DASH_fn$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$);
if (!$cljs$core$fn_QMARK_$$($api_check_fn__14285__auto___23226$jscomp$inline_662$$)) {
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid :api-check-fn in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config:"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$)].join("")), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? api-check-fn__14285__auto__)")].join(""));
}
$api_check_fn__14285__auto___23226$jscomp$inline_662$$.$cljs$core$IFn$_invoke$arity$3$ ? $api_check_fn__14285__auto___23226$jscomp$inline_662$$.$cljs$core$IFn$_invoke$arity$3$("chrome.runtime.connect", $ns_23216$jscomp$inline_661$$, "connect") : $api_check_fn__14285__auto___23226$jscomp$inline_662$$.call(null, "chrome.runtime.connect", $ns_23216$jscomp$inline_661$$, "connect");
if ($cljs$core$truth_$$($cljs$core$cst$0kw$0verbose_DASH_logging$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$))) {
  var $logger__14281__auto___23228$jscomp$inline_663$$ = $cljs$core$cst$0kw$0logger$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$);
  if (!$cljs$core$fn_QMARK_$$($logger__14281__auto___23228$jscomp$inline_663$$)) {
    throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid :logger in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config:"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$)].join("")), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? logger__14281__auto__)")].join(""));
  }
  $logger__14281__auto___23228$jscomp$inline_663$$.apply(null, ["calling:", "chrome.runtime.connect"].concat($final_args_array_23215$jscomp$inline_660$$));
}
var $next_obj_23224$jscomp$inline_664$$ = $ns_23216$jscomp$inline_661$$.connect;
$background_port$jscomp$inline_611$$ = function($native_chrome_port$jscomp$2$$) {
  if (!$cljs$core$truth_$$($native_chrome_port$jscomp$2$$)) {
    throw Error("Assert failed: native-chrome-port");
  }
  var $channel$jscomp$4$$ = function() {
    var $native_chrome_port$jscomp$2$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_channel_DASH_factory$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$cst$0kw$0chrome_DASH_port_DASH_channel_DASH_factory$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$) : $cljs$core$cst$0kw$0chrome_DASH_port_DASH_channel_DASH_factory$$.call(null, $chromex$config$_STAR_active_config_STAR_$$);
    if (!$cljs$core$fn_QMARK_$$($native_chrome_port$jscomp$2$$)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$cst$0kw$0chrome_DASH_port_DASH_channel_DASH_factory$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$)].join("")), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
    }
    return $native_chrome_port$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $native_chrome_port$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$) : $native_chrome_port$jscomp$2$$.call(null, $chromex$config$_STAR_active_config_STAR_$$);
  }(), $chrome_port$$ = new $chromex$chrome_port$ChromePort$$($chromex$config$_STAR_active_config_STAR_$$, $native_chrome_port$jscomp$2$$, $channel$jscomp$4$$, !0);
  $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_message_BANG_$arity$2$$($chrome_port$$, function() {
    var $native_chrome_port$jscomp$2$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_fn_DASH_factory$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_fn_DASH_factory$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$) : $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_fn_DASH_factory$$.call(null, $chromex$config$_STAR_active_config_STAR_$$);
    if (!$cljs$core$fn_QMARK_$$($native_chrome_port$jscomp$2$$)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_message_DASH_fn_DASH_factory$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$)].join("")), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
    }
    return $native_chrome_port$jscomp$2$$.$cljs$core$IFn$_invoke$arity$2$ ? $native_chrome_port$jscomp$2$$.$cljs$core$IFn$_invoke$arity$2$($chromex$config$_STAR_active_config_STAR_$$, $chrome_port$$) : $native_chrome_port$jscomp$2$$.call(null, $chromex$config$_STAR_active_config_STAR_$$, $chrome_port$$);
  }());
  $JSCompiler_StaticMethods_chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2$$($chrome_port$$, function() {
    var $native_chrome_port$jscomp$2$$ = $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_fn_DASH_factory$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_fn_DASH_factory$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$) : $cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_fn_DASH_factory$$.call(null, $chromex$config$_STAR_active_config_STAR_$$);
    if (!$cljs$core$fn_QMARK_$$($native_chrome_port$jscomp$2$$)) {
      throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("Assert failed: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("invalid "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$cst$0kw$0chrome_DASH_port_DASH_on_DASH_disconnect_DASH_fn_DASH_factory$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" in chromex config\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("config: "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($chromex$config$_STAR_active_config_STAR_$$)].join("")), 
      $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("\n"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("(clojure.core/fn? handler__14253__auto__)")].join(""));
    }
    return $native_chrome_port$jscomp$2$$.$cljs$core$IFn$_invoke$arity$2$ ? $native_chrome_port$jscomp$2$$.$cljs$core$IFn$_invoke$arity$2$($chromex$config$_STAR_active_config_STAR_$$, $chrome_port$$) : $native_chrome_port$jscomp$2$$.call(null, $chromex$config$_STAR_active_config_STAR_$$, $chrome_port$$);
  }());
  return $chrome_port$$;
}((null != $next_obj_23224$jscomp$inline_664$$ ? $next_obj_23224$jscomp$inline_664$$ : null).apply($ns_23216$jscomp$inline_661$$, $final_args_array_23215$jscomp$inline_660$$));
$chromex$protocols$post_message_BANG_$$($background_port$jscomp$inline_611$$, "hello spacechrome!");
(function($message_channel$$) {
  console.log("CONTENT SCRIPT: starting message loop...");
  var $c__16128__auto__$jscomp$20$$ = $cljs$core$async$chan$cljs$0core$0IFn$0_invoke$0arity$03$$(1);
  $cljs$core$async$impl$dispatch$run$$(function($c__16128__auto__$jscomp$20$$) {
    return function() {
      var $c__16128__auto__$jscomp$21$$ = function() {
        return function($message_channel$$) {
          return function() {
            function $c__16128__auto__$jscomp$20$$($c__16128__auto__$jscomp$20$$) {
              for (;;) {
                a: {
                  try {
                    for (;;) {
                      var $c__16128__auto__$jscomp$21$$ = $message_channel$$($c__16128__auto__$jscomp$20$$);
                      if (!$cljs$core$keyword_identical_QMARK_$$($c__16128__auto__$jscomp$21$$, $cljs$core$cst$0kw$0recur$$)) {
                        var $f__16129__auto__$jscomp$21$$ = $c__16128__auto__$jscomp$21$$;
                        break a;
                      }
                    }
                  } catch ($e24042$jscomp$inline_507$$) {
                    if ($e24042$jscomp$inline_507$$ instanceof Object) {
                      $c__16128__auto__$jscomp$20$$[5] = $e24042$jscomp$inline_507$$, $cljs$core$async$impl$ioc_helpers$process_exception$$($c__16128__auto__$jscomp$20$$), $f__16129__auto__$jscomp$21$$ = $cljs$core$cst$0kw$0recur$$;
                    } else {
                      throw $e24042$jscomp$inline_507$$;
                    }
                  }
                }
                if (!$cljs$core$keyword_identical_QMARK_$$($f__16129__auto__$jscomp$21$$, $cljs$core$cst$0kw$0recur$$)) {
                  return $f__16129__auto__$jscomp$21$$;
                }
              }
            }
            function $c__16128__auto__$jscomp$21$$() {
              var $message_channel$$ = [null, null, null, null, null, null, null, null, null, null, null];
              $message_channel$$[0] = $f__16129__auto__$jscomp$21$$;
              $message_channel$$[1] = 1;
              return $message_channel$$;
            }
            var $f__16129__auto__$jscomp$21$$ = null, $f__16129__auto__$jscomp$21$$ = function($message_channel$$) {
              switch(arguments.length) {
                case 0:
                  return $c__16128__auto__$jscomp$21$$.call(this);
                case 1:
                  return $c__16128__auto__$jscomp$20$$.call(this, $message_channel$$);
              }
              throw Error("Invalid arity: " + (arguments.length - 1));
            };
            $f__16129__auto__$jscomp$21$$.$cljs$core$IFn$_invoke$arity$0$ = $c__16128__auto__$jscomp$21$$;
            $f__16129__auto__$jscomp$21$$.$cljs$core$IFn$_invoke$arity$1$ = $c__16128__auto__$jscomp$20$$;
            return $f__16129__auto__$jscomp$21$$;
          }();
        }(function() {
          return function($c__16128__auto__$jscomp$20$$) {
            var $c__16128__auto__$jscomp$21$$ = $c__16128__auto__$jscomp$20$$[1];
            if (1 === $c__16128__auto__$jscomp$21$$) {
              return $c__16128__auto__$jscomp$20$$[2] = null, $c__16128__auto__$jscomp$20$$[1] = 2, $cljs$core$cst$0kw$0recur$$;
            }
            if (2 === $c__16128__auto__$jscomp$21$$) {
              return $cljs$core$async$impl$ioc_helpers$take_BANG_$$($c__16128__auto__$jscomp$20$$, $message_channel$$);
            }
            if (3 === $c__16128__auto__$jscomp$21$$) {
              return $cljs$core$async$impl$ioc_helpers$return_chan$$($c__16128__auto__$jscomp$20$$, $c__16128__auto__$jscomp$20$$[2]);
            }
            if (4 === $c__16128__auto__$jscomp$21$$) {
              return $c__16128__auto__$jscomp$21$$ = $c__16128__auto__$jscomp$20$$[2], $c__16128__auto__$jscomp$20$$[7] = $c__16128__auto__$jscomp$21$$, $c__16128__auto__$jscomp$20$$[1] = $cljs$core$truth_$$($c__16128__auto__$jscomp$21$$) ? 5 : 6, $cljs$core$cst$0kw$0recur$$;
            }
            if (5 === $c__16128__auto__$jscomp$21$$) {
              return $c__16128__auto__$jscomp$21$$ = $c__16128__auto__$jscomp$20$$[7], console.log("CONTENT SCRIPT: got message:", $c__16128__auto__$jscomp$21$$), $c__16128__auto__$jscomp$20$$[8] = null, $c__16128__auto__$jscomp$20$$[2] = null, $c__16128__auto__$jscomp$20$$[1] = 2, $cljs$core$cst$0kw$0recur$$;
            }
            if (6 === $c__16128__auto__$jscomp$21$$) {
              return $c__16128__auto__$jscomp$20$$[2] = null, $c__16128__auto__$jscomp$20$$[1] = 7, $cljs$core$cst$0kw$0recur$$;
            }
            if (7 === $c__16128__auto__$jscomp$21$$) {
              $c__16128__auto__$jscomp$21$$ = $c__16128__auto__$jscomp$20$$[2];
              var $f__16129__auto__$jscomp$21$$ = console.log("CONTENT SCRIPT: leaving message loop");
              $c__16128__auto__$jscomp$20$$[9] = $f__16129__auto__$jscomp$21$$;
              $c__16128__auto__$jscomp$20$$[10] = $c__16128__auto__$jscomp$21$$;
              $c__16128__auto__$jscomp$20$$[2] = null;
              $c__16128__auto__$jscomp$20$$[1] = 3;
              return $cljs$core$cst$0kw$0recur$$;
            }
            return null;
          };
        }($c__16128__auto__$jscomp$20$$), $c__16128__auto__$jscomp$20$$);
      }(), $state__16130__auto__$jscomp$21$$ = function() {
        var $message_channel$$ = $c__16128__auto__$jscomp$21$$.$cljs$core$IFn$_invoke$arity$0$ ? $c__16128__auto__$jscomp$21$$.$cljs$core$IFn$_invoke$arity$0$() : $c__16128__auto__$jscomp$21$$.call(null);
        $message_channel$$[6] = $c__16128__auto__$jscomp$20$$;
        return $message_channel$$;
      }();
      return $cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped$$($state__16130__auto__$jscomp$21$$);
    };
  }($c__16128__auto__$jscomp$20$$));
})($background_port$jscomp$inline_611$$);
var $script_count$jscomp$inline_655$$ = document.getElementsByTagName("script").length, $title$jscomp$inline_656$$ = document.title, $msg$jscomp$inline_657$$ = [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("CONTENT SCRIPT: document '"), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($title$jscomp$inline_656$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("' contains "), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($script_count$jscomp$inline_655$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(" script tags.")].join("");
console.log($msg$jscomp$inline_657$$);
$chromex$protocols$post_message_BANG_$$($background_port$jscomp$inline_611$$, $msg$jscomp$inline_657$$);

})();
