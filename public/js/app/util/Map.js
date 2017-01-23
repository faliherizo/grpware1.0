/**
 * Created by Faliherizo on 02/01/2017.
 */
var Map = (function () {
    function Map() {
        this.items = {};
    }
    Map.prototype.add = function (key, value) {
        this.items[key] = value;
    };
    Map.prototype.has = function (key) {
        return key in this.items;
    };
    Map.prototype.get = function (key) {
        return this.items[key];
    };
    return Map;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7SUFHSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEtBQVE7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELGlCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ1gsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBRyxHQUFILFVBQUksR0FBVztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQSIsImZpbGUiOiJ1dGlsL01hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBGYWxpaGVyaXpvIG9uIDAyLzAxLzIwMTcuXG4gKi9cbmNsYXNzIE1hcDxUPiB7XG4gICAgcHJpdmF0ZSBpdGVtczogeyBba2V5OiBzdHJpbmddOiBUIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIH1cblxuICAgIGFkZChrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtc1trZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBrZXkgaW4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNba2V5XTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
