"use strict";
/**
 * Created by Faliherizo on 02/01/2017.
 */
var List = (function () {
    function List() {
        this.items = [];
    }
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (value) {
        this.items.push(value);
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    return List;
}());
exports.List = List;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL3V0aWwvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSDtJQUdJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELG1CQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELGtCQUFHLEdBQUgsVUFBSSxLQUFRO1FBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGtCQUFHLEdBQUgsVUFBSSxLQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLFlBQUksT0FrQmhCLENBQUEiLCJmaWxlIjoidXRpbC9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEZhbGloZXJpem8gb24gMDIvMDEvMjAxNy5cbiAqL1xuZXhwb3J0IGNsYXNzIExpc3Q8VD4ge1xuICAgIHByaXZhdGUgaXRlbXM6IEFycmF5PFQ+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBzaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBhZGQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQoaW5kZXg6IG51bWJlcik6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
