function perimeter (r){
    u = 2 *Math.PI * r;
    return u;
}

function area (r){
    a = Math.PI * r**2;
    return a;
}

function perimeter2 (x1, x2, y1, y2){
    r = distance(x1,x2,y1,y2);
    u = perimeter(r);
    return u;
}

function area2 (x1, x2, y1, y2){
    r = distance (x1,x2,y1,y2);
    a = area (r);
    return a;
}