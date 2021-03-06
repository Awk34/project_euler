/*
 * Andrew Koroluk
 */

import java.math.BigDecimal;
import java.math.BigInteger;

public class euler356 {
	public static void main(String[] args) {
		int ans = 0;
		System.out.println(Brent(new BigInteger("4")));
		System.out.println(ans);
	}
	static BigInteger Brent(BigInteger n) {
		BigInteger k = new BigInteger("1");
		BigInteger r = new BigInteger("1");
		BigInteger i = new BigInteger("1");
		BigInteger m = new BigInteger("10");
		BigInteger iter = new BigInteger("0");
		BigInteger z = new BigInteger("0");
		BigInteger x = new BigInteger("1");
		BigInteger y = new BigInteger("1");
		BigInteger q = new BigInteger("1");
		BigInteger ys = new BigInteger("1");
		y=z;

		do {
			x=y;
			for (i=BigInteger.ONE;i.compareTo(r)<=0;i=i.add(BigInteger.ONE)) y=((y.multiply(y)).add(new BigInteger("3"))).mod(n);
			k=BigInteger.ZERO;
			do {
				iter=iter.add(BigInteger.ONE);
				//System.out.print("iter=" + iter.toString() + '\r');
				ys=y;
				for (i=BigInteger.ONE;i.compareTo(min(m,r.subtract(k)))<=0;i=i.add(BigInteger.ONE)) {
					//I think that min is the lesser of m and r-k
					y=((y.multiply(y)).add(new BigInteger("3"))).mod(n);
					q=((y.subtract(x)).multiply(q)).mod(n);
				}
				z=n.gcd(q);
				k=k.add(m);
			} while (k.compareTo(r)<0 && z.compareTo(BigInteger.ONE)==0);
			r=r.multiply(new BigInteger("2"));
			} while (z.compareTo(BigInteger.ONE)==0 && iter.compareTo(new BigInteger("10000"))<0);

			if (z.compareTo(n)==0) do {
				ys=((ys.multiply(ys)).add(new BigInteger("3"))).mod(n);
				z=n.gcd(ys.subtract(x));
			} while (z.compareTo(BigInteger.ONE)==0);

		return z;
	}
	static BigInteger min(BigInteger a, BigInteger b) {
		if(a.compareTo(b)==-1) return a;
		else return b;
	}
	static BigInteger brent(int a, int b) {
		
		return null;
	}
	static BigDecimal f(int a) {
		
		return null;
	}
}

/*
    input a, b, and a pointer to a subroutine for f
    calculate f(a)
    calculate f(b)
    if f(a) f(b) >= 0 then exit function because the root is not bracketed.
    if |f(a)| < |f(b)| then swap (a,b) end if
    c := a
    set mflag
    repeat until f(b or s) = 0 or |b − a| is small enough (convergence)
        if f(a) ≠ f(c) and f(b) ≠ f(c) then
            s := \frac{af(b)f(c)}{(f(a)-f(b))(f(a)-f(c))} + \frac{bf(a)f(c)}{(f(b)-f(a))(f(b)-f(c))} + \frac{cf(a)f(b)}{(f(c)-f(a))(f(c)-f(b))} (inverse quadratic interpolation)
        else
            s := b - f(b) \frac{b-a}{f(b)-f(a)} (secant rule)
        end if
        if (condition 1) s is not between (3a + b)/4 and b
          or (condition 2) (mflag is set and |s−b| ≥ |b−c| / 2)
          or (condition 3) (mflag is cleared and |s−b| ≥ |c−d| / 2)
          or (condition 4) (mflag is set and |b−c| < |δ|)
          or (condition 5) (mflag is cleared and |c−d| < |δ|)
        then
            s := \frac{a+b}{2} (bisection method)
            set mflag
        else
            clear mflag
        end if
        calculate f(s)
        d := c (d is assigned for the first time here; it won't be used above on the first iteration because mflag is set)
        c := b
        if f(a) f(s) < 0 then b := s else a := s end if
        if |f(a)| < |f(b)| then swap (a,b) end if
    end repeat
    output b or s (return the root)
*/