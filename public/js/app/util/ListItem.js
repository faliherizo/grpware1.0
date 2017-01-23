"use strict";
/**
 * Created by Faliherizo on 02/01/2017.
 */
var ListItem = (function () {
    function ListItem(list, value, index) {
        this.list = list;
        this.index = index;
        this.value = value;
    }
    ListItem.prototype.prev = function () {
        return this.list.get(this.index - 1);
    };
    ListItem.prototype.next = function () {
        return this.list.get(this.index + 1);
    };
    return ListItem;
}());
exports.ListItem = ListItem;
var List = (function () {
    function List() {
        this.items = [];
    }
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (value) {
        this.items.push(new ListItem(this, value, this.size()));
    };
    List.prototype.get = function (index) {
        return this.items[index];
    };
    return List;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvTGlzdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHO0FBQ0g7SUFNSSxrQkFBWSxJQUFhLEVBQUUsS0FBUSxFQUFFLEtBQWE7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELHVCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxnQkFBUSxXQW1CcEIsQ0FBQTtBQUVEO0lBR0k7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsbUJBQUksR0FBSjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsa0JBQUcsR0FBSCxVQUFJLEtBQVE7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGtCQUFHLEdBQUgsVUFBSSxLQUFhO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBIiwiZmlsZSI6InV0aWwvTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgRmFsaWhlcml6byBvbiAwMi8wMS8yMDE3LlxuICovXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW08VD4ge1xuICAgIHByaXZhdGUgbGlzdDogTGlzdDxUPjtcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXI7XG5cbiAgICBwdWJsaWMgdmFsdWU6IFQ7XG5cbiAgICBjb25zdHJ1Y3RvcihsaXN0OiBMaXN0PFQ+LCB2YWx1ZTogVCwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcmV2KCk6IExpc3RJdGVtPFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5nZXQodGhpcy5pbmRleCAtIDEpO1xuICAgIH1cblxuICAgIG5leHQoKTogTGlzdEl0ZW08VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmdldCh0aGlzLmluZGV4ICsgMSk7XG4gICAgfVxufVxuXG5jbGFzcyBMaXN0PFQ+IHtcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxMaXN0SXRlbTxUPj47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIHNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGFkZCh2YWx1ZTogVCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2gobmV3IExpc3RJdGVtPFQ+KHRoaXMsIHZhbHVlLCB0aGlzLnNpemUoKSkpO1xuICAgIH1cbiAgICBnZXQoaW5kZXg6IG51bWJlcik6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
