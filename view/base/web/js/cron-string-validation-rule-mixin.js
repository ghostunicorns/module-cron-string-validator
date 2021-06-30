/*
 * Copyright © Ghost Unicorns snc. All rights reserved.
 * See LICENSE for license details.
 */

define([
    'jquery',
    'jquery/ui',
    'jquery/validate',
    'mage/translate'
], function ($) {
    'use strict';
    return function () {
        $.validator.addMethod(
            "cronexpression",
            function (value) {
                const cronregex = new RegExp(/^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/);
                return cronregex.test(value);
            },
            $.mage.__("Please enter a valid cron expression")
        );
    }
});
